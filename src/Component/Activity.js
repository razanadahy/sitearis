import React from 'react';
import tdonne from '../img/tdonne.png'
import tImg from '../img/timg.png'
import tVid from '../img/tvideo.png'
import {Carousel} from "react-bootstrap";
import ElementShowTitle from "./ElementShowTitle";

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
                            <img src={tVid} className="card-img-top card-img-bottom bg-gradient-info" alt="image traitement de son et video" />

                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                          <img src={tdonne} className="card-img-top bg-gradient-info card-img-bottom"  alt="image traitement de donnée" />

                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                          <img src={tImg} className="card-img-top bg-gradient-info card-img-bottom" alt="image traitement d'image" />

                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
export default Activity
