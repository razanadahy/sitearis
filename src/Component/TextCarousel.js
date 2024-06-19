import React from "react";
import {useMediaQuery} from "react-responsive";

const TextCarousel = ({title,emplacement}) => {
    const isXL = useMediaQuery({ query: '(min-width: 1200px)' });
    const isLG = useMediaQuery({ query: '(min-width: 992px)' });
    const isMD = useMediaQuery({ query: '(min-width: 768px)' });
    const isSM = useMediaQuery({ query: '(max-width: 768px)' });
    const clas = () =>{
        if (isXL){
            return 'w-50 top-50'
        }if (isLG){
            return 'w-75 top-40'
        }if (isMD){
            return 'w-75 end-0 start-0 top-30'
        }if(isSM){
            return 'w-100 top-20'
        }
        return ''
    }
    return(
        <div className={`position-absolute bg-edit opacity-75 ${(emplacement+1)%2===0 ? 'end-0' : 'start-0'} mx-2 rounded-4 ${clas} pt-3 px-2 pb-1`}>
            <h3 className="text-center color-cyan">{title}</h3>
            <p className="fs-5 text-white text-center">Nos spécialistes en informatique offrent une gamme
                complète de services, du développement logiciels aux
                traitements de données en ligne et hors ligne.
            </p>
        </div>
    )
}

export default TextCarousel