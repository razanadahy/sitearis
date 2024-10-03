import i18n from 'i18next';
import{initReactI18next} from "react-i18next/initReactI18next";

const resources = {
    en: {
        translation: {
            "fr": "french",
            "en": "english",
            "ac": 'Home',
            "apropos": 'About Us',
            "service": 'Our Services',
            "contact": 'Contact',
            "post": 'Apply for a position',
            "brochure": 'Our Company Brochure',
            "dBr": 'Download our BROCHURE.'
        }
    },
    fr: {
        translation: {
            "fr": "français",
            "en": "anglais",
            "ac": 'Accueil',
            "apropos": 'À Propos de Nous',
            "service": 'Nos services',
            "contact": 'Contact',
            "post": 'Postuler',
            "brochure": 'En Savoir plus sur nous!',
            // "brochure": 'Notre plaquette entreprise',
            "dBr": 'Télécharger notre BROCHURE'
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false,
        }
    })

export default i18n;
