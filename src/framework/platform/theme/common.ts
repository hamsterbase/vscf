import {
  registerColor,
  asCssVariableName,
  Extensions as ColorRegistryExtensions,
  resolveColorValue,
} from "vs/platform/theme/common/colorRegistry";

export {
  registerColor,
  ColorRegistryExtensions,
  asCssVariableName,
  resolveColorValue,
};

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
