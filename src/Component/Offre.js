import React from 'react'
import ElementShowTitle from "./ElementShowTitle";
import {useMediaQuery} from "react-responsive";

const Offre = () => {
    const isMediumOrLarger = useMediaQuery({ query: '(max-width: 992px)' });
    return(
        <>
            <div className="row w-100 m-0 pt-4 pb-4 pr-4 pe-0">
                <ElementShowTitle title={"Notre Collaboration"}/>
            </div>
            <div className="container mb-2">
                <div className="card border-0 mb-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-2">
                            <div className="card h-100 rounded-4 w-100 mx-auto shadow content-contribution cursor-pointer showTop">
                                <div className="card-body color-semi-purpule">
                                    <div className="mt-4 mb-3 text-center w-100">
                                        <i className="fas fa-people-carry fa-2xl"/>
                                    </div>
                                    <h3 className="text-center mb-3 px-3">Coworking?</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-lg-4 mb-2" style={{transform: `translateY(${isMediumOrLarger ? '0' : '30px'})`}}>
                            <div className="card h-100 rounded-4 w-100 mx-auto shadow content-contribution cursor-pointer showTop">
                                <div className="card-body color-semi-orange">
                                    <div className="mt-4 mb-3 text-center w-100">
                                        <i className="fas fa-handshake fa-2xl"/>
                                    </div>
                                    <h3 className="text-center mb-3 px-3">Sous-traitance?</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-2">
                            <div className="card h-100 rounded-4 w-100 mx-auto shadow content-contribution cursor-pointer showTop">
                                <div className="card-body color-orange">
                                    <div className="mt-4 mb-3 text-center w-100">
                                        <i className="fas fa-city fa-2xl"/>
                                    </div>
                                    <h3 className="text-center mb-3 px-3">Un centre offshore?</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-6 col-sm-12 d-flex align-items-stretch mb-2 mt-lg-4">
                            <div className="card h-100 rounded-4 mx-auto shadow content-contribution w-100 cursor-pointer showTop">
                                <div className="card-body color-red">
                                    <div className="mt-4 mb-3 text-center w-100">
                                        <i className="fas fa-lightbulb fa-2xl"/>
                                    </div>
                                    <h3 className="text-center mb-3 px-3">Pourquoi externaliser?</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 d-flex align-items-stretch mb-2 mt-lg-4">
                            <div className="card h-100 rounded-4 mx-auto shadow content-contribution w-100 cursor-pointer showTop">
                                <div className="card-body">
                                    <div className="mt-4 mb-3 text-center w-100">
                                        <i className="fas fa-user-friends fa-2xl color-cyan"/>
                                    </div>
                                    <h3 className="text-center mb-3 px-3 color-cyan">Une équipe selon vos besoins?</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 p-3 w-100">
                <div className="card mx-auto rounded-4 bg-edit border-2 border-success ">
                    <div className="card-body p-4 text-center text-white">
                        <h2><i className="fa-solid fa-right-long p-2"></i>Nous sommes là pour vous accompagner et collaborer avec vous!!!</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Offre