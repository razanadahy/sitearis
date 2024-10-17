import React from "react";
import './body.css'

const DetailService = ({position, element, children,clicked}) => {
    return(
        <>
            <div className="vh-100 m-0 position-relative">
                <div className="mx-4 px-3 vh-100 mt-0 ">
                    <div className="row m-0 p-2 h-100 position-relative">
                        <div className="position-absolute ps-center rounded-3 py-2 shadow text-center">
                            <span className="display-2 text-white px-4">{element.title}</span>
                        </div>
                        {position % 2 !== 0 ? (
                            <>
                                <div className="col-5 h-100 d-flex">
                                    <div
                                        className="w-100 h-75 my-auto rounded-3"
                                        style={{ backgroundImage: `url('${element.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    />
                                </div>
                                <div className="col-7 h-100 d-flex">
                                    <div className="h-50 my-auto">
                                        <p className="fs-5 px-1 py-0 mt-0 mb-4 mx-0">{element.text}</p>
                                        {children}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-6 h-100 d-flex">
                                    <div className="h-50 my-auto">
                                        <p className="fs-5 px-1 py-0 mt-0 mb-4 mx-0">{element.text}</p>
                                        {children}
                                    </div>
                                </div>
                                <div className="col-6 h-100 d-flex">
                                    <div
                                        className="w-100 h-75 my-auto rounded-3"
                                        style={{ backgroundImage: `url('${element.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-sm-start align-items-center  position-absolute bottom-0">
                    <i className="mx-2 fa-2x fa fa-arrow-right"/>
                    <span onClick={()=>clicked()} className="fw-bold p-2 m-0 color-dark-concept cursor-pointer" style={{letterSpacing: '0.07rem', fontSize: '1.65rem',}}>
                        Demander un devis gratuit ici
                    </span>
                   </div>
            </div>
        </>
    )
}
export default DetailService