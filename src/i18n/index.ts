import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import spanish from './locale/es/spanish.json';

export const defaultNS = 'spanish';

export const resources = {
  es: {
    spanish,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'es',
  ns: ['spanish'],
  defaultNS,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
