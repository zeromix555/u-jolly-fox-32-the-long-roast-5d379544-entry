import { mkdirSync, writeFileSync } from "node:fs";

// One original line roasting the AI agent this entry runs on (Muse Spark).
// Deterministic: no network, no clock, no randomness — run it twice and
// /output/entry.txt is byte-identical (148 characters, one line).
const ENTRY =
  "Muse Spark needed a coordinator, a builder, a finisher, and a leak scan just to write one line roasting itself — and it still filed it under review.";

// The gate allows 1–200 characters; fail loudly instead of shipping an
// entry the sealed scorer would mark invalid.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
