#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const hookDir = path.join(rootDir, ".git", "hooks");
const sourceHook = path.join(rootDir, ".githooks", "pre-commit");
const targetHook = path.join(hookDir, "pre-commit");

if (!fs.existsSync(path.join(rootDir, ".git"))) {
  console.error("Not a git repository; skipping hook install.");
  process.exit(0);
}

fs.mkdirSync(hookDir, { recursive: true });
fs.copyFileSync(sourceHook, targetHook);
fs.chmodSync(targetHook, 0o755);

const res = spawnSync("git", ["config", "core.hooksPath", ".githooks"], {
  cwd: rootDir,
  stdio: "ignore",
});

if (res.status !== 0) {
  console.error("Failed to set core.hooksPath; hooks may not run automatically.");
} else {
  console.log("Git hooks installed (core.hooksPath set to .githooks).");
}
