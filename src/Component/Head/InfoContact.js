import React from "react";
import Star from "./Star";

const InfoContact = () => {
    return(
        <div className="row bg-gradient-info-dark w-100 text-white mx-0 mb-3 font-ramona position-relative">
            <br/>
            <div className="col-lg-9 col-md-11 mt-5 p-6 pb-5 offset-lg-1 offset-md-1 col-sm-12">
                <h1 className="slideOutToRight p-sm-2 fs-2">
                    Contactez-nous dès aujourd'hui pour une consultation gratuite !
                </h1>
                <p className="fs-5 p-3 m-0 me-2 preAnimation fst-italic font-consolas ">
                    Découvrez comment nos solutions de l'externalisation  peuvent  transformer votre entreprise.
                </p>
            </div>
            <Star size={'0.2'} left={'90%'} top={'20%'}/>
            <Star size={'0.15'} left={'4%'} top={'20%'}/>
            <Star size={'0.07'} left={'50%'} top={'80%'}/>
            <Star size={'0.1'} left={'12%'} top={'70%'}/>
        </div>
    )
}
export default InfoContact