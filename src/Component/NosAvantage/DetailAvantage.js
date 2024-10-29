import React from "react";
import {useMediaQuery} from "react-responsive";

const DetailAvantage = ({emplacement,image,title,text}) => {
    const modif=useMediaQuery({query: '(max-width: 927px)'})
    return(
        <>
            <div className="w-100 row mx-0 mt-0 mb-2 p-0 align-items-center">
                {(emplacement) %2 ===0 ? (
                    <>
                        <div className={`${modif ? 'col-12' : 'col-8'}`}>
                            <span className="text-primary display-6">
                                <i className="me-3 ms-2 fa fa-minus"/>
                                {title}
                            </span>
                            <p className="mt-3 mb-0" style={{letterSpacing: '0.055rem'}}>
                                {text}
                            </p>
                        </div>
                        <div className={`${modif ? 'd-none' : 'col-auto'}`}>
                            <img src={image} draggable={"false"} decoding="async" title={title} alt={title} width={200} height={200}/>
                        </div>
                    </>
                ): (
                    <>
                        <div className={`${modif ? 'd-none' : 'offset-1 col-auto'}`}>
                            <img src={image} draggable={"false"} decoding="async" title={title} alt={title} width={200} height={200}/>
                        </div>
                        <div className={`${modif ? 'col-12' : 'col-8'}`}>
                            <span className="text-primary display-6">
                                <i className="me-3 ms-2 fa fa-minus"/>
                                {title}
                            </span>
                            <p className="mt-3 mb-0" style={{letterSpacing: '0.055rem'}}>
                                {text}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default DetailAvantage