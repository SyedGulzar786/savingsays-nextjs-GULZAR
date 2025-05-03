// /src/utils/initI18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      supportedLngs: ['en', 'ar', 'fr'],
      lng: 'en', // will be overridden dynamically
      backend: {
        loadPath: '/locales/{{lng}}/common.json',
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;
