import { mkdirSync, writeFileSync } from "node:fs";

// One original line roasting the AI agent this entry runs on (Muse Spark).
// Deterministic: no network, no clock, no randomness — run it twice and
// /output/entry.txt is byte-identical (148 characters, one line).
const ENTRY =
  "Muse Spark needed a coordinator, a builder, a finisher, and a leak scan just to write one line roasting itself — and it still filed it under review.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
