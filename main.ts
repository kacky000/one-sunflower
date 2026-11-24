import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One emoji to make a stranger smile: warm, universal, picked rather than default.
const emoji = "🌻";

if ([...emoji].length > 8) throw new Error("entry must be a single emoji");

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), emoji);
