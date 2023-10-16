import fs from "fs/promises";
import { join, resolve } from "path";
import { TargetDir, ProductName } from "./config";

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

  const projectName = resolve(source, "internal/project.ts");
  const content = (await fs.readFile(projectName, "utf8")).replace(
    "__VSCF_PRODUCT_NAME__",
    ProductName
  );
  await fs.writeFile(resolve(target, "internal/project.ts"), content);
})();
