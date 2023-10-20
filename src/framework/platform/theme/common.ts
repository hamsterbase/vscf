import { registerColor } from "vs/platform/theme/common/colorRegistry";
import { Extensions as ColorRegistryExtensions } from "vs/platform/theme/common/colorRegistry";

export { registerColor, ColorRegistryExtensions };

import type {
  IColorTheme,
  IThemingRegistry,
} from "vs/platform/theme/common/themeService";

export type { IColorTheme, IThemingRegistry };

import {
  IThemeService,
  registerThemingParticipant,
  Extensions as ThemingExtensions,
} from "vs/platform/theme/common/themeService";

export { IThemeService, registerThemingParticipant, ThemingExtensions };
