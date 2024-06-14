import React from 'react'
import ElementShowTitle from "./ElementShowTitle";

const Valeur = () => {
    return (
        <>
            <div className="row w-100 m-0 pt-4 pb-4 pr-4 pe-0">
                <ElementShowTitle title={"NOS VALEURS"}/>
            </div>
            <div className="row m-0 p-0">
                <div className="card border-0">
                    <div className="card-body">
                        <div className="row m-4 p-2">
                            <div className="col-3 d-flex align-items-stretch mb-2">
                                <div className="card h-100 w-100 rounded-4 mx-auto shadow cursor-pointer bg-info text-bg-primary">
                                    <div className="card-body">
                                        <div className="mt-4 mb-3 text-center w-100">
                                            <i className="fas fa-cogs fa-2xl"/>
                                        </div>
                                        <h3 className="text-center mb-3 px-3">Savoir-faire</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 d-flex align-items-stretch mb-2">
                                <div className="card h-100 w-100 rounded-4 mx-auto shadow cursor-pointer bg-cyan text-white">
                                    <div className="card-body">
                                        <div className="mt-4 mb-3 text-center w-100">
                                            <i className="fas fa-award fa-2xl"/>
                                        </div>
                                        <h3 className="text-center mb-3 px-3">Qualité</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 d-flex align-items-stretch mb-2">
                                <div className="card h-100 w-100 rounded-4 mx-auto shadow cursor-pointer bg-mi-blue text-white">
                                    <div className="card-body">
                                        <div className="mt-4 mb-3 text-center w-100">
                                            <i className="fas fa-flag fa-2xl"/>
                                        </div>
                                        <h3 className="text-center mb-3 px-3">Engagement</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 d-flex align-items-stretch mb-2">
                                <div className="card h-100 w-100 rounded-4 mx-auto shadow cursor-pointer bg-blue text-white">
                                    <div className="card-body">
                                        <div className="mt-4 mb-3 text-center w-100">
                                            <i className="fas fa-tags fa-2xl"/>
                                        </div>
                                        <h3 className="text-center mb-3 px-3">Disponibilité</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Valeur