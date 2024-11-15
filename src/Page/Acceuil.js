import React from 'react'
import EntrepriseInfo from "../Component/Head/EntrepriseInfo";
import HeaderContent from "../Component/Head/HeaderContent";
import ServiceDetail from "../Component/Content/ServiceDetail";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import AppelAction from "../Component/Content/AppelAction";
import ListMetier from "../Component/Content/ListMetier";
import SolutionServicePage from "../Component/Accueil/SolutionServicePage";
import '../Component/Content/Service.css'
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Acceuil = () => {
    const {lang} = useParams()
    const {t}=useTranslation()
    return (
        <>
            <Helmet>
                <html lang={lang} />
                <title>{t('title')}</title>
                <meta name="description" content={t('description')} />
                <link rel="alternate" href="https://www.aris-cc.com/en" hrefLang="en"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr" hrefLang="fr"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr" hrefLang="x-default"/>
                <link rel="canonical" href={`/${lang}`}/>
                <meta property="og:url" content={`https://www.aris-cc.com/${lang}`} />
                <meta property="og:site_name" content="Aris Concept" />
                <meta property="og:title" content={t('title')} />
                <meta property="og:description" content={t('description')} />
                <meta property="og:image" content="%PUBLIC_URL%/logoA.ico"/>
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('title')} />
                <meta name="twitter:description" content={t('description')} />
                <meta name="twitter:image" content="%PUBLIC_URL%/logoA.ico" />
                <meta name="twitter:url" content={`https://www.aris-cc.com/${lang}`} />
            </Helmet>
            <HeaderContent active={1}/>
            <EntrepriseInfo/>
            <ListMetier/>
            <ServiceDetail/>
            <AppelAction/>
            <SolutionServicePage/>
            <AccueilFooter/>
        </>
    )
}
export default Acceuil