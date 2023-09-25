import fs from "fs/promises";
import { join, resolve } from "path";
import { VscodeDir } from "./config";

const projectRoot = join(__dirname, "../..");

(async () => {
  await fs.cp(
    join(projectRoot, "src/framework/internal"),
    resolve(VscodeDir, "src/vs"),
    {
      async filter(source) {
        const stat = await fs.stat(source);
        if (stat.isDirectory()) {
          return true;
        }
        return source.endsWith("patch.ts");
      },
      recursive: true,
    }
  );
})();
