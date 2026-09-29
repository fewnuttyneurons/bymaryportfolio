export const languages = { en: 'English', fa: 'فارسی' } as const;
export type Lang = keyof typeof languages;

export const EMAIL = 'khorshidmlr@gmail.com';

export const ui = {
  en: {
    'meta.title': 'By Mary · Maryam Malmir, graphic designer',
    'meta.description':
      'Portfolio of Maryam Malmir, a graphic designer working in branding and packaging. Featured project: Sentè, a skincare identity.',
    'nav.label': 'Main',
    'nav.home': 'Home',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'lang.label': 'Language',
    'hero.eyebrow': 'Graphic designer',
    'hero.cta': 'See the work',
    'hero.contact': 'Get in touch →',
    'hero.lead': 'Branding and packaging that helps a room breathe easier.',
    'badge.text': 'SEE THE WORK · SEE THE WORK · ',
    'gallery.eyebrow': 'Gallery',
    'about.title': 'About',
    'about.quote':
      "Someone wise once told me: most people look for beauty all their lives. Pity they don't know they've had it all along. In the eyes.",
    'about.body': 'A graphic designer, in love with observing, reading and creating.',
    'contact.title': 'Got a brand that needs to breathe?',
    'contact.body': "Write to me. I'd love to hear the story.",
    'footer.credit': 'Designed by Ali Nazem. All rights reserved.',
    'footer.top': 'Back to top ↑',
    '404.title': 'Page not found',
    '404.body': "This page drifted off. Let's get you back to the calm.",
    '404.cta': 'Back to home',
  },
  fa: {
    'meta.title': 'By Mary · مریم مالمیر، طراح گرافیک',
    'meta.description':
      'نمونه‌کارهای مریم مالمیر، طراح گرافیک در حوزهٔ هویت بصری و بسته‌بندی. پروژهٔ ویژه: Sentè، هویت یک برند مراقبت از پوست.',
    'nav.label': 'ناوبری اصلی',
    'nav.home': 'خانه',
    'nav.gallery': 'گالری',
    'nav.contact': 'تماس',
    'lang.label': 'زبان',
    'hero.eyebrow': 'طراح گرافیک',
    'hero.cta': 'دیدن کارها',
    'hero.contact': 'در تماس باشید ←',
    'hero.lead': 'هویت بصری و بسته‌بندی‌ای که نفسِ یک اتاق را آرام‌تر می‌کند.',
    'badge.text': 'دیدن کارها · دیدن کارها · دیدن کارها · دیدن کارها · ',
    'gallery.eyebrow': 'گالری',
    'about.title': 'درباره',
    'about.quote':
      'آدمی دانا روزی به من گفت: بیشتر آدم‌ها یک عمر به دنبال زیبایی می‌گردند؛ افسوس که نمی‌دانند از اول همراهشان بوده. در چشم‌ها.',
    'about.body': 'طراح گرافیک؛ دلباختهٔ دیدن، خواندن و ساختن.',
    'contact.title': 'برندی دارید که باید نفس بکشد؟',
    'contact.body': 'برایم بنویسید. دوست دارم داستانش را بشنوم.',
    'footer.credit': 'طراحی: علی ناظم. تمامی حقوق محفوظ است.',
    'footer.top': 'بازگشت به بالا ↑',
    '404.title': 'صفحه پیدا نشد',
    '404.body': 'این صفحه جایی دور رفته است. بیایید برگردیم به آرامش.',
    '404.cta': 'بازگشت به خانه',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export const t = (lang: Lang) => (key: UIKey) => ui[lang][key];

export const dir = (lang: Lang) => (lang === 'fa' ? 'rtl' : 'ltr');

export const homePath = (lang: Lang) => (lang === 'en' ? '/' : `/${lang}/`);

/** Persian numerals for FA, zero-padded to two digits ("01" / "۰۱"). */
export const num = (n: number, lang: Lang) => {
  const padded = String(n).padStart(2, '0');
  return lang === 'fa' ? padded.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d]) : padded;
};

export const year = (lang: Lang) =>
  lang === 'fa' ? num(new Date().getFullYear(), 'fa') : String(new Date().getFullYear());
