import React from "react";
import {useMediaQuery} from "react-responsive";

const TextCarousel = ({title,emplacement}) => {
    const isXL = useMediaQuery({ query: "(min-width: 1200px)" });
    const isLG = useMediaQuery({ query: "(min-width: 992px) and (max-width: 1199px)" });
    const isMD = useMediaQuery({ query: "(min-width: 768px) and (max-width: 991px)" });
    const isSM = useMediaQuery({ query: "(max-width: 767px) and (min-width: 474px)" });
    const isXS = useMediaQuery({ query: "(max-width: 473px)" });
    const clas = () =>{
        if (isXL){
            return 'w-50 top-10'
        }if (isLG){
            return 'w-50 top-10'
        }if (isMD){
            return 'w-50 top-20'
        }if(isSM){
            return 'w-60 top-10'
        }if(isXS){
            return 'w-100 top-5'
        }
        return ''
    }
    return(
        <div className={`position-absolute ${(emplacement+1)%2===0 ? 'end-0' : 'start-0'} mx-2 rounded-4 ${clas()} pt-3 px-2 pb-1`}>
            <h3 className={`text-center color-aris mb-lg-5 mb-md-3 mb-sm-2 ${isSM ? 'fs-3' : isMD ? 'fs-3' : isLG ? 'fs-2' : isXS ? 'fs-6' : 'fs-1'}`}>{title}</h3>
            <p className={`${isSM ? 'fs-6' : isMD ? 'fs-5' : isLG ? 'fs-4' : isXS ? 'fs-7': 'fs-3 pt-3'} text-white text-center`}>Nos spécialistes en informatique offrent une gamme
                complète de services, du développement logiciels aux
                traitements de données en ligne et hors ligne.
            </p>
        </div>
    )
}

export default TextCarousel