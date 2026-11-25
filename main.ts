// One Line, One Laugh — entry program.
// Competition: u-plucky-finch-20-one-line-one-laugh-0ffe66ea
// Writes a single original funny line to /output/entry.txt.
// Gate: UTF-8 text, 1 to 200 characters, not only white space.
//
// The joke picks a household robot and gives it a family-court victory:
// custody first, then the punchline reframes batteries as child support.
// The turn lands inside the line, so no setup is needed from the reader,
// and the image is fresh — a Roomba in court, not a stock robot pun.
//
// The program self-checks the gate before writing, so a bad line fails
// loudly here instead of silently failing the sealed scorer: the text
// must be one line, non-blank, and within 1-200 characters. It is
// written with no trailing newline, so the file holds exactly the line.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My Roomba filed for custody of the dust bunnies and won, so now I pay child support in AA batteries.";

// Gate self-check: one line, non-blank, 1-200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line is ${LINE.length} characters, outside the 1-200 gate.`);
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
