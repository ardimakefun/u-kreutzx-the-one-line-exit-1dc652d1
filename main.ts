// The One-Line Exit — writes one funny one-line resignation letter to /output/entry.txt.
// Deterministic: fixed text, no network, no randomness, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const entry: string =
  "Please accept my resignation: in four years here, my only promotion was from 'new guy' to 'the guy who knows where the spare keys are.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
