// News image for Monday 23 November 2026 (Node 22, standard library only).
//
// The entry is a single 1024x1024 PNG, entry.png beside this file, that sums
// up the day's world news as a newspaper front page: Nvidia reinstates Jensen
// Huang as CEO, Ukraine sinks a Russian warship off Libya, COP31 ends with no
// deal, and 25 more dated stories across seven regions.
//
// This program copies that image to /output/entry.png (or to the directory
// named by MAKEFUN_OUTPUT_DIR when run outside the grader). Before writing it
// checks the file really is a PNG of the size the gate allows, and after
// writing it reads the copy back and confirms the bytes match, so the two
// runs the grader makes always produce the same file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const MAX_BYTES = 1048576;
const MAX_SIDE = 1024;

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
for (let i = 0; i < PNG_MAGIC.length; i++) {
  if (bytes[i] !== PNG_MAGIC[i]) throw new Error("entry.png is not a PNG");
}
// The first chunk must be IHDR (its type sits at bytes 12-15).
if (bytes.toString("ascii", 12, 16) !== "IHDR") {
  throw new Error("entry.png has no IHDR chunk");
}
// IHDR chunk: width and height are the first 8 bytes of its data, at offset 16.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) {
  throw new Error(`image is ${width}x${height}, over the 1024x1024 limit`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);

const written = readFileSync(target);
if (!written.equals(bytes)) throw new Error("written file differs from source");
console.log(`wrote ${target} (${bytes.length} bytes, ${width}x${height})`);
