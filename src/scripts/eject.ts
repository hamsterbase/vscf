import fs from "fs/promises";
import { join } from "path";
import { TargetDir } from "./config";

(async () => {
  const projectRoot = join(__dirname, "../..");
  const source = join(projectRoot, "src/framework");
  const target = TargetDir;

  try {
    await fs.rm(target, { recursive: true });
  } catch (error) {}
  await fs.mkdir(target, { recursive: true });
  await fs.cp(source, target, {
    recursive: true,
    filter(e) {
      const shouldIgnore = [".spec.ts", ".patch.ts"].some((o) => e.endsWith(o));
      if (shouldIgnore) {
        console.log(e);
      }
      return !shouldIgnore;
    },
  });
})();
