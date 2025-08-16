import type { zh_CN } from './locales/zh_CN';

export type LanguageTranslation = typeof zh_CN;

export type LanguageMetadata = {
    name: string;
    nativeName: string;
    code: string;
};
