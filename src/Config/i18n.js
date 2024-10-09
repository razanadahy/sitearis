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
            "dBr": 'Download our BROCHURE.',
            "txtHead": 'Your partner for excellence, providing you with a unique experience.',
            'serv': 'Accounting, administration, IT, human resources, and marketing — professional services to optimize your performance',
            //valeurDetail.js
            "headText": 'Why Us?',
            "solC": 'Customized Solutions',
            "textSolC": 'Every business is unique. We analyze your specific needs to create tailored solutions, perfectly suited to your goals and challenges',
            "qualt": 'Quality',
            "textQualt" : 'We are committed to providing impeccable services tailored to our clients\' needs. Each project is carried out with diligence to deliver reliable and sustainable results.',
            "engag": 'Commitment',
            "textEng": 'We are fully dedicated to your success. Our commitment is based on transparency, meeting deadlines, and solutions that perfectly meet your needs. You can count on us at every step.',
            "accomp": 'Guidance',
            "textAccp": 'From conception to implementation, we support you at every stage of your project. We remain by your side to provide advice and constant follow-up to ensure results that meet your expectations.',
            "savF": 'Know-how',
            "textSav": 'With years of experience, we offer you our proven expertise in every area of activity. Our teams are skilled in the latest technologies and best practices to ensure quality services.',
            "textExp": 'Our team is made up of specialists in each field we cover. Whether in accounting, IT, human resources, or marketing, you benefit from informed advice and specialized expertise.',
            //ServiceDetail.js
            "serUs": 'Our Services',
            "marketing": 'Web and Marketing',
            "textMarketing": 'We offer a comprehensive range of services, including web writing, SEO, graphic design, and social media management, among others. Our integrated approach aims to strengthen your online presence and maximize the impact of your communication while addressing the specific needs of your business.',
            "compta": 'Accounting',
            "textCompta": 'Our accounting experts handle the entire bookkeeping process, ensuring rigorous monitoring of accounts receivable and meticulous control of accounting documents. Through their performance, we provide transparent and reliable financial management, enabling our clients to make informed decisions for their business.',
            "info": 'IT and Data Processing',
            "textInfo": 'Our IT specialists offer a full range of services, from custom software development to efficient data processing, both online and offline. With their cutting-edge technical expertise, we provide innovative solutions tailored to our clients\' specific needs, ensuring optimal performance of their information systems.',
            "rh": 'Human Resources',
            "textRh": 'Our human resources services include recruitment, training, and HR administration. With our advanced techniques, we are committed to providing customized solutions that foster talent development and optimize team management, contributing to the success of your organization.',
            "ext": 'Administrative Outsourcing',
            "textExt": 'We offer comprehensive administrative secretarial services, including efficient agenda management, drafting and tracking correspondence, and meticulous meeting organization. Our dedicated team ensures every detail is handled, allowing our clients to focus on their strategic priorities.',
            "plus": 'Learn More',
            "aide": 'Let us help you!😊',
            "decService": 'Discover our services',
            "devService": 'We are here to support you and collaborate with you!!!',
            "contactez": 'Contact us',
            "descFooter": 'We aim to create job opportunities for motivated young people, allowing them to develop their skills alongside experienced professionals in their field.',
            "ctnUs": 'Contact Us',
            "way": 'Here',
            "inscrire": 'Sign up for our newsletter and receive the latest digital trends by email.',
            "mention": 'Legal Information',
            "politique": 'Privacy Policy',
            "droit": 'All rights reserved.',
            //Serice
            "introService": 'offers you a complete range of customized solutions, designed to meet the specific needs of your business.',
            "descService": 'We put our expertise at your service to ensure your success!',

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
            "dBr": 'Télécharger notre BROCHURE',
            "txtHead": 'Votre partenaire pour l\'excellence, vous offrir une expérience unique.',
            'serv': 'Comptabilité, administration, informatique, ressources humaines et marketing — des services professionnels pour optimiser votre performance',
            //valeurDetail.js
            "headText": 'Pourquoi Nous?',
            "solC": 'Solutions personnalisées',
            "textSolC": 'Chaque entreprise est unique. Nous analysons vos besoins spécifiques pour créer des solutions sur mesure, parfaitement adaptées à vos objectifs et à vos défis.',
            "qualt": 'Qualité',
            "textQualt": 'Nous avons à cœur de fournir des services irréprochables et adaptés aux besoins de nos clients. Chaque projet est mené avec rigueur, afin de vous offrir des résultats fiables et durables.',
            "engag": 'Engagement',
            "textEng": 'Nous sommes entièrement dévoués à votre succès. Notre engagement repose sur la transparence, le respect des délais et des solutions qui répondent parfaitement à vos besoins. Vous pouvez compter sur nous à chaque étape',
            "accomp": 'Accompagnement',
            "textAccp": 'De la conception à la mise en œuvre, nous vous accompagnons à chaque étape de votre projet. Nous restons à vos côtés pour vous apporter des conseils et un suivi constant afin de garantir des résultats à la hauteur de vos attentes.',
            "savF": 'Savoir-faire',
            "textSav": 'Avec des années d\'expérience, nous mettons à votre disposition notre expertise éprouvée dans chaque domaine d’activité. Nos équipes maîtrisent les dernières technologies et les meilleures pratiques pour vous garantir des services de qualité.',
            "textExp": 'Notre équipe est composée de spécialistes dans chaque domaine que nous couvrons. Que ce soit en comptabilité, informatique, ressources humaines ou marketing, vous bénéficiez de conseils avisés et d’un savoir-faire pointu',
            //ServiceDetail.js
            "serUs": 'Nos Services',
            "marketing": 'Web et Marketing',
            "textMarketing": 'Nous offrons une gamme complète de services, incluant la rédaction web, le référencement, la conception graphique et la gestion des médias sociaux, parmi bien d\'autres. Notre approche intégrée vise à renforcer votre présence en ligne et à maximiser l\'impact de votre communication, tout en répondant aux besoins spécifiques de votre entreprise.',
            "compta": 'Comptabilité',
            "textCompta": 'Nos experts en comptabilité prennent en charge l\'intégralité du processus de tenue de livres, garantissant un suivi rigoureux des comptes clients et un contrôle minutieux des pièces comptables. Grâce à leur performance, nous assurons une gestion financière transparente et fiable, permettant à nos clients de prendre des décisions éclairées pour leur entreprise.',
            "info": 'Informatique et traitement de données',
            "textInfo": 'Nos spécialistes en informatique proposent une gamme complète de services, allant du développement logiciel sur mesure au traitement efficace des données, tant en ligne qu\'hors ligne. Grâce à leur compétence technique de pointe, nous garantissons des solutions innovantes et adaptées aux besoins spécifiques de nos clients, assurant ainsi une performance optimale de leurs systèmes d\'information.',
            "rh": 'Ressources Humaines',
            "textRh": 'Nos services de ressources humaines englobent le recrutement, la formation et l\'administration des ressources humaines. Grâce à notre technique de pointe, nous nous engageons à fournir des solutions personnalisées qui favorisent le développement des talents et optimisent la gestion des équipes, contribuant ainsi à la réussite de votre organisation.',
            "ext": 'Externalisation administrative',
            "textExt": 'Nous proposons des services de secrétariat administratif complets, incluant la gestion efficace des agendas, la rédaction et le suivi de la correspondance, ainsi que l\'organisation minutieuse de réunions. Notre équipe dédiée s\'assure que chaque détail est pris en charge, permettant ainsi à nos clients de se concentrer sur leurs priorités stratégiques.',
            "plus": 'En savoir plus',
            "aide": 'Laissez-nous vous aider!😊',
            "decService": 'Découvrez nos services',
            "devService": 'Nous sommes là pour vous accompagner et collaborer avec vous!!!',
            "contactez": 'Contactez-nous',
            "descFooter": 'Nous visons à créer des opportunités d\'emploi pour les jeunes motivés, en leur permettant de développer leurs compétences aux côtés de professionnels expérimentés dans leur domaine.',
            "ctnUs": 'Nous Contacte',
            "way": 'Par ic',
            "inscrire": 'Inscrivez-vous à notre newsletter et recevez par email les dernières tendances du digital.',
            "mention": 'Mentions légales',
            "politique": 'Politique de confidentialité',
            "droit": 'Tous droits réservés.',
            //Serice
            "introService": ' vous offre une gamme complète de solutions sur mesure, conçues pour répondre aux besoins spécifiques de votre entreprise.',
            "descService": 'Nous mettons notre expertise à votre service pour garantir votre succès!',

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
