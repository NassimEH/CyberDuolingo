import { createHmac } from "crypto";

import { isAuthUser, requireAuthUser } from "@/lib/apiAuth";
import { captureServerEvent } from "@/lib/posthogServer";

function base64urlEncode(input: string): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

function generateStreamToken(userId: string, secret: string): string {
  const header = base64urlEncode(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;
  const payload = base64urlEncode(
    JSON.stringify({ user_id: userId, iat, exp })
  );
  const signingInput = `${header}.${payload}`;
  const sig = createHmac("sha256", secret)
    .update(signingInput)
    .digest("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
  return `${signingInput}.${sig}`;
}

export async function GET(request: Request): Promise<Response> {
  const auth = await requireAuthUser(request);
  if (!isAuthUser(auth)) {
    void captureServerEvent("stream_token_failed", "anonymous", {
      reason: "unauthorized",
    });
    return auth;
  }

  const { userId } = auth;
  const secret = process.env.STREAM_API_SECRET;
  const apiKey = process.env.STREAM_API_KEY;

  if (!secret || !apiKey) {
    void captureServerEvent("stream_token_failed", userId, {
      reason: "stream_not_configured",
    });
    return Response.json({ error: "Stream not configured" }, { status: 500 });
  }

  const token = generateStreamToken(userId, secret);
  void captureServerEvent("stream_token_issued", userId, {
    user_id: userId,
  });
  return Response.json({ token, apiKey });
}
