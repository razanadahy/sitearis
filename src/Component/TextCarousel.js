import React from "react";

const TextCarousel = ({title,emplacement}) => {
    return(
        <div className="position-absolute top-50 bg-edit end-0 opacity-75 ms-2 mt-2 rounded-4 w-50 pt-4 px-4 pb-1">
            <h3 className="text-center color-cyan fs-2">{title}</h3>
            <p className="fs-5 text-white text-center">Nos spécialistes en informatique offrent une gamme
                complète de services, du développement logiciels aux
                traitements de données en ligne et hors ligne.
            </p>
        </div>
    )
}

export default TextCarousel