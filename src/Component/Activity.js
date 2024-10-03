import React, {useCallback} from 'react';
import {CardImg, Carousel} from "react-bootstrap";
import ElementShowTitle from "./ElementShowTitle";
import TextCarousel from "./TextCarousel";

import compa from '../img/FileChange/compta.png'
import extAdmin from '../img/FileChange/admin.png'
import traitement from '../img/FileChange/info.png'
import rh from '../img/FileChange/rh.png'
import web from '../img/FileChange/web.png'
import ImageCarossel from "./Carousel/ImageCarossel";
import {useMediaQuery} from "react-responsive";

const Activity = () => {
    const wMax = useMediaQuery({ query: "(min-width: 1000px)" });
    const changeContent=useCallback((image)=>{
        if (wMax){
            return (
                <CardImg as={"div"} className="card-img-top bg-gradient-info card-img-bottom vw-80">
                    <ImageCarossel linkImage={image}/>
                </CardImg>
            )
        }else{
            return (
                <img src={image}  className="card-img-top bg-gradient-info card-img-bottom w-100"  alt="Web et Marketing" />
            )
        }
    },[wMax])
    return (
        <>
            <div className="row w-100 m-0 pt-4 pb-4 pr-4 pe-0">
                <ElementShowTitle title={"Nos domaines d'activités"}/>
            </div>
            <div className="row m-0 px-lg-5 pb-0 pt-0 px-sm-2 px-md-3 w-100">
                <div className="card border-0  px-lg-5 px-sm-2 px-md-3">
                    <Carousel className="mx-auto vw-80" data-bs-theme="dark" pause={"hover"} nextIcon={null} prevIcon={null}>
                        <Carousel.Item interval={1500}>
                            {changeContent(compa)}
                            <TextCarousel id={"compta"} title={'Comptabilité'} emplacement={1} desc={'Notre équipe de collaborateurs comptables est votre partenaire privilégié pour une gestion financière optimale. Grâce à notre expertise et notre rigueur, nous vous garantissons des données fiables et des états financiers clairs et précis, vous permettant ainsi de prendre les meilleures décisions pour votre entreprise.'}/>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            {changeContent(extAdmin)}
                            <TextCarousel id={"ext"} title={'Externalisation administrative'} emplacement={2} desc={'Déléguez vos tâches administratives pour vous concentrer sur votre cœur de métier. Notre équipe gère vos agendas, votre correspondance et l\'organisation de vos réunions.'}/>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            {changeContent(traitement)}
                            <TextCarousel id={"traitement"} title={'Informatique et Traitement de Données'} emplacement={1} desc={'Bénéficiez de solutions informatiques innovantes et personnalisées. Nos spécialistes optimisent vos systèmes d\'information et traitent efficacement vos données.'}/>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            {changeContent(rh)}
                            <TextCarousel id={"rh"} title={'Ressources Humaines'} emplacement={2} desc={'Nous vous accompagnons dans la gestion de vos talents. Du recrutement à la formation, nos services RH vous aident à construire des équipes performantes.'}/>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            {changeContent(web)}
                            <TextCarousel id={"web"} title={'Web et Marketing'} emplacement={2} desc={'Développez votre présence en ligne et améliorez votre visibilité. Nos experts en marketing digital vous proposent des solutions clés en main pour atteindre vos objectifs.'}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
export default Activity
