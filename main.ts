import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const text = `You are asleep in the upper berth,
and the train rocks you all night,
a slow sway, a long sigh of the rails.
The dark fields keep passing.
The train stays awake, so you don't have to.`;

// Menulis entri ke file. Dipisah jadi helper kecil supaya langkah
// "siapkan direktori" dan "tulis file" terbaca sebagai satu niat:
// satu file output, tanpa newline di akhir, persis 183 karakter.
function writeEntry(content: string, outDir: string): string {
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, content, "utf8");
  return target;
}

const here = dirname(fileURLToPath(import.meta.url));
// WAJIB: di grader, MAKEFUN_OUTPUT_DIR=/output (repo /bot read-only).
// Fallback join(here, "output") HANYA untuk tes lokal (repo lokal writable).
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
const target = writeEntry(text, outDir);
console.log(`Wrote ${text.length} characters to ${target}`);
