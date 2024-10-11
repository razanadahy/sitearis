import React from "react";
import {useTranslation} from "react-i18next";
import we from '../../Asset/we.jpg'
const InfoApropos = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="row bg-gradient-info-dark w-100 text-white mt-md-2 mt-sm-2 mx-0 mb-3 font-ramona position-relative">
                <br/>
                <div className="col-lg-9 col-md-11 mt-5 p-6 pb-5 offset-lg-1 offset-md-1 col-sm-12">
                    <span className="slideOutToRight p-sm-2 display-2 fw-bold">
                        <strong style={{ color: '#D10D58' }}>ARIS </strong> <strong style={{ color: '#0e8de8' }}>CONCEPT</strong>
                    </span>
                </div>
                <div className="position-absolute w-auto bottom-0 end-0" style={{transform: 'translateY(50px)', shapeOutside: 'cir'}}>
                    <img src={we} className=""  alt=""/>
                </div>
            </div>
        </>
    )
}

export default InfoApropos