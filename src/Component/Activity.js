import React from 'react';
import tdonne from '../img/t-donné.png'
import tImg from '../img/t-img.png'
import tVid from '../img/t-vid.png'
import {Carousel} from "react-bootstrap";
import ElementShowTitle from "./ElementShowTitle";

const Activity = () => {

    return (
        <>
            <div className="row w-100 m-0 pt-4 pb-4 pr-4 pe-0">
                <ElementShowTitle title={"Nos secteurs"}/>
            </div>
            <div className="row m-0 p-4 w-100">
                <div className="card border-0">
                    <Carousel data-bs-theme="dark" pause={"hover"}>
                        <Carousel.Item interval={1000}>
                            <img src={tVid} className="card-img-top bg-gradient-info" alt="..." />
                            <Carousel.Caption className="bg-edit border rounded-2 opacity-75">
                                <h2 className="color-cyan">Traitement de sons et/ou vidéos</h2>
                                <p className="fs-5 text-white">Nos spécialistes en informatique offrent une gamme
                                  complète de services, du développement logiciel au
                                  traitement de données en ligne et hors ligne.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                          <img src={tdonne} className="card-img-top bg-gradient-info" alt="..." />
                          <Carousel.Caption className="bg-edit border rounded-2 opacity-75">
                              <h2 className="color-cyan">Traitement de données online ou offline</h2>
                              <p className="fs-5 text-white">Nos spécialistes en informatique offrent une gamme
                                  complète de services, du développement logiciel au
                                  traitement de données en ligne et hors ligne.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                          <img src={tImg} className="card-img-top bg-gradient-info" alt="..." />
                          <Carousel.Caption className="bg-edit border rounded-2 opacity-75">
                              <h2 className="color-cyan">Traitement d'image</h2>
                              <p className="fs-5 text-white">Nos spécialistes en informatique offrent une gamme
                                  complète de services, du développement logiciel au
                                  traitement de données en ligne et hors ligne.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
export default Activity
