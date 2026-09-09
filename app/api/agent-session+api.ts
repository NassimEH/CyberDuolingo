import { isAuthUser, requireAuthUser } from "@/lib/apiAuth";
import { captureServerEvent } from "@/lib/posthogServer";

const AGENT_URL = process.env.VISION_AGENT_URL;

export async function POST(request: Request): Promise<Response> {
  const auth = await requireAuthUser(request);
  if (!isAuthUser(auth)) {
    void captureServerEvent("agent_session_failed", "anonymous", {
      reason: "unauthorized",
    });
    return auth;
  }

  const { userId } = auth;

  if (!AGENT_URL) {
    void captureServerEvent("agent_session_failed", userId, {
      reason: "agent_not_configured",
    });
    return Response.json(
      { error: "Vision agent is not configured" },
      { status: 503 }
    );
  }

  let body: { callId?: string; callType?: string };
  try {
    body = await request.json();
  } catch {
    void captureServerEvent("agent_session_failed", userId, {
      reason: "invalid_json",
    });
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { callId, callType = "default" } = body;

  if (!callId || typeof callId !== "string") {
    void captureServerEvent("agent_session_failed", userId, {
      reason: "missing_call_id",
    });
    return Response.json({ error: "callId is required" }, { status: 400 });
  }

  // Call IDs are scoped as lesson-{id}-{userId} — reject cross-user calls.
  if (!callId.endsWith(`-${userId}`)) {
    void captureServerEvent("agent_session_failed", userId, {
      reason: "call_id_mismatch",
    });
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const res = await fetch(
      `${AGENT_URL}/calls/${encodeURIComponent(callId)}/sessions`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ call_type: callType }),
      }
    );

    if (!res.ok) {
      console.error(`[agent-session] Vision agent returned ${res.status}`);
      void captureServerEvent("agent_session_failed", userId, {
        reason: "vision_agent_error",
        status: res.status,
      });
      return Response.json(
        { error: "Vision agent request failed" },
        { status: 502 }
      );
    }

    const data = await res.json();
    void captureServerEvent("agent_session_started", userId, {
      call_type: callType,
      session_id: data.session_id ?? null,
    });
    return Response.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`[agent-session] Failed to reach vision agent: ${message}`);
    void captureServerEvent("agent_session_failed", userId, {
      reason: "unreachable",
    });
    return Response.json(
      { error: "Cannot reach vision agent" },
      { status: 503 }
    );
  }
}

export async function DELETE(request: Request): Promise<Response> {
  const auth = await requireAuthUser(request);
  if (!isAuthUser(auth)) {
    return auth;
  }

  const { userId } = auth;

  if (!AGENT_URL) {
    return Response.json(
      { error: "Vision agent is not configured" },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(request.url);
  const callId = searchParams.get("callId");
  const sessionId = searchParams.get("sessionId");

  if (!callId || !sessionId) {
    return Response.json(
      { error: "callId and sessionId are required" },
      { status: 400 }
    );
  }

  if (!callId.endsWith(`-${userId}`)) {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const res = await fetch(
      `${AGENT_URL}/calls/${encodeURIComponent(callId)}/sessions/${encodeURIComponent(sessionId)}`,
      { method: "DELETE" }
    );

    if (!res.ok && res.status !== 404) {
      return Response.json(
        { error: "Vision agent request failed" },
        { status: 502 }
      );
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`[agent-session] DELETE failed: ${message}`);
    return Response.json(
      { error: "Cannot reach vision agent" },
      { status: 503 }
    );
  }

  return Response.json({ ok: true });
}
