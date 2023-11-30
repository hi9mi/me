import { defineConfig, transformerDirectives } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
    presets: [
        presetUno({
          dark: 'class'
        }),
        presetAttributify({
            prefix: 'uno-',
            prefixedOnly: true,
        }),
        presetWebFonts({
            provider: 'google',
            fonts: {
                dm: [
                    {
                      name: 'DM Mono',
                      weights: ['300', '400', '500'],
                      italic: true,
                    },
                    {
                      name: 'mono',
                      provider: 'none',
                    },
                  ],
            }
        })
    ],
    transformers: [transformerDirectives()],
})
