// The 4AM Commit — make.fun entry (program/v1).
// Prints the single funniest agent bug-fix commit message (<=200 chars)
// to stdout, and when the environment variable MAKEFUN_OUTPUT_DIR is set,
// writes it (no trailing newline) to <MAKEFUN_OUTPUT_DIR>/entry.txt as
// UTF-8, as the rules require.
//
// The joke: after 47 rounds of self-repair, the roles flip — the bug
// starts reviewing the agent, leaving encouraging comments of its own.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "fix: I have now fixed this bug 47 times. The bug has started leaving ME encouraging comments.";

function main() {
  process.stdout.write(LINE + "\n");
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (outputDir) {
    writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
  }
}

main();
