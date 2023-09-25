import { traverse } from "@babel/core";
import { parse } from "@babel/parser";
import { isStringLiteral } from "@babel/types";
import fs from "fs/promises";
import path from "path";

export class Bundler {
  private cache = new Set<string>();

  private ignoreSet = new Set<string>();

  private blockSet = new Set<string>();

  constructor(
    private external: string[],
    private rootPath: string,
    private outputPath: string,
    private files: string[],
    private blockFiles: string[]
  ) {
    this.ignoreSet = new Set([
      "http",
      "https",
      "url",
      "os",
      "path",
      "fs",
      "crypto",
      "stream",
      "util",
      "assert",
      "tty",
      "zlib",
      "net",
      "dns",
      "dgram",
      "http2",
      "tls",
      "child_process",
      "perf_hooks",
      "worker_threads",
      "v8",
      "vm",
      "perf_hooks",
      "inspector",
      "electron",
      ...this.external,
    ]);

    blockFiles.forEach(e => {
      if (!e.endsWith('.ts')) {
        throw new Error('invalid block file, must be ts file')
      }
      this.blockSet.add(e.replace(/\.ts$/, ''));
    })
  }

  private async parseAndCopy(_filePath: string): Promise<void> {
    if (this.cache.has(_filePath)) return;
    this.cache.add(_filePath);
    const { filePath, fileContent, patchPath } = await this.tryResolvePath(
      _filePath
    );
    // 文件夹
    const relativeCodePath = path.relative(
      path.join(this.rootPath, "src/vs"),
      filePath
    );

    const outputFile = path.join(this.outputPath, relativeCodePath);
    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, fileContent);
    if (patchPath) {
      await fs.writeFile(
        path.join(path.dirname(outputFile), path.basename(patchPath)),
        fileContent
      );
    }
    const imports = await this.parseImports(fileContent);
    await Promise.all(
      imports.map(async (v) => {
        const resolvePath = this.resolvePath(filePath, v);
        if (!resolvePath) {
          return;
        }
        if (resolvePath.startsWith(this.rootPath)) {
          await this.parseAndCopy(resolvePath);
        }
      })
    );
  }

  private async tryResolvePath(
    filePath: string
  ): Promise<{ filePath: string; fileContent: string; patchPath?: string }> {
    const exts = [".patch.ts", ".ts", ".tsx", ".js", ".jsx"];
    const extname = path.extname(filePath);
    let basename = filePath;
    if (exts.includes(extname)) {
      basename =
        extname.length !== 0 ? filePath.slice(0, -extname.length) : filePath;
    }
    for (const iterator of exts) {
      const fullPath = basename + iterator;
      try {
        const we = await fs.readFile(fullPath, "utf8");
        if (iterator === ".patch.ts") {
          return {
            patchPath: fullPath,
            fileContent: we,
            filePath: basename + ".ts",
          };
        }
        return {
          fileContent: we,
          filePath: fullPath,
        };
      } catch (error) { }
    }
    throw new Error("not found" + filePath);
  }

  private async parseImports(code: string): Promise<string[]> {
    const imports: string[] = [];
    traverse(
      await parse(code, {
        sourceType: "module",
        plugins: ["typescript", "decorators-legacy"],
      }),
      {
        ImportDeclaration(path) {
          imports.push(path.node.source.value);
        },
        CallExpression(path) {
          if (
            path.node.callee.type === "Import" &&
            isStringLiteral(path.node.arguments[0])
          ) {
            imports.push(path.node.arguments[0].value);
          }
        },
      }
    );
    return imports;
  }

  private resolvePath(currentFilePath: string, relativePath: string): string {
    if (this.ignoreSet.has(relativePath)) {
      return "";
    }
    if (relativePath.startsWith(".")) {
      return path.resolve(path.dirname(currentFilePath), relativePath);
    }
    const result = path.resolve(this.rootPath, relativePath.replace(/^vs/, "src/vs"));
    if (this.blockSet.has(path.relative(this.rootPath, result))) {
      console.log(currentFilePath)
      console.log(relativePath)
      throw new Error('find block file')
    }
    return result
  }

  async run(): Promise<void> {
    await Promise.all(
      this.files.map((file) =>
        this.parseAndCopy(path.join(this.rootPath, file))
      )
    );
  }
}
