import React from 'react'
import ElementShowTitle from "./ElementShowTitle";

const Offre = () => {
    return(
        <>
            <div className="row w-100 m-0 pt-4 pb-4 pr-4 pe-0">
                <ElementShowTitle title={"Notre Collaboration"}/>
            </div>
            <div className="container mb-2">
                <div className="card border-0 mb-4">
                    <div className="row">
                        <div className="col-4 d-flex align-items-stretch mb-2">
                            <div className="card h-100 rounded-4 w-100 mx-auto shadow content-contribution cursor-pointer showTop">
                                <div className="card-body">
                                    <div className="mt-4 mb-3 text-center w-100">
                                        <i className="fas fa-people-carry fa-2xl"/>
                                    </div>
                                    <h3 className="text-center mb-3 px-3">Coworking?</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex align-items-stretch mb-4 z-2" style={{transform: 'translateY(30px)'}}>
                            <div className="card h-100 rounded-4 w-100 mx-auto shadow content-contribution cursor-pointer showTop">
                                <div className="card-body">
                                    <div className="mt-4 mb-3 text-center w-100">
                                        <i className="fas fa-handshake fa-2xl"/>
                                    </div>
                                    <h3 className="text-center mb-3 px-3">Sous-traitance?</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex align-items-stretch mb-2">
                            <div className="card h-100 rounded-4 w-100 mx-auto shadow content-contribution cursor-pointer showTop">
                                <div className="card-body">
                                    <div className="mt-4 mb-3 text-center w-100">
                                        <i className="fas fa-city fa-2xl"/>
                                    </div>
                                    <h3 className="text-center mb-3 px-3">Un centre offshore?</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 offset-1 d-flex align-items-stretch mb-2 mt-4">
                            <div className="card h-100 rounded-4 mx-auto shadow content-contribution w-100 cursor-pointer showTop">
                                <div className="card-body">
                                    <div className="mt-4 mb-3 text-center w-100">
                                        <i className="fas fa-lightbulb fa-2xl"/>
                                    </div>
                                    <h3 className="text-center mb-3 px-3">Pourquoi externaliser?</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 d-flex align-items-stretch mb-2 mt-4">
                            <div className="card h-100 rounded-4 mx-auto shadow content-contribution w-100 cursor-pointer showTop">
                                <div className="card-body">
                                    <div className="mt-4 mb-3 text-center w-100">
                                        <i className="fas fa-user-friends fa-2xl"/>
                                    </div>
                                    <h3 className="text-center mb-3 px-3">Une équipe selon vos besoins?</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="card mx-auto m-4 rounded-4 bg-edit border-2 border-success ">
                    <div className="card-body p-4 text-center text-white">
                        <h2><i className="fa-solid fa-right-long p-2"></i>Nous sommes là pour vous accompagner et collaborer avec vous!!!</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Offre