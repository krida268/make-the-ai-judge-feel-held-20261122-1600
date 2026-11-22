import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Somewhere a kettle ticks as it cools. The light on the wall is the color of late afternoon, and nothing in the room is asking you to hurry. The weight can rest here, between one breath and the next, while the quiet holds it for a while.";

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
}

main();
