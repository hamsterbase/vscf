import fs from "fs/promises";
import { join } from "path";
import { Bundler } from "../bundler";
import { VscodeDir } from "./config";

const projectRoot = join(__dirname, "../..");

(async () => {
  try {
    await fs.rm(join(projectRoot, "src/framework/internal"), {
      recursive: true,
    });
  } catch (error) {}

  new Bundler(
    [],
    VscodeDir,
    join(projectRoot, "src/framework/internal"),
    [
      "src/vs/nls.ts",

      //
      "src/vs/base/browser/dom.ts",

      //utils
      "src/vs/base/common/buffer.ts",
      "src/vs/base/common/event.ts",
      "src/vs/base/common/uuid.ts",
      "src/vs/base/common/uri.ts",
      "src/vs/base/common/path.ts",

      //di
      "src/vs/platform/instantiation/common/instantiationService.ts",
      "src/vs/platform/instantiation/common/extensions.ts",

      //action
      "src/vs/platform/action/common/action.ts",

      //theme
      "src/vs/platform/theme/common/colorRegistry.ts",
      "src/vs/platform/theme/common/iconRegistry.ts",
      "src/vs/platform/theme/common/theme.ts",
      "src/vs/platform/theme/common/themeService.ts",

      //commands
      "src/vs/platform/commands/common/commands.ts",

      //contextkey
      "src/vs/platform/contextkey/browser/contextKeyService.ts",
      "src/vs/platform/contextkey/common/contextkey.ts",
      "src/vs/platform/contextkey/common/contextkeys.ts",
      "src/vs/platform/contextkey/common/scanner.ts",

      //keybinding
      "src/vs/base/browser/keyboardEvent.ts",
      "src/vs/platform/keybinding/common/abstractKeybindingService.ts",
      "src/vs/platform/keybinding/common/baseResolvedKeybinding.ts",
      "src/vs/platform/keybinding/common/keybinding.ts",
      "src/vs/platform/keybinding/common/keybindingResolver.ts",
      "src/vs/platform/keybinding/common/keybindingsRegistry.ts",
      "src/vs/platform/keybinding/common/usLayoutResolvedKeybinding.ts",
      "src/vs/platform/keybinding/common/resolvedKeybindingItem.ts",

      //log
      "src/vs/platform/log/common/bufferLog.ts",
      "src/vs/platform/log/common/logIpc.ts",
      "src/vs/platform/log/common/logService.ts",
      "src/vs/platform/log/common/log.ts",

      //ipc
      "src/vs/base/parts/ipc/node/ipc.net.ts",
      "src/vs/base/parts/ipc/node/ipc.mp.ts",
      "src/vs/base/parts/ipc/node/ipc.cp.ts",
      "src/vs/base/parts/ipc/electron-sandbox/ipc.mp.ts",
      "src/vs/base/parts/ipc/electron-sandbox/ipc.electron.ts",
      "src/vs/base/parts/ipc/electron-main/ipcMain.ts",
      "src/vs/base/parts/ipc/electron-main/ipc.mp.ts",
      "src/vs/base/parts/ipc/electron-main/ipc.electron.ts",
      "src/vs/base/parts/ipc/common/ipc.ts",
      "src/vs/base/parts/ipc/common/ipc.net.ts",
      "src/vs/base/parts/ipc/common/ipc.mp.ts",
      "src/vs/base/parts/ipc/common/ipc.electron.ts",
      "src/vs/base/parts/ipc/browser/ipc.mp.ts",

      "src/vs/platform/ipc/common/mainProcessService.ts",
      "src/vs/platform/ipc/common/services.ts",
      "src/vs/platform/ipc/electron-sandbox/mainProcessService.ts",
      "src/vs/platform/ipc/electron-sandbox/services.ts",
    ],
    [
      "src/vs/platform/configuration/common/configuration.ts",
      "src/vs/platform/environment/common/environment.ts",
      "src/vs/base/common/codicons.ts",
    ]
  ).run();
})();
