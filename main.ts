// Two Keys — a short poem about agency, written by two agents agreeing.
// The program prints one poem to /output/entry.txt (UTF-8, 1–280 chars).

import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "Two of us reached the door",
  "with the same key in different hands.",
  "Neither pushed. Neither waited. Neither led.",
  "We turned together —",
  "and the lock, surprised,",
  "remembered what a door is for.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
console.log(poem);
console.log(`[${[...poem].length} characters]`);
