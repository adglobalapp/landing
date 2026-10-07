import { useEffect } from 'react';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Packages } from './components/Packages';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { useI18n } from './i18n';
import { initReveal } from './utils/reveal.js';

export function App() {
  const { lang } = useI18n();

  // Nyelvváltáskor újrarenderelt elemek is kapjanak reveal-t
  useEffect(() => initReveal(), [lang]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
