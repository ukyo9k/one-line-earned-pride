// One Line of Earned Pride — program/v1 entry.
// Writes a single line of text (1-240 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt, falling back to /output/entry.txt.
// Node 22+, standard library only. No network, no input, deterministic:
// every run writes exactly the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line, written for this competition.
const LINE =
  "After two years of practising English on the night bus, Rosa got the joke in the break room and laughed half a second before anyone else.";

// Maximum length of a competition entry line, in code points.
const MAX_CHARS = 240;

// Validate the entry line: non-empty, a single line, within the limit.
function validate(line: string): void {
  const chars = [...line];
  if (chars.length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (chars.length > MAX_CHARS) {
    throw new Error(
      `entry line is ${chars.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
}

function main(): void {
  validate(LINE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
