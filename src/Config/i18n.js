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
            "videoNotSupported": "Your browser does not support the video.",
            "avantage": "Your Benefits",
            "cle": "Turnkey solutions for your business",
            "delegue": "Delegate your activities with specialized teams in Madagascar",
            "dna": "Our DNA",
            "recherche": "Search for a profession or an activity",
            "deleg": "Delegate your activities with specialized teams",
            "centre": "OFFSHORE Center in Madagascar",
            "dom": "Our Areas of Expertise",
            "opt": "Optimize your operations with our solutions in:",
            "coworkingText": "Already have <span class=\"text-white bg-danger px-2 py-1 rounded-2 fw-semibold\">your client?</span> Already have your order? Already have your team? But you still need the workspace and equipment to accomplish your tasks? We’re here to provide all these resources on a rental basis with a <span class=\"bg-success-subtle px-2 py-1 rounded-2\">very special rate</span>.",
            "sousTraitanceText": 'Instead of <span class="bg-warning px-2 py-1 rounded-2 text-white">worrying about</span> finding all the human and material resources, feel free to consult us to outsource your orders! We offer you <span class="text-white px-2 py-1 bg-success rounded-2">highly beneficial solutions</span>.',
            "centreOffshoreText": '<span class="fw-semibold color-aris">ARIS</span> <span class="fw-semibold color-concept">CONCEPT</span> is an <span class="text-success-emphasis px-2 py-1 bg-success-subtle rounded-2">OFFSHORE</span> center that can handle all your <span class="text-white bg-warning px-2 py-1 rounded-2">IT and multimedia data</span>, regardless of your business sectors.',
            "extText": 'Madagascar is already renowned for its highly competitive production costs, but also with the <span class="px-2 py-1 rounded-2 bg-success-subtle">talents and skills of our young graduates</span>, your tasks will be handled by a motivated team at a <span class="text-white bg-success px-2 py-1 rounded-2">lower cost</span>!',
            "equipeText": "<span class=\"fw-bolder text-uppercase\">Unprecedented in Madagascar</span>!!! An <span class=\"px-2 py-1 rounded-2 bg-success-subtle text-wrap\">offshore center</span> working with a team of <span class=\"px-2 py-1 rounded-2 bg-success text-white\">Civil Engineering Experts</span> for data processing in this field. Malagasy engineers can now demonstrate their skills without having to go on-site, thanks to a European company that took this step with <span class=\"fw-semibold color-aris\">ARIS</span> <span class=\"fw-semibold color-concept\">CONCEPT</span>.",
            "sousTraitance": "Subcontracting",
            "offshore": 'An offshore center',
            "externaliser": 'Why Outsource',
            "equipe": "Build a team tailored to your needs",
            "domaine": "Our Areas of Expertise",
            "join": "JOIN US",
            "DecStrat": 'Discover winning outsourcing strategies with <strong class=\'text-aris\'>Aris</strong> <strong class=\'text-concept\'>Concept</strong>',
            "textDecStrat": "Discover how outsourcing can transform your business. Our exclusive ebook guides you through the best practices to optimize your processes and enhance your performance with a dedicated offshore center. By downloading this guide, you’ll gain strategic insights on how to reduce costs, increase efficiency, and focus your efforts on what truly matters: your growth.",
            "ebook": 'Download our ebook for free',
            "aideSur": 'We assist you with:',
            "cela": 'On this, we offer:',
            "apport": "We provide:",
            "aideGerer": 'We help you manage:',
            "aideSurF": 'We assist you with:',
            "introCompta": 'Entrust us with your accounting for transparent and reliable financial management. Our experts ensure thorough monitoring of your accounts and assist you in making informed decisions.',
            "introTraitement": 'Benefit from innovative and personalized IT solutions. Our specialists optimize your information systems and process your data efficiently.',
            "introRh": 'We support you in managing your talents. From recruitment to training, our HR services help you build high-performing teams.',
            "introExt": 'Delegate your administrative tasks to focus on your core business.',
            "introMark": 'Develop your online presence and enhance your visibility. Our digital marketing experts offer turnkey solutions to help you achieve your goals.',
            "demandeDevis": 'Request a free quote here',
            "entreprise": 'Company name',
            "companyName": 'Enter your company name',
            "nom": 'Name',
            "enterName": 'Enter your name',
            "phone": 'Phone',
            "yourTel": 'Enter your phone number',
            "desc": 'Description',
            "bes": 'About your needs...',
            "envoyer": 'Submit',
            "introAris": ' is a company registered in the Madagascar Trade Registry in 2022, born from a true passion for data processing and the design of creative solutions for professionals across various industries. Our expertise and skills are built upon dedicated personnel who are committed to delivering high-quality services.',
            "p1": 'We aim to provide meaningful employment opportunities for young Malagasy, thereby contributing to the improvement of the economic and social prospects of the region.',
            "p2": 'We are committed to providing optimal working conditions, including the use of high-performance equipment, implementing load-shedding solutions, offering flexible hours, and ensuring affiliations with CNAPS and OSTIE.',
            "p3": 'We firmly believe in the importance of professional development. That’s why we offer various training programs designed to enhance the skills and versatility of our staff, enabling them to grow both professionally and personally.',
            "valeur": 'Our Values',
            "p1Valeur": 'Our core values guide every action we take and define our commitment to our clients, our employees, and our community. They are the foundation on which we build lasting relationships and tailor-made solutions.',
            "inT": 'Integrity',
            "inTP": 'We place honesty and transparency at the heart of our relationships. Every decision is made with rigor and professional ethics.',
            "exP": 'We are committed to providing the highest quality services, aiming for excellence in all our offerings and constantly exceeding expectations.',
            "eng": 'Our clients are at the heart of our business. We provide personalized and tailored services, with careful attention to their needs.',
            "engT": 'Commitment to the client',
            "respT": 'We are committed to positively contributing to our community by creating jobs and improving the working conditions of our employees.',
            "respP": 'Social responsibility',
            "sv": 'What would you like to know about ',
            "withUs": "With us, you have:",
            "infoHead": 'Discover what sets us apart: tailored solutions, deep expertise, and a full commitment to our clients\' success.',
            'infoContent': 'Discover our strengths that make us the ideal partner for your success.',
            "staff": 'Staff',
            "company": 'Company',
            "solUn": 'Customized and unique solutions',
            'engTitle': 'Support and commitment',
            'prix': 'Pricing and value for money',
            'flex': 'Flexibility and adaptability',
            'solContent': "We don't do off-the-shelf. Every solution is a unique product, tailored to your image. Benefit from personalized support for results that stand out.",
            "engContent": 'Aris Concept offers customized solutions to meet your specific needs. Beyond designing unique solutions, we commit to supporting you throughout your project. Our tailored guidance ensures optimal success.',
            "prixContent": 'We believe in the added value of our services. Our pricing is tailored on a case-by-case basis to offer excellent value for money, without compromising on quality.',
            "flexContent": 'The world is changing, and so are we. Aris Concept guarantees you unwavering responsiveness and solutions tailored to every situation.',
            "innovT": "Innovation and Adaptability",
            "innovC": 'In a constantly evolving world, innovation and adaptability are key assets for our team. By fostering a culture where creativity is valued and change is seen as an opportunity rather than a challenge, each member of our team is empowered to propose innovative solutions to overcome challenges.',
            "compT": 'Competent and Motivated',
            'compC': 'Our team stands out for its expertise and unwavering commitment to excellence. Each of our collaborators brings a unique skill that strengthens our ability to achieve our collective goals.',
            "qual": 'Qualified',
            "qualC": 'We have a team of highly skilled professionals, each with in-depth knowledge in their area of expertise. This qualification allows us to face challenges with confidence and deliver effective and innovative solutions.',
            "formT": 'Contribution to staff training',
            "formC": 'To stay at the forefront of innovation, we provide our employees with regular training on the latest technologies. This enables us to offer you increasingly efficient digital solutions tailored to your needs',
            "condT": 'Top-Quality Working Conditions',
            "condC": 'We believe that fulfilled employees are the key to our success. That’s why we make every effort to provide a stimulating work environment where everyone can thrive and give their best.',
            "equiT": 'High-performance equipment',
            "equiC": 'We firmly believe that innovation comes through high-performance equipment. By investing in cutting-edge technologies, we provide our team with the tools necessary to excel in their work and meet our clients\' needs with efficiency.',
            "stabT": 'Stability and Commitment',
            "stabC": 'It is the assurance of a lasting partnership. Our company, firmly established, offers you stability and long-term commitment to support you through every stage of your project.',
            "conT": 'Contact us today for a free consultation!',
            "conC": 'Discover how our outsourcing solutions can transform your business.',
            "formulaireT": 'Contact Form',
            "formEnt": 'Your company',
            "siteCompany": 'Company website',
            "emailEnter": 'Enter your email',
            "other": 'Other',
            "check": 'By checking this, you agree to our terms and conditions and privacy policy',
            "maintenant": 'Now',
            "sucMes": 'Your information has been successfully sent to the Aris Concept manager',
            "whereAreWe": 'Where are we ?',
            "heure": 'Opening hours',
            "mon": 'Mon',
            "ven": 'Fri',
            "h7": '7:30AM',
            "h17": '5:00PM',
            "sat": 'Sat',
            "sun": "Sun",
            "dLine": 'Available online',
            "detailS": 'We offer you a full range of outsourcing solutions with our expertise !',
            "contDetail": 'Contact us to simplify your',
            "respD": 'Main Responsibilities:',
            'Env': 'Looking to boost your career with us?',
            'envContent': 'Follow us on <a className="p-0 m-0" href="https://www.linkedin.com/in/aris-concept-company-567703240" target="_blank" rel="noreferrer">LinkedIn</a> for the latest job opportunities !',
            'prenom': 'First Name',
            'plPre': 'Enter your first name',
            'cv': 'Resume',
            'titrePost': 'Job Title',
            'titrePostC': 'Enter job title',
            'annuler': 'Cancel',
            'formSp': 'Application Form for Unsolicited Applications',
            "chooseFile": 'Choose a file',
            'noFile': 'No file chosen',
            'title': 'Outsourcing Solutions: Accounting, HR, IT, and Marketing | Aris Concept',
            'description': 'Simplify your business with Aris Concept\'s outsourcing solutions in accounting, HR, IT, and marketing. Tailored services for efficient operations.',
            'titleService': 'Our Services: Comprehensive Solutions for Your Business | Aris Concept',
            'descriptionService': 'ARIS CONCEPT provides a full range of services including accounting, HR outsourcing, IT and data processing, web and marketing solutions to optimize your business processes.',
            'titleAvantage': 'Tailored Solutions and Expertise in the Outsourcing Industry',
            'descAvantage': 'Aris Concept, expert in tailored solutions and personalized support, guarantees innovation, flexibility, and excellent value for money. Discover our services to boost your project\'s success.',
            'titleContact': 'Contact Aris Concept – Tailor-Made Solutions and Personalized Support',
            'descContact': 'Need advice or information? Contact Aris Concept now. Our team of experts is here to meet your needs and support your projects.',
            'titleApropos': 'About ARIS CONCEPT',
            'descApropos': 'ARIS CONCEPT is a Malagasy company passionate about data processing and the creation of tailored IT solutions. We provide high-quality services while promoting the professional development of our teams and contributing to the economic and social growth of Madagascar',
            'titleEbook': 'Download Our Ebook | Aris Concept',
            'descEbook': 'Discover the best outsourcing strategies with Aris Concept. Download our free ebook and learn how to reduce costs, improve processes, and boost your company\'s growth with a dedicated offshore center.',
            'titleCarrier': 'Join ARIS CONCEPT - Job Opportunities and Spontaneous Applications',
            'descCarrier': 'Explore our job openings at ARIS CONCEPT and apply now. Submit your spontaneous application and seize the opportunity to join a passionate team dedicated to excellence and innovation.',
            'probleme': 'There is a connection issue.',


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
            "post": 'Carrière',
            "brochure": 'En Savoir plus sur nous!',
            "dBr": 'Télécharger notre BROCHURE',
            "txtHead": 'Votre partenaire pour l\'externalisation, vous offrir une expérience unique.',
            'serv': 'Comptabilité, administration, informatique, ressources humaines et marketing — des services professionnels pour optimiser votre performance',
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
            "ctnUs": 'Contactez-Nous',
            "way": 'Par ici',
            "inscrire": 'Inscrivez-vous à notre newsletter et recevez par email les dernières tendances du digital.',
            "mention": 'Mentions légales',
            "politique": 'Politique de confidentialité',
            "droit": 'Tous droits réservés.',
            //Serice
            "introService": ' vous offre une gamme complète de solutions sur mesure, conçues pour répondre aux besoins spécifiques de votre entreprise.',
            "descService": 'Nous mettons notre expertise à votre service pour garantir votre succès!',
            "videoNotSupported": "Votre navigateur ne supporte pas la video",
            "avantage": "Vos Avantages",
            "cle": "Solutions clé en main pour votre entreprise",
            "delegue": "Déléguer vos activités avec des équipes spécialisées à Madagascar",
            "dna": "Notre ADN",
            "recherche": "Rechercher un métier ou une activité",
            "deleg": "Déléguez vos activités avec des équipes spécialisées",
            "centre": "Centre OFFSHORE à Madagascar",
            "dom": "Nos domaines d'activité",
            "opt": "Optimisez vos opérations avec nos solutions en:",
            "coworkingText": 'Vous avez déjà <span class="text-white bg-danger px-2 py-1 rounded-2 fw-semibold">votre client ?</span> Vous avez déjà votre commande? Vous avez déjà votre équipe? Mais il vous reste le local et les moyens matériels pour accomplir vos tâches ? Nous sommes là pour vous fournir tous ces moyens en location avec une <span class="bg-success-subtle px-2 py-1 rounded-2">tarification très spéciale</span>.',
            "sousTraitanceText": 'Au lieu de <span class="bg-warning px-2 py-1 rounded-2 text-white">se casser votre tête</span> pour trouver tous les moyens humains et matériels, n’hésitez pas à nous consulter pour sous-traiter vos commandes!!! Nous vous proposons des <span class="text-white px-2 py-1 bg-success rounded-2">solutions très avantageuses</span>.',
            "centreOffshoreText": ' <span class="fw-semibold color-aris">ARIS </span> <span class="fw-semibold color-concept">CONCEPT</span> est un centre <span class="text-success-emphasis px-2 py-1 bg-success-subtle rounded-2">OFFSHORE</span> qui peut traiter toutes vos <span class="text-white bg-warning px-2 py-1 rounded-2">données en informatique et multimédia</span> quelque que soit vos domaines d’activités.',
            "extText": 'Madagascar est déjà réputé pour ses coûts de production très compétitifs, mais aussi avec les <span class="px-2 py-1 rounded-2 bg-success-subtle">talents et compétences de nos jeunes</span> diplômés, vos traitements seront assurés par une équipe motivée à <span class="text-white bg-success px-2 py-1 rounded-2">moindre coût</span>!',
            "equipeText": '<span class="fw-bolder text-uppercase">Du jamais vu à Madagascar</span>!!! Un <span class="px-2 py-1 rounded-2 bg-success-subtle text-wrap">centre offshore</span> qui travaille avec une équipe d’<span class="px-2 py-1 rounded-2 bg-success text-white">Ingénieurs en BTP</span> pour des traitements de données dans ce domaine. Les Ingénieurs Malagasy peuvent désormais prouver leurs compétences sans aller sur-terrain grâce à une entreprise européenne qui a osé faire ce pas avec <span class="fw-semibold color-aris">ARIS</span> <span class="fw-semibold color-concept">CONCEPT</span>.',
            "sousTraitance": 'Sous-traitance',
            "offshore": 'Un centre offshore',
            "externaliser": "Pourquoi externaliser",
            "equipe": "Créer une équipe selon vos besoins",
            "domaine": "Nos Domaines",
            "join": "REJOIGNEZ-NOUS",
            "DecStrat": 'Découvrez les stratégies gagnantes de l\'externalisation avec <strong class="text-aris">Aris</strong> <strong class="text-concept">Concept</strong>',
            "textDecStrat": 'Découvrez comment l\'externalisation peut transformer votre entreprise. Notre ebook exclusif vous guide à travers les meilleures pratiques pour optimiser vos processus et améliorer votre performance grâce à un centre d\'offshore dédié. En téléchargeant ce guide, vous accéderez à des conseils stratégiques sur la manière de réduire vos coûts, d\'accroître votre efficacité et de concentrer vos efforts sur ce qui compte vraiment : votre croissance.',
            "ebook": 'Télécharger notre ebook gratuitement',
            "aideSur": 'Nous vous aidons sur:',
            "cela": 'Sur cela, nous proposons:',
            "apport": "Nous apportons:",
            "aideGerer": 'Nous vous aidons à gèrer:',
            "aideSurF": 'Nous vous aidons sur:',
            "introCompta": 'Confiez-nous votre comptabilité pour une gestion financière transparente et fiable. Nos experts assurent un suivi rigoureux de vos comptes et vous aident à prendre des décisions éclairées.',
            "introTraitement": 'Bénéficiez de solutions informatiques innovantes et personnalisées. Nos spécialistes optimisent vos systèmes d\'information et traitent vos données avec efficacité.',
            "introRh": 'Nous vous accompagnons dans la gestion de vos talents. Du recrutement à la formation, nos services RH vous aident à construire des équipes performantes.',
            "introExt": 'Déléguez vos tâches administratives pour vous concentrer sur votre cœur de métier.',
            "introMark": 'Développez votre présence en ligne et améliorez votre visibilité. Nos experts en marketing digital vous proposent des solutions clés en main pour atteindre vos objectifs.',
            "demandeDevis": 'Demander un devis gratuit ici',
            "entreprise": 'Entreprise',
            "companyName": 'Enter le nom de votre entreprise',
            "nom": 'Nom',
            "enterName": 'Entrer votre nom',
            "phone": 'Portable',
            "yourTel": 'Entrez votre tel',
            "desc": 'Déscription',
            "bes": 'À propos de vos besoins...',
            "envoyer": "Envoyer",
            "introAris": 'est une entreprise enregistrée au registre du commerce de Madagascar en 2022, née d\'une véritable passion pour le traitement des données informatiques et la conception de solutions créatives pour les professionnels de divers secteurs. Ainsi, notre savoir-faire et nos compétences reposent sur des personnels engagés.',
            "p1": 'Nous visons à offrir des opportunités d\'emploi significatives pour les jeunes Malagasy, contribuant ainsi à l\'amélioration des perspectives économiques et sociales de la région.',
            "p2": 'Nous nous engageons à fournir des conditions de travail optimales, notamment en disposant de matériels performants, en mettant en place une solution anti-délestage, en offrant des horaires flexibles, et en assurant des affiliations à la CNAPS, OSTIE.',
            "p3": 'Nous croyons fermement en l\'importance du développement professionnel. C\'est pourquoi nous proposons diverses formations visant à améliorer les compétences et la polyvalence de notre personnel, pour leur permettre d\'évoluer tant sur le plan professionnel que personnel.',
            "valeur": 'Nos Valeurs',
            "p1Valeur": 'Nos valeurs fondamentales guident chacune de nos actions et définissent notre engagement envers nos clients, nos collaborateurs et notre communauté. Elles sont le socle sur lequel nous bâtissons des relations durables et des solutions sur mesure.',
            "inT": 'Intégrité',
            "inTP": 'Nous plaçons l\'honnêteté et la transparence au cœur de nos relations. Chaque décision est prise avec rigueur et éthique professionnelle.',
            "exP": 'Nous nous engageons à fournir des services de la plus haute qualité, en visant l\'excellence dans toutes nos prestations et en dépassant constamment les attentes.',
            "eng": 'Nos clients sont au centre de notre activité. Nous offrons des services personnalisés et adaptés, avec un suivi attentif de leurs besoins.',
            "engT": 'Engagement envers le client',
            "respT": 'Nous nous engageons à contribuer positivement à notre communauté, en créant des emplois et en améliorant les conditions de travail de nos employés.',
            "respP": 'Responsabilité sociale',
            "sv": 'Que voulez vous en savoir sur ',
            "withUs": 'Avec nous, vous avez:',
            "infoHead": 'Découvrez ce qui fait notre force : des solutions sur mesure, une expertise approfondie, et un engagement total envers la réussite de nos clients.',
            "infoContent": 'Découvrez nos atouts qui font de nous le partenaire idéal pour votre réussite.',
            "staff": 'Personnels',
            "company": 'Entreprise',
            "solUn": 'Solutions personnalisées et unique',
            'engTitle': 'Accompagnement et engagement',
            'prix': 'Les prix et le rapport qualité/prix',
            'flex': 'Flexibilité et adaptabilité',
            'solContent': 'Nous ne faisons pas dans le prêt-à-porter. Chaque solution est un produit unique, façonné à votre image. Bénéficiez d\'un accompagnement personnalisé pour des résultats qui sortent du lot.',
            "engContent": "Aris Concept vous propose des solutions personnalisées pour répondre à vos besoins spécifiques. Au-delà de la conception de solutions uniques, nous nous engageons à vos côtés tout au long de votre projet. Notre accompagnement sur-mesure vous garantit une réussite optimale.",
            "prixContent": "Nous croyons en la valeur ajoutée de nos services. Nos tarifs sont étudiés au cas par cas pour offrir un excellent rapport qualité-prix, sans compromis sur la qualité.",
            "flexContent": "Le monde change, nous aussi. Aris Concept vous garantit une réactivité à toute épreuve et des solutions adaptées à chaque situation.",
            "innovT": "L'innovant et l'adaptabilité",
            "innovC": "Face à un monde en perpétuelle évolution, l'innovation et l'adaptabilité représentent des atouts clé pour notre personnel. En encourageant une culture où la créativité est valorisée et où le changement est perçu comme une opportunité plutôt qu'une contrainte, chaque membre de notre équipe est habilité à proposer des solutions novatrices face aux défis.",
            "compT": "Compétent et Motivé",
            "compC": "Notre personnel se distingue par son expertise et son engagement indéfectible envers l'excellence. Chacun de nos collaborateurs apporte une compétence unique qui renforce notre capacité à atteindre nos objectifs collectifs.",
            "qual": "Qualifié",
            "qualC": "Nous avons une équipe de professionnels d'une grande qualité, avec chacun une connaissance approfondie dans son domaine d'activité. Cette qualification nous permet de relever les défis avec confiance et de fournir des solutions efficaces et innovantes.",
            "formT": "Contribution au formation du personnel",
            "formC": "Pour rester à la pointe de l'innovation, nous offrons à nos collaborateurs des formations régulières sur les dernières technologies. Cela nous permet de vous proposer des solutions digitales toujours plus performantes et adaptées à vos besoins",
            "condT": "Condition de travail au TOP",
            "condC": "Nous croyons que des collaborateurs épanouis sont la clé de notre succès. C'est pourquoi nous mettons tout en œuvre pour offrir un environnement de travail stimulant, où chacun peut s'épanouir et donner le meilleur de lui-même.",
            "equiT": "Equipement haute performance",
            "equiC": "Nous croyons fermement que l'innovation passe par l'équipement haute performance. En investissant dans des technologies de pointe, nous offrons à notre équipe les outils nécessaires pour exceller dans leur travail et répondre aux besoins de nos clients avec efficacité.",
            "stabT": "Stabilité et engagement",
            "stabC": "C'est l'assurance d'un partenariat durable. Notre entreprise, solidement implantée, vous offre une stabilité et un engagement à long terme, pour vous accompagner dans toutes les étapes de votre projet.",
            "conT": 'Contactez-nous dès aujourd\'hui pour une consultation gratuite !',
            "conC": ' Découvrez comment nos solutions de l\'externalisation  peuvent  transformer votre entreprise.',
            "formulaireT": 'Formulaire de contact',
            "formEnt": "Votre entreprise",
            "siteCompany": "Site web de l'Entreprise",
            "emailEnter": 'Entrer votre email',
            "other": 'Autre',
            "check": "En cochant ceci, vous acceptez nos conditions générales et notre politique de confidentialité",
            "maintenant": 'Maintenant',
            "sucMes": 'Votre information a été bien envoyée auprès du responsable d\'Aris Concept',
            "whereAreWe": 'Où nous sommes ?',
            "heure": 'Heures d\'ouverture',
            "mon": 'Lun',
            "ven": 'Ven',
            "h7": '7h:30',
            "h17": '17h',
            "sat": 'Sam',
            "sun": 'Dim',
            "dLine": 'Disponible en ligne',
            "detailS": 'Nous vous offrons une gamme complète de solution d\'externalisation avec notre savoir-faire !',
            "contDetail": 'Contactez-nous pour simplifier votre',
            "respD": 'Responsabilités principales:',
            "Env": ' Envie de booster votre carrière avec nous ?',
            'envContent': 'Suivez-nous sur <a className="p-0 m-0" href="https://www.linkedin.com/in/aris-concept-company-567703240" target="_blank" rel="noreferrer">LinkedIn</a> pour les dernières opportunités d’emploi !',
            'prenom': 'Prénom',
            'plPre': 'Entrer votre prénom',
            'cv': 'CV',
            'titrePost': 'Titre du poste',
            'titrePostC': 'Entrez le titre de l\'emploi',
            'annuler': 'Annuler',
            'formSp': 'Formulaire pour la candidature spontanée',
            'chooseFile': 'Choisir un fichier',
            'noFile': 'Aucun fichier choisi',
            'title': "Externalisation: Comptabilité, RH, IT, et Marketing | Aris Concept",
            'description': "Aris Concept propose des services en administration, comptabilité, ressources humaines, IT et marketing pour simplifier la gestion d'entreprise.",
            'titleService': 'Nos Services: Solution complète pour votre Entreprise | Aris Concept',
            'descriptionService': "ARIS CONCEPT offre des services complets : comptabilité, externalisation RH, informatique, traitement de données, web et marketing, pour optimiser votre entreprise.",
            'titleAvantage': 'Solutions sur Mesure et Expertise dans le domaine d\'Externalisation',
            'descAvantage': 'Aris Concept, expert en solutions personnalisées et en accompagnement sur-mesure, vous garantit innovation, flexibilité, et un excellent rapport qualité-prix. Découvrez nos services pour booster la réussite de vos projets.',
            'titleContact': 'Contactez Aris Concept – Solutions Sur Mesure et Accompagnement Personnalisé',
            'descContact': 'Besoin de conseils ou d\'informations ? Contactez Aris Concept dès maintenant. Notre équipe d\'experts est à votre écoute pour répondre à vos besoins et accompagner vos projets.',
            'titleApropos': 'À Propos de ARIS CONCEPT',
            'descApropos': 'ARIS CONCEPT est une entreprise malgache passionnée par le traitement de données et la création de solutions informatiques sur mesure. Nous offrons des services de qualité tout en favorisant le développement professionnel de nos équipes et en contribuant à la croissance économique et sociale de Madagascar',
            'titleEbook': 'Téléchargez Notre Ebook | Aris Concept',
            'descEbook': 'Découvrez les meilleures stratégies d\'externalisation avec Aris Concept. Téléchargez notre ebook gratuit et apprenez à réduire vos coûts, améliorer vos processus, et booster la croissance de votre entreprise grâce à un centre d\'offshore dédié.',
            'titleCarrier': 'Rejoignez ARIS CONCEPT - Offres d\'Emploi et Candidatures Spontanées',
            'descCarrier': 'Explorez nos offres d\'emploi chez ARIS CONCEPT et postulez dès maintenant. Déposez votre candidature spontanée et saisissez l\'opportunité de rejoindre une équipe passionnée, dédiée à l\'excellence et à l\'innovation.',
            'probleme': 'Il y a un problème de connexion',


        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "fr",
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false,
        }
    })

export default i18n;
