import { fr } from "./fr";
import { en } from "./en";
import { Language } from "./LanguageContext";

export const dictionaries = {
  fr,
  en,
};

export const useTranslation = (lang: Language) => {
  return dictionaries[lang];
};
