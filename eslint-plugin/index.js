import translationPlaceholders from "./rules/translation-placeholders.js";
import rcTranslationPlaceholders from "./rules/rc-translation-placeholders.js";

const camstreamerPlugin = {
  meta: {
    name: "@camstreamer",
  },
  rules: {
    "translation-placeholders": translationPlaceholders,
    "rc-translation-placeholders": rcTranslationPlaceholders,
  },
};

export default camstreamerPlugin;
