import "dotenv/config";

export const VscodeDir = process.env.VSCODE_DIR!;
export const TargetDir = process.env.TARGET_DIR!;
export const ProductName = process.env.PRODUCT_NAME ?? "vscode";

if (!VscodeDir) {
  console.log("VSCODE_DIR is not set");
  process.exit(1);
}

if (!TargetDir) {
  console.log("TARGET_DIR is not set");
  process.exit(1);
}
