import React, {useMemo} from "react";
import DetailService from "./DetailService";
import {useTranslation} from "react-i18next";
import cp from '../../Asset/ciel-compta.jpg'
import traitement from '../../Asset/traitDonne.jpg'
import rh from '../../Asset/rh.jpg'
import extAdd from '../../Asset/extAdd.jpg'
import web from '../../Asset/web-marketing.jpg'

const AllService = () => {
    const { t, i18n } = useTranslation();
    const services= useMemo(() => {
        return [
            {id: 1, image: cp, title: t('compta'), text: 'Confiez-nous votre comptabilité pour une gestion financière transparente et fiable. Nos experts assurent un suivi rigoureux de vos comptes et vous aident à prendre des décisions éclairées.'},
            {id: 2, image: extAdd, title: t('ext'), text: 'Déléguez vos tâches administratives pour vous concentrer sur votre cœur de métier.' },
            {id: 3, image: web, title: t('marketing'), text: 'Développez votre présence en ligne et améliorez votre visibilité. Nos experts en marketing digital vous proposent des solutions clés en main pour atteindre vos objectifs.'},
            {id: 4, image: traitement, title: t('info'), text: 'Bénéficiez de solutions informatiques innovantes et personnalisées. Nos spécialistes optimisent vos systèmes d\'information et traitent vos données avec efficacité.'},
            {id: 5, image: rh, title: t('rh'), text: 'Nous vous accompagnons dans la gestion de vos talents. Du recrutement à la formation, nos services RH vous aident à construire des équipes performantes.'},
        ]
    }, [i18n.language]);
    return (
        <>
            <DetailService position={1} element={services[0]}>
                <span className="display-6 fw-bold">Nous vous aidons sur : </span>
                <ul className="list mt-3 ms-3 text-slate-500 grid grid-cols-2 grid-rows-3 gap-y-3 text-sm lg:text-base">
                    <li>Tenue de livres</li>
                    <li>Élaboration de rapports financiers</li>
                    <li>Déclarations fiscales</li>
                    <li>Conseil en gestion financière</li>
                    <li>Audit interne</li>
                    <li>Gestion de la paie</li>
                </ul>
            </DetailService>
            <DetailService position={2} element={services[3]}>
                <span className="display-6 fw-bold">Sur cela, nous proposons : </span>
                <ul className="list mt-3 ms-3 text-slate-500 grid grid-cols-2 grid-rows-3 gap-y-3 text-sm lg:text-base">
                    <li>Développement de logiciels sur mesure</li>
                    <li>Analyse et traitement de données</li>
                    <li>Gestion des bases de données</li>
                    <li>Automatisation des processus</li>
                    <li>Support technique et maintenance</li>
                    <li>Formation et accompagnement</li>
                </ul>
            </DetailService>
            <DetailService position={1} element={services[4]}>
                <span className="display-6 fw-bold">Nous apportons :</span>
                <ul className="list mt-3 ms-3 text-slate-500 grid grid-cols-2 grid-rows-3 gap-y-3 text-sm lg:text-base">
                    <li>Recrutement et sélection</li>
                    <li>Gestion des performances</li>
                    <li>Formation et développement professionnel</li>
                    <li>Gestion de la paie et des avantages sociaux</li>
                    <li>Planification des effectifs et gestion prévisionnelle des emplois et des compétences (GPEC)</li>
                </ul>
            </DetailService>
            <DetailService position={2} element={services[1]}>
                <span className="display-6 fw-bold">Nous vous aidons à gèrer : </span>
                <ul className="list mt-3 ms-3 text-slate-500 grid grid-cols-2 grid-rows-3 gap-y-3 text-sm lg:text-base">
                    <li>Gestion des agendas et planification</li>
                    <li>Gestion de la correspondance</li>
                    <li>Organisation d'événements et de réunions</li>
                    <li>Support administratif général</li>
                    <li>Suivi des commandes et gestion des stocks</li>
                    <li>Gestion des documents et archivage</li>
                </ul>
            </DetailService>
            <DetailService position={1} element={services[2]}>
                <span className="display-6 fw-bold">Nous vous aidons sur : </span>
                <ul className="list mt-3 ms-3 text-slate-500 grid grid-cols-2 grid-rows-3 gap-y-3 text-sm lg:text-base">
                    <li>Création de sites web</li>
                    <li>Marketing digital</li>
                    <li>Publicité en ligne</li>
                    <li>Analyse et reporting</li>
                    <li>Développement de la marque</li>
                    <li>Formation au marketing digital</li>
                </ul>
            </DetailService>
        </>
    )
}

export default AllService