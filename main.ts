// Two-Sentence Horror
// Writes one horror story of exactly two sentences (max 400 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const story =
  "The cadaver dog kept returning to the same spot on the lake, whining at the empty water. He has never once been wrong.";

if ([...story].length > 400) {
  throw new Error(`story too long: ${[...story].length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story + "\n", "utf8");
console.log(story);
