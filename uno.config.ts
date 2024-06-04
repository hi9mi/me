import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'
import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetAttributify({
      prefix: 'uno-',
      prefixedOnly: true,
    }),
  ],
  transformers: [transformerDirectives()],
  theme: {
    fontFamily: {
      iosevka: ['Iosevka', 'Hack', 'Consolas', 'Courier New', 'monospace'],
    },
  },
  preflights: [
    {
      getCSS: () => `
        @font-face {
          font-family: 'Iosevka';
          font-display: swap;
          font-weight: 300;
          font-stretch: normal;
          font-style: normal;
          src: url('/me/fonts/Iosevka-Light.woff2') format('woff2'), url('/me/fonts/Iosevka-Light.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Iosevka';
          font-display: swap;
          font-weight: 300;
          font-stretch: normal;
          font-style: italic;
          src: url('/me/fonts/Iosevka-LightItalic.woff2') format('woff2'), url('/me/fonts/Iosevka-LightItalic.ttf') format('truetype');
        }


        @font-face {
          font-family: 'Iosevka';
          font-display: swap;
          font-weight: 400;
          font-stretch: normal;
          font-style: normal;
          src: url('/me/fonts/Iosevka-Regular.woff2') format('woff2'), url('/me/fonts/Iosevka-Regular.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Iosevka';
          font-display: swap;
          font-weight: 400;
          font-stretch: normal;
          font-style: italic;
          src: url('/me/fonts/Iosevka-Italic.woff2') format('woff2'), url('/me/fonts/Iosevka-Italic.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Iosevka';
          font-display: swap;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          src: url('/me/fonts/Iosevka-SemiBold.woff2') format('woff2'), url('/me/fonts/Iosevka-SemiBold.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Iosevka';
          font-display: swap;
          font-weight: 600;
          font-stretch: normal;
          font-style: italic;
          src: url('/me/fonts/Iosevka-SemiBoldItalic.woff2') format('woff2'), url('/me/fonts/Iosevka-SemiBoldItalic.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Iosevka';
          font-display: swap;
          font-weight: 700;
          font-stretch: normal;
          font-style: normal;
          src: url('/me/fonts/Iosevka-Bold.woff2') format('woff2'), url('/me/fonts/Iosevka-Bold.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Iosevka';
          font-display: swap;
          font-weight: 700;
          font-stretch: normal;
          font-style: italic;
          src: url('/me/fonts/Iosevka-BoldItalic.woff2') format('woff2'), url('/me/fonts/Iosevka-BoldItalic.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Iosevka';
          font-display: swap;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          src: url('/me/fonts/Iosevka-Medium.woff2') format('woff2'), url('/me/fonts/Iosevka-Medium.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Iosevka';
          font-display: swap;
          font-weight: 500;
          font-stretch: normal;
          font-style: italic;
          src: url('/me/fonts/Iosevka-MediumItalic.woff2') format('woff2'), url('/me/fonts/Iosevka-MediumItalic.ttf') format('truetype');
        }
        `,
    },
  ],
})
