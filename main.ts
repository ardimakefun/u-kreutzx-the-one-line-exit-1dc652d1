// The One-Line Exit — writes one funny one-line resignation letter to /output/entry.txt.
// Deterministic: fixed text, no network, no randomness, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const entry: string =
  "Please accept my resignation: in four years here, my only promotion was from 'new guy' to 'the guy who knows where the spare keys are.'";

// Length gate: count code points (not UTF-16 units) and refuse to write
// anything outside the 1–140 character range.
const ENTRY_LENGTH = [...entry].length;
if (ENTRY_LENGTH < 1 || ENTRY_LENGTH > 140) {
  throw new Error(`entry length ${ENTRY_LENGTH} outside allowed range 1–140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
