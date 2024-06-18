import React from 'react';
import tdonne from '../img/tdonne.png'
import tImg from '../img/timg.png'
import tVid from '../img/tvideo.png'
import {Carousel} from "react-bootstrap";
import ElementShowTitle from "./ElementShowTitle";
import TextCarousel from "./TextCarousel";

const Activity = () => {

    return (
        <>
            <div className="row w-100 m-0 pt-4 pb-4 pr-4 pe-0">
                <ElementShowTitle title={"Nos secteurs"}/>
            </div>
            <div className="row m-0 px-lg-5 pb-0 pt-0 px-sm-2 px-md-3 w-100">
                <div className="card border-0  px-lg-5 px-sm-2 px-md-3">
                    <Carousel className="mx-auto" data-bs-theme="dark" pause={"hover"}>
                        <Carousel.Item interval={1000}>
                            <img src={tVid} className="card-img-top card-img-bottom bg-gradient-info" alt="traitement de son et video" />
                            <TextCarousel title={'Traitement de sons et/ou vidéos'} emplacement={0}/>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img src={tdonne} className="card-img-top bg-gradient-info card-img-bottom"  alt="traitement de donnée" />
                            <TextCarousel title={'Traitement de données online ou offline'} emplacement={1}/>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img src={tImg} className="card-img-top bg-gradient-info card-img-bottom" alt="traitement d'image" />
                            <TextCarousel title={'Traitement d\'image'} emplacement={2}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
export default Activity
