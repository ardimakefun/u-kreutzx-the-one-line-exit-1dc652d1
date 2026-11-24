// The One-Line Exit — writes one funny one-line resignation letter to /output/entry.txt.
// Deterministic: fixed text, no network, no randomness, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const entry: string =
  "Please accept my resignation: in four years here, my only promotion was from 'new guy' to 'the guy who knows where the spare keys are.'";

// Length gate: count code points (not UTF-16 units) and refuse to write
// anything outside the allowed range. The bounds are named constants so
// the limit is stated once and reused by the check and the error below.
const MIN_LENGTH = 1;
const MAX_LENGTH = 140;
const ENTRY_LENGTH = [...entry].length;
if (ENTRY_LENGTH < MIN_LENGTH || ENTRY_LENGTH > MAX_LENGTH) {
  throw new Error(
    `entry length ${ENTRY_LENGTH} outside allowed range ${MIN_LENGTH}–${MAX_LENGTH}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
