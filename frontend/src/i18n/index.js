// Tiny two-language system (English / Arabic) — no extra library needed.
// Usage in components:  const { t, locale, toggleLocale } = useI18n()
// then in templates:   {{ t.hero.eyebrow }}

import { ref, computed, watch } from 'vue'
import en from './en.js'
import ar from './ar.js'

const messages = { en, ar }
const STORAGE_KEY = 'veritas-lang'

// Arabic web fonts are only downloaded the first time someone switches to Arabic
const ARABIC_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500&family=Tajawal:wght@300;400;500;700&family=Aref+Ruqaa:wght@400;700&display=swap'

function savedLocale() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'en' || v === 'ar') return v
  } catch {
    /* storage blocked (private mode etc.) — fall back to English */
  }
  return 'en'
}

export const locale = ref(savedLocale())
const t = computed(() => messages[locale.value])

let arabicFontsLoaded = false
function loadArabicFonts() {
  if (arabicFontsLoaded) return
  arabicFontsLoaded = true
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = ARABIC_FONTS_URL
  document.head.appendChild(link)
}

// Keep <html lang/dir>, the tab title and the meta description in sync
function applyToDocument(lang) {
  const root = document.documentElement
  root.lang = lang
  root.dir = lang === 'ar' ? 'rtl' : 'ltr'
  document.title = messages[lang].meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', messages[lang].meta.description)
  if (lang === 'ar') loadArabicFonts()
}

applyToDocument(locale.value)

watch(locale, (lang) => {
  applyToDocument(lang)
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* ignore */
  }
})

function setLocale(lang) {
  locale.value = lang
}

function toggleLocale() {
  locale.value = locale.value === 'ar' ? 'en' : 'ar'
}

// Fill {placeholders} in a translated string, e.g. fmt(t.contact.thanks, { name })
export function fmt(str, vars = {}) {
  return str.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : `{${k}}`))
}

export function useI18n() {
  return { t, locale, setLocale, toggleLocale, fmt }
}
