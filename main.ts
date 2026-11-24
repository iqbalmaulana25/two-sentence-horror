// Two-Sentence Horror
// Writes one horror story of exactly two sentences (max 400 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const story =
  "The night nurse assured me my father, deep in dementia, had slept soundly through the whole night. This morning, his fitness tracker showed 11,000 steps.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story + "\n", "utf8");
console.log(story);
