import React, {useCallback} from "react";
import {useMediaQuery} from "react-responsive";
import {useNavigate} from "react-router-dom";

const TextCarousel = ({title,emplacement,desc, id}) => {
    const isXL = useMediaQuery({ query: "(min-width: 1200px)" });
    const isLG = useMediaQuery({ query: "(min-width: 992px) and (max-width: 1199px)" });
    const isMD = useMediaQuery({ query: "(min-width: 768px) and (max-width: 991px)" });
    const isSM = useMediaQuery({ query: "(max-width: 767px) and (min-width: 474px)" });
    const isXS = useMediaQuery({ query: "(max-width: 473px)" });
    const clas = () =>{
        if (isXL){
            return 'w-60 top-10'
        }if (isLG){
            return 'w-60 top-10'
        }if (isMD){
            return 'w-60 top-10'
        }if(isSM){
            return 'w-100 top-5'
        }if(isXS){
            return 'w-100 top-5'
        }
        return ''
    }
    const navigate = useNavigate();

    const handleClick = useCallback( () => {
        navigate(`/service#${id}`);
    },[id])
    return(
        <>
            <div className={`position-absolute ${(emplacement+1)%2===0 ? 'end-0' : 'start-0'} mx-2 ${clas()} pt-4 px-2 pb-1`}>
                <h3 className={`text-center color-aris mb-lg-3 mb-md-2 mb-sm-1 ${isSM ? 'fs-3' : isMD ? 'fs-3' : isLG ? 'fs-2' : isXS ? 'fs-6' : 'fs-1'}`}>{title}</h3>
                <p className={`${isSM ? 'fs-6' : isMD ? 'fs-5' : isLG ? 'fs-4' : isXS ? 'fs-7': 'fs-3 pt-3'} text-white text-center m-0 p-0 ms-2`}>
                    {desc}
                </p>
                <div className="p-2 pe-2 w-100 d-flex justify-content-start">
                    <button type="button" className="btn btn-light rounded-0 small" onClick={handleClick}>En savoir Plus <span className=""><i className="fa-solid fa-angles-right"/></span></button>
                </div>
            </div>
        </>
    )
}

export default TextCarousel