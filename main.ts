// One Line, One Laugh — entry program.
// Writes a single original funny line to /output/entry.txt.
// Gate: UTF-8 text, 1 to 140 characters, exactly one line.
//
// The program self-checks the gate before writing, so a bad line fails
// loudly here instead of silently failing the sealed scorer: the text
// must be one line, non-blank, and within 1-140 characters. It is
// written with no trailing newline, so the file holds exactly the line.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My to-do list filed a restraining order \u2014 apparently \u2018later\u2019 counts as stalking.";

// Gate self-check: one line, non-blank, 1-140 characters.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`Entry line is ${LINE.length} characters, outside the 1-140 gate.`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry line must be a single line with no line breaks.");
}
if (LINE.trim().length === 0) {
  throw new Error("Entry line must not be only white space.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
