import React from "react";
import {useMediaQuery} from "react-responsive";

const ValeurE = ({emplacement,img,text,title}) => {
    const maxW=useMediaQuery({query: "(max-width: 590px)"})
    return(
        <>
            {maxW ? (
                <>
                    <div className={`mx-0 mt-3 mb-2 p-0 ${maxW ? '' : 'd-flex justify-content-between align-items-center'}`}>
                        <div className={`${maxW ? 'w-100' : 'w-auto me-5'}`}>
                            <span className="text-concept display-5 fw-bold"><span className="display-6 me-3 color-dark-concept">{emplacement + 1}.</span>{title}</span>
                            <p className="fs-5 p-2">
                                {text}
                            </p>
                        </div>
                        <div className={`${maxW ? 'w-100' : 'width-max'}`}>
                            <img decoding={"async"} className={`${maxW ? 'w-100 rounded-3' : ''}`} src={img} alt={title}/>
                        </div>
                    </div>
                </>
            ) : emplacement % 2===0 ? (
                <div className={`mx-0 mt-3 mb-2 p-0 d-flex justify-content-between align-items-center`}>
                    <div className={`w-auto me-5`}>
                        <span className="text-concept display-5 fw-bold"><span className="display-6 me-3 color-dark-concept">{emplacement + 1}.</span>{title}</span>
                        <p className="fs-5 p-2">
                            {text}
                        </p>
                    </div>
                    <div className={`width-max`}>
                        <img decoding={"async"} src={img} alt={title}/>
                    </div>
                </div>
            ) : (
                <div className={`mx-0 mt-3 mb-2 p-0 d-flex justify-content-between align-items-center`}>
                    <div className={`w-auto`}>
                        <img decoding={"async"} src={img} alt={title}/>
                    </div>
                    <div className={`ms-5`}>
                        <span className="text-concept display-5 fw-bold"><span className="display-6 me-3 color-dark-concept">{emplacement + 1}.</span>{title}</span>
                        <p className="fs-5 p-2">
                            {text}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
export default ValeurE