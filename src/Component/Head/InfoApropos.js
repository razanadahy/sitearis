import React from "react";
import we from '../../Asset/we.jpg'
import Star from "./Star";
import {useMediaQuery} from "react-responsive";
const InfoApropos = () => {
    const maxVue=useMediaQuery({query: "(max-width: 521px)"})
    return (
        <>
            <div className="row bg-gradient-info-dark w-100 text-white mt-0 mx-0 mb-3 font-ramona position-relative">
                <br/>
                <div className="col-lg-9 col-md-11 mt-5 p-6 pb-5 offset-lg-1 offset-md-1 col-sm-12">
                    <span className="slideOutToRight p-sm-2 display-2 fw-bold">
                        <strong style={{ color: '#D10D58' }}>ARIS </strong> <strong style={{ color: '#0e8de8' }}>CONCEPT</strong>
                    </span>
                </div>
                <div className={`${maxVue ? 'd-none' : 'position-absolute w-auto bottom-0 end-0 z-1'}`} style={{transform: 'translateY(50px)'}}>
                    <img src={we} className=""  alt=""/>
                </div>
                <Star size={'0.1'} left={'70%'} top={'50%'}/>
                <Star size={'0.12'} left={'4%'} top={'20%'}/>
                <Star size={'0.07'} left={'50%'} top={'90%'}/>
                <Star size={'0.13'} left={'12%'} top={'73%'}/>
            </div>
        </>
    )
}

export default InfoApropos