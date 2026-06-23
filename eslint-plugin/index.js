import translationPlaceholders from './rules/translation-placeholders.js';
import rcTranslationPlaceholders from './rules/rc-translation-placeholders.js';

const netrexPlugin = {
    meta: {
        name: '@netrex',
    },
    rules: {
        'translation-placeholders': translationPlaceholders,
        'rc-translation-placeholders': rcTranslationPlaceholders,
    },
};

export default netrexPlugin;
