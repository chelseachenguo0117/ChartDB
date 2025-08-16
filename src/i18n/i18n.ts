import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import type { LanguageMetadata } from './types';
import { zh_CN, zh_CNMetadata } from './locales/zh_CN';

export const languages: LanguageMetadata[] = [zh_CNMetadata];

const resources = {
    zh_CN,
};

i18n.use(initReactI18next).init({
    resources,
    lng: zh_CNMetadata.code,
    interpolation: {
        escapeValue: false,
    },
    fallbackLng: zh_CNMetadata.code,
    debug: false,
});

export { i18n };
