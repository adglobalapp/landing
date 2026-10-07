import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { content, languages } from './data/content.js';

export type Lang = (typeof languages)[number];
type Content = (typeof content)['hu'];

const STORAGE_KEY = 'adapp-lang';

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (languages as string[]).includes(stored)) return stored as Lang;
  } catch {
    // storage nem elérhető – marad az alapértelmezett
  }
  return 'hu';
}

type I18nValue = { lang: Lang; setLang: (lang: Lang) => void; t: Content };

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  return <I18nContext.Provider value={{ lang, setLang, t: content[lang] }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
