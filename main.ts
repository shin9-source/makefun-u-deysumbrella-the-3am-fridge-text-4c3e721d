import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "3am. The microwave just told me what you heated up at 2am. I'm not judging. The smell is.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
