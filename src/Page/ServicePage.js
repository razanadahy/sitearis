import React from 'react'
import InfoService from "../Component/Head/InfoService";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import AllService from "../Component/Body/AllService";
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

const ServicePage = () => {
    const {lang} = useParams()
    const {t}=useTranslation()
    return(
        <>
            <Helmet>
                <html lang={lang} />
                <title>{t('titleService')}</title>
                <meta name="description" content={t('descriptionService')}/>
                <link rel="alternate" href="https://www.aris-cc.com/en/service" hrefLang="en"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr/service" hrefLang="fr"/>
                <link rel="alternate" href="https://www.aris-cc.com/fr/service" hrefLang="x-default"/>

                <meta property="og:url" content={`https://www.aris-cc.com/${lang}/service`} />
                <meta property="og:site_name" content="Aris Concept" />
                <meta property="og:title" content={t('titleService')} />
                <meta property="og:description" content={t('descriptionService')} />
                <meta property="og:image" content="%PUBLIC_URL%/logoA.ico"/>
                <meta property="og:type" content="webpage" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('titleService')} />
                <meta name="twitter:description" content={t('descriptionService')} />
                <meta name="twitter:image" content="%PUBLIC_URL%/logoA.ico" />
                <meta name="twitter:url" content={`https://www.aris-cc.com/${lang}/service`} />
            </Helmet>
            <HeaderContent active={2}/>
            <InfoService/>
            <AllService/>
            <AccueilFooter/>
        </>
    )
}

export default ServicePage