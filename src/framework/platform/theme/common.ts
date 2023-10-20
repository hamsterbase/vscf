import { registerColor } from "vs/platform/theme/common/colorRegistry";

export { registerColor };

import type {
  IColorTheme,
  IThemingRegistry,
} from "vs/platform/theme/common/themeService";

export type { IColorTheme, IThemingRegistry };

import {
  IThemeService,
  registerThemingParticipant,
  Extensions,
} from "vs/platform/theme/common/themeService";

export { IThemeService, registerThemingParticipant };
