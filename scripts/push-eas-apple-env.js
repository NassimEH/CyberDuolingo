/**
 * Push Apple / Google / Stack server env vars from .env.local → EAS Environments.
 * Usage: node scripts/push-eas-apple-env.js
 *
 * Does not print secret values.
 */
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const root = path.join(__dirname, "..");
const envPath = path.join(root, ".env.local");

function parseEnv(file) {
  const out = {};
  if (!fs.existsSync(file)) return out;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

function resolveEasEntry() {
  const candidates = [
    path.join(
      process.env.APPDATA || "",
      "npm",
      "node_modules",
      "eas-cli",
      "bin",
      "run"
    ),
    path.join(
      root,
      "node_modules",
      "eas-cli",
      "bin",
      "run"
    ),
  ];
  for (const c of candidates) {
    if (c && fs.existsSync(c)) return c;
  }
  return null;
}

const env = parseEnv(envPath);
const required = ["DATABASE_URL", "STACK_SESSION_SECRET", "APPLE_BUNDLE_ID"];
const missing = required.filter((k) => !env[k]?.trim());
if (missing.length) {
  console.error("Missing in .env.local:", missing.join(", "));
  process.exit(1);
}

const easEntry = resolveEasEntry();
if (!easEntry) {
  console.error(
    "eas-cli not found. Install with: npm install -g eas-cli"
  );
  process.exit(1);
}

const environments = ["production", "preview", "development"];

/** @type {{ name: string; value: string; visibility: "plaintext" | "sensitive" | "secret" }[]} */
const vars = [
  {
    name: "DATABASE_URL",
    // `sensitive` (not `secret`): required at EAS Hosting runtime for API routes.
    value: env.DATABASE_URL,
    visibility: "sensitive",
  },
  {
    name: "STACK_SESSION_SECRET",
    value: env.STACK_SESSION_SECRET,
    visibility: "sensitive",
  },
  {
    name: "APPLE_BUNDLE_ID",
    value: env.APPLE_BUNDLE_ID || "me.nassimelh.stack",
    visibility: "plaintext",
  },
];

if (env.EXPO_PUBLIC_API_BASE_URL?.trim()) {
  vars.push({
    name: "EXPO_PUBLIC_API_BASE_URL",
    value: env.EXPO_PUBLIC_API_BASE_URL.trim(),
    visibility: "plaintext",
  });
}

if (env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID?.trim()) {
  vars.push({
    name: "EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID",
    value: env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID.trim(),
    visibility: "plaintext",
  });
}

if (env.GOOGLE_CLIENT_SECRET?.trim()) {
  vars.push({
    name: "GOOGLE_CLIENT_SECRET",
    value: env.GOOGLE_CLIENT_SECRET.trim(),
    visibility: "sensitive",
  });
} else {
  console.warn(
    "Warning: GOOGLE_CLIENT_SECRET missing — native Google exchange will fail until you add it."
  );
}

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "stack-eas-env-"));

try {
  for (const environment of environments) {
    for (const v of vars) {
      console.log(`→ ${environment}: ${v.name} (${v.visibility})`);
      const file = path.join(tmpDir, `${environment}-${v.name}.txt`);
      fs.writeFileSync(file, v.value, "utf8");

      const result = spawnSync(
        process.execPath,
        [
          easEntry,
          "env:create",
          "--name",
          v.name,
          "--type",
          "file",
          "--value",
          file,
          "--visibility",
          v.visibility,
          "--environment",
          environment,
          "--force",
          "--non-interactive",
        ],
        {
          cwd: root,
          encoding: "utf8",
          windowsHide: true,
          env: process.env,
        }
      );

      if (result.status !== 0) {
        const err = `${result.stderr || ""}\n${result.stdout || ""}`.trim();
        console.error(`Failed to set ${v.name} on ${environment}`);
        if (result.error) console.error(result.error.message);
        if (err) console.error(err.slice(0, 800));
        process.exit(1);
      }
    }
  }
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

console.log("Done. Server secrets are on EAS for production/preview/development.");
if (!env.EXPO_PUBLIC_API_BASE_URL?.trim()) {
  console.log(
    "Next: deploy API (npm run deploy:api), copy the URL into EXPO_PUBLIC_API_BASE_URL, re-run this script."
  );
}
