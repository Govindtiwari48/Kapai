import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'kapai-theme'

export type KapaiTheme = 'dark' | 'light'

function readStoredTheme(): KapaiTheme {
  try {
    const s = localStorage.getItem(STORAGE_KEY)
    if (s === 'light' || s === 'dark') return s
  } catch {
    /* ignore */
  }
  return 'dark'
}

function applyDomTheme(theme: KapaiTheme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme === 'light' ? 'light' : 'dark'
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    /* ignore */
  }
}

export function useKapaiTheme() {
  const [theme, setTheme] = useState<KapaiTheme>(() => readStoredTheme())

  useEffect(() => {
    applyDomTheme(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
