import antfu from '@antfu/eslint-config'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default antfu({
  astro: true,
  formatters: true,
  plugins: {
    simpleImportSort,
  },
  rules: {
    'sort-imports': 'off',
    'simpleImportSort/imports': ['error', {
      groups: [
        ['^\\u0000'],
        ['^node:'],
        ['^@?\\w'],
        ['^'],
        ['^\\.'],
      ],
    }],
    'simpleImportSort/exports': 'error',
    'eslint-comments/no-unlimited-disable': 'off',
  },
  ignores: [
    'node_modules',
    'dist',
  ],
})
