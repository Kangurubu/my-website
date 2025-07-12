import {
  defineConfig,
  presetIcons,
  presetTypography,
} from 'unocss';
import { presetWind } from '@unocss/preset-wind3';

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default),
        uil: () =>
          import('@iconify-json/uil/icons.json').then((l) => l.default),
      },
    }),
    presetTypography(),
  ],
});
