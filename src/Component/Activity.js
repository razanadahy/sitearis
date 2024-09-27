import React from 'react';
import {Carousel} from "react-bootstrap";
import ElementShowTitle from "./ElementShowTitle";
import TextCarousel from "./TextCarousel";

import compa from '../img/FileChange/compta.png'
import extAdmin from '../img/FileChange/admin.png'
import traitement from '../img/FileChange/info.png'
import rh from '../img/FileChange/rh.png'
import web from '../img/FileChange/web.png'

const Activity = () => {

    return (
        <>
            <div className="row w-100 m-0 pt-4 pb-4 pr-4 pe-0">
                <ElementShowTitle title={"Nos domaines d'activités"}/>
            </div>
            <div className="row m-0 px-lg-5 pb-0 pt-0 px-sm-2 px-md-3 w-100">
                <div className="card border-0  px-lg-5 px-sm-2 px-md-3">
                    <Carousel className="mx-auto" data-bs-theme="dark" pause={"hover"} nextIcon={null} prevIcon={null}>
                        <Carousel.Item interval={1500}>
                            <img src={compa} className="card-img-top bg-gradient-info card-img-bottom"  alt="Web et Marketing" />
                            <TextCarousel title={'Comptabilité'} emplacement={1} desc={'Notre équipe de collaborateurs comptables est votre partenaire privilégié pour une gestion financière optimale. Grâce à notre expertise et notre rigueur, nous vous garantissons des données fiables et des états financiers clairs et précis, vous permettant ainsi de prendre les meilleures décisions pour votre entreprise.'}/>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img src={extAdmin} className="card-img-top bg-gradient-info card-img-bottom"  alt="Web et Marketing" />
                            <TextCarousel title={'Externalisation administrative'} emplacement={2} desc={'Déléguez vos tâches administratives pour vous concentrer sur votre cœur de métier. Notre équipe gère vos agendas, votre correspondance et l\'organisation de vos réunions.'}/>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img src={traitement} className="card-img-top bg-gradient-info card-img-bottom"  alt="Web et Marketing" />
                            <TextCarousel title={'Informatique et Traitement de Données'} emplacement={1} desc={'Bénéficiez de solutions informatiques innovantes et personnalisées. Nos spécialistes optimisent vos systèmes d\'information et traitent efficacement vos données.'}/>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img src={rh} className="card-img-top bg-gradient-info card-img-bottom"  alt="Web et Marketing" />
                            <TextCarousel title={'Ressources Humaines'} emplacement={2} desc={'Nous vous accompagnons dans la gestion de vos talents. Du recrutement à la formation, nos services RH vous aident à construire des équipes performantes.'}/>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img src={web} className="card-img-top bg-gradient-info card-img-bottom"  alt="Web et Marketing" />
                            <TextCarousel title={'Web et Marketing'} emplacement={2} desc={'Développez votre présence en ligne et améliorez votre visibilité. Nos experts en marketing digital vous proposent des solutions clés en main pour atteindre vos objectifs.'}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
export default Activity
