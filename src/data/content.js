// Az oldal szöveges tartalma három nyelven – egy helyen, hogy könnyű legyen cserélni.

/** @typedef {'hu' | 'en' | 'es'} Lang */

/** @type {Lang[]} */
export const languages = ['en', 'es', 'hu'];

export const content = {
  hu: {
    nav: [
      { label: 'Szolgáltatások', href: '#services' },
      { label: 'Folyamat', href: '#process' },
      { label: 'Csomagok', href: '#packages' },
      { label: 'Kapcsolat', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Weboldalkészítés · AI · 3 nyelv',
      lines: ['Weboldalak,', 'amik', 'dolgoznak.'],
      quote:
        '„AI-támogatott weboldalakat és webes rendszereket építünk három nyelven – gyorsan, mérhetően, emberközpontúan.”',
      primaryCta: 'Ajánlatot kérek',
      secondaryCta: 'Hogyan dolgozunk',
    },
    stats: [
      { value: '3', label: 'nyelv: EN · ES · HU' },
      { value: '<1s', label: 'betöltési cél' },
      { value: '95+', label: 'Lighthouse pontszám cél' },
      { value: '24h', label: 'válaszidő ajánlatkérésre' },
    ],
    services: {
      label: 'Szolgáltatások',
      title: 'Amit építünk',
      items: [
        { title: 'Landing page', meta: 'Kampány · Konverzió', text: 'Egyoldalas, gyors oldalak egy céllal: hogy a látogatóból ügyfél legyen.' },
        { title: 'Céges weboldal', meta: 'Arculat · Tartalom', text: 'Többoldalas, többnyelvű oldal, ami pontosan azt mutatja, amit képviselsz.' },
        { title: 'Webshop', meta: 'E-commerce · Fizetés', text: 'Termékoldalak, kosár, fizetés és számlázás – üzemeltethető, skálázható alapokon.' },
        { title: 'Web- és mobilapp', meta: 'React · PWA', text: 'Egyedi felületek és ügyfélportálok, amik böngészőben és mobilon is működnek.' },
        { title: 'AI integráció', meta: 'Chatbot · Automatizálás', text: 'Asszisztensek, tartalomgenerálás és fordítás beépítve a weboldaladba.' },
        { title: 'Karbantartás', meta: 'Hosting · Support', text: 'Frissítések, mentések, monitorozás – hogy az oldal évek múlva is gyors maradjon.' },
      ],
    },
    process: {
      label: 'Folyamat',
      title: 'Ötlettől az élesítésig',
      steps: [
        { title: 'Felmérés', text: 'Megismerjük a célodat, a közönségedet és a versenytársakat.' },
        { title: 'Tervezés', text: 'Struktúra, szöveg és design – kattintható prototípusban.' },
        { title: 'Fejlesztés', text: 'Modern stack, reszponzív felület, SEO és teljesítmény alapból.' },
        { title: 'Élesítés', text: 'Domain, hosting, analitika – és utána sem hagyunk magadra.' },
      ],
    },
    packages: {
      label: 'Csomagok',
      title: 'Válaszd a méretet',
      note: 'Minden csomag egyedi árajánlattal indul, 24 órán belül.',
      cta: 'Ajánlatkérés',
      featuredTag: 'Népszerű',
      items: [
        { name: 'Start', text: 'Egy landing page egy céllal.', features: ['1 oldal, 1 nyelv', 'Reszponzív design', 'Kapcsolati űrlap', 'Alap SEO'] },
        { name: 'Business', text: 'Teljes céges jelenlét.', features: ['Akár 8 oldal', '3 nyelv (EN · ES · HU)', 'Blog / hírek', 'Analitika és SEO'], featured: true },
        { name: 'Custom', text: 'Webshop, app, AI.', features: ['Egyedi funkciók', 'Integrációk, API', 'AI asszisztens', 'Karbantartási SLA'] },
      ],
    },
    contact: {
      label: 'Kapcsolat',
      title: 'Kezdjük el.',
      text: 'Írd meg pár mondatban, mit szeretnél – mi pedig konkrét javaslattal jelentkezünk.',
      name: 'Név',
      email: 'E-mail',
      message: 'Miről szólna az oldal?',
      submit: 'Üzenet küldése',
      success: 'Köszönjük! Hamarosan jelentkezünk.',
    },
    footer: {
      tags: ['Humanities', 'Sociology', 'Systems design'],
      rights: 'Minden jog fenntartva.',
    },
  },

  en: {
    nav: [
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Packages', href: '#packages' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Web development · AI · Trilingual',
      lines: ['Websites', 'that', 'work.'],
      quote:
        '"We build AI-driven websites and web systems in three languages – fast, measurable and human-centred."',
      primaryCta: 'Get a quote',
      secondaryCta: 'How we work',
    },
    stats: [
      { value: '3', label: 'languages: EN · ES · HU' },
      { value: '<1s', label: 'load time target' },
      { value: '95+', label: 'Lighthouse score target' },
      { value: '24h', label: 'quote turnaround' },
    ],
    services: {
      label: 'Services',
      title: 'What we build',
      items: [
        { title: 'Landing page', meta: 'Campaign · Conversion', text: 'Fast single-page sites with one goal: turning visitors into clients.' },
        { title: 'Business website', meta: 'Brand · Content', text: 'Multi-page, multilingual sites that show exactly what you stand for.' },
        { title: 'Webshop', meta: 'E-commerce · Payments', text: 'Product pages, cart, checkout and invoicing on a scalable foundation.' },
        { title: 'Web & mobile app', meta: 'React · PWA', text: 'Custom interfaces and client portals that work in the browser and on mobile.' },
        { title: 'AI integration', meta: 'Chatbot · Automation', text: 'Assistants, content generation and translation built into your site.' },
        { title: 'Maintenance', meta: 'Hosting · Support', text: 'Updates, backups and monitoring – so your site stays fast for years.' },
      ],
    },
    process: {
      label: 'Process',
      title: 'From idea to launch',
      steps: [
        { title: 'Discovery', text: 'We learn your goals, your audience and your competitors.' },
        { title: 'Design', text: 'Structure, copy and visuals – in a clickable prototype.' },
        { title: 'Build', text: 'Modern stack, responsive UI, SEO and performance by default.' },
        { title: 'Launch', text: 'Domain, hosting, analytics – and we stay with you after.' },
      ],
    },
    packages: {
      label: 'Packages',
      title: 'Pick your size',
      note: 'Every package starts with a custom quote within 24 hours.',
      cta: 'Request a quote',
      featuredTag: 'Popular',
      items: [
        { name: 'Start', text: 'One landing page, one goal.', features: ['1 page, 1 language', 'Responsive design', 'Contact form', 'Basic SEO'] },
        { name: 'Business', text: 'A complete company presence.', features: ['Up to 8 pages', '3 languages (EN · ES · HU)', 'Blog / news', 'Analytics & SEO'], featured: true },
        { name: 'Custom', text: 'Webshop, app, AI.', features: ['Custom features', 'Integrations, API', 'AI assistant', 'Maintenance SLA'] },
      ],
    },
    contact: {
      label: 'Contact',
      title: "Let's start.",
      text: "Tell us in a few sentences what you need – we'll come back with a concrete proposal.",
      name: 'Name',
      email: 'Email',
      message: 'What is the site about?',
      submit: 'Send message',
      success: "Thank you! We'll be in touch soon.",
    },
    footer: {
      tags: ['Humanities', 'Sociology', 'Systems design'],
      rights: 'All rights reserved.',
    },
  },

  es: {
    nav: [
      { label: 'Servicios', href: '#services' },
      { label: 'Proceso', href: '#process' },
      { label: 'Paquetes', href: '#packages' },
      { label: 'Contacto', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Desarrollo web · IA · Trilingüe',
      lines: ['Webs', 'que', 'funcionan.'],
      quote:
        '"Creamos sitios y sistemas web impulsados por IA en tres idiomas: rápidos, medibles y centrados en las personas."',
      primaryCta: 'Pedir presupuesto',
      secondaryCta: 'Cómo trabajamos',
    },
    stats: [
      { value: '3', label: 'idiomas: EN · ES · HU' },
      { value: '<1s', label: 'objetivo de carga' },
      { value: '95+', label: 'objetivo Lighthouse' },
      { value: '24h', label: 'respuesta a presupuestos' },
    ],
    services: {
      label: 'Servicios',
      title: 'Lo que construimos',
      items: [
        { title: 'Landing page', meta: 'Campaña · Conversión', text: 'Páginas rápidas con un solo objetivo: convertir visitas en clientes.' },
        { title: 'Web corporativa', meta: 'Marca · Contenido', text: 'Sitios multipágina y multilingües que muestran quién eres.' },
        { title: 'Tienda online', meta: 'E-commerce · Pagos', text: 'Productos, carrito, pago y facturación sobre una base escalable.' },
        { title: 'App web y móvil', meta: 'React · PWA', text: 'Interfaces y portales a medida que funcionan en navegador y móvil.' },
        { title: 'Integración IA', meta: 'Chatbot · Automatización', text: 'Asistentes, generación de contenido y traducción dentro de tu web.' },
        { title: 'Mantenimiento', meta: 'Hosting · Soporte', text: 'Actualizaciones, copias y monitorización para que siga rápida.' },
      ],
    },
    process: {
      label: 'Proceso',
      title: 'De la idea al lanzamiento',
      steps: [
        { title: 'Análisis', text: 'Conocemos tus objetivos, tu público y tu competencia.' },
        { title: 'Diseño', text: 'Estructura, textos y visual en un prototipo navegable.' },
        { title: 'Desarrollo', text: 'Stack moderno, responsive, SEO y rendimiento de serie.' },
        { title: 'Lanzamiento', text: 'Dominio, hosting, analítica, y seguimos contigo después.' },
      ],
    },
    packages: {
      label: 'Paquetes',
      title: 'Elige el tamaño',
      note: 'Cada paquete empieza con un presupuesto a medida en 24 horas.',
      cta: 'Pedir presupuesto',
      featuredTag: 'Popular',
      items: [
        { name: 'Start', text: 'Una landing, un objetivo.', features: ['1 página, 1 idioma', 'Diseño responsive', 'Formulario de contacto', 'SEO básico'] },
        { name: 'Business', text: 'Presencia corporativa completa.', features: ['Hasta 8 páginas', '3 idiomas (EN · ES · HU)', 'Blog / noticias', 'Analítica y SEO'], featured: true },
        { name: 'Custom', text: 'Tienda, app, IA.', features: ['Funciones a medida', 'Integraciones, API', 'Asistente IA', 'SLA de mantenimiento'] },
      ],
    },
    contact: {
      label: 'Contacto',
      title: 'Empecemos.',
      text: 'Cuéntanos en pocas frases lo que necesitas y te enviaremos una propuesta concreta.',
      name: 'Nombre',
      email: 'Email',
      message: '¿De qué trata la web?',
      submit: 'Enviar mensaje',
      success: '¡Gracias! Te contactaremos pronto.',
    },
    footer: {
      tags: ['Humanities', 'Sociology', 'Systems design'],
      rights: 'Todos los derechos reservados.',
    },
  },
};
