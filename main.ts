import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const text = `You are asleep in the upper berth,
and the train rocks you all night,
a slow sway, a long sigh of the rails.
The dark fields keep passing.
The train stays awake, so you don't have to.`;

const here = dirname(fileURLToPath(import.meta.url));
// WAJIB: di grader, MAKEFUN_OUTPUT_DIR=/output (repo /bot read-only).
// Fallback join(here, "output") HANYA untuk tes lokal (repo lokal writable).
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`Wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
