<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'

import { getLangFromUrl } from '../i18n/get-lang-from-url'
import { getTranslations } from '../i18n/get-translations'

const isLight = useMediaQuery('(prefers-color-scheme: light)')
const preferredColorScheme = computed(() => (isLight ? 'light' : 'dark'))
const theme = ref(globalThis.localStorage.getItem('theme') ?? preferredColorScheme)
const lang = getLangFromUrl(location.pathname)
const t = getTranslations(lang)

function toggle() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

function syncTheme(event: StorageEvent) {
  const { storageArea, newValue } = event
  if (storageArea === globalThis.localStorage && newValue) {
    theme.value = newValue
  }
}

onMounted(() => {
  globalThis.addEventListener('storage', syncTheme)
})

onBeforeUnmount(() => {
  globalThis.removeEventListener('storage', syncTheme)
})

watchEffect(() => {
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  }
  else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('theme', theme.value)
})

function useMediaQuery(query: string) {
  const matches = ref(false)
  let queryList: MediaQueryList | undefined

  const handler = (event: MediaQueryListEvent) => {
    matches.value = event.matches
  }

  const stopWatch = watchEffect(() => {
    queryList = globalThis.matchMedia(query)
    matches.value = queryList.matches

    queryList.addEventListener('change', handler)
  })

  const cleanup = () => {
    if (queryList) {
      globalThis.matchMedia(query).removeEventListener('change', handler)
      queryList = undefined
    }
  }

  onBeforeUnmount(() => {
    stopWatch()
    cleanup()
  })

  return matches
}
</script>

<template>
  <button
    id="theme-toggle"
    :title="`${t('themeSwitcher.text')} ${
      theme === 'dark' ? t('themeSwitcher.light') : t('themeSwitcher.dark')
    }`"
    :aria-label="`${t('themeSwitcher.text')} ${
      theme === 'dark' ? t('themeSwitcher.light') : t('themeSwitcher.dark')
    }`"
    type="button"
    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-200 dark:focus-visible:ring-gray-700 rounded-lg text-sm p-2.5 h-max"
    @click="toggle"
  >
    <svg
      id="theme-toggle-dark-icon"
      aria-hidden="true"
      class="w-5 h-5"
      :class="{ hidden: theme === 'light' }"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
    <svg
      id="theme-toggle-light-icon"
      aria-hidden="true"
      class="w-5 h-5"
      :class="{ hidden: theme === 'dark' }"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>
