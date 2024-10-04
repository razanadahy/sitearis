import React from "react";
import statistique from '../../img/ofre.png'

const AppelAction = () => {
    return (
        <>
            <div className="container bg-dark bg-opacity-10">
                <div className="row mx-0 mt-4 p-3">
                    <div className="col-3 offset-2 bg-primary-subtle">
                        <img src={statistique} alt="..." height={200}/>
                    </div>
                    <div className="col-7 position-relative">
                        <div className="mt-2">
                            <span className="small text-body-emphasis p-3 mb-3">Laissez-nous vous aider!😊</span>
                            <h3 className="my-3 text-concept fw-bolder">Découvrez nos services</h3>
                            <h5>Nous sommes là pour vous accompagner et collaborer avec vous!!!</h5>
                        </div>
                        <div className="w-100 position-absolute bottom-0 row m-0 px-0 pt-0 pb-2">
                            <div className="col-6">
                                <button type="button" className="btn btn-primary w-100 py-2 fw-bolder rounded-1">Nos services</button>
                            </div>
                            <div className="col-6">
                                <button type="button" className="btn btn-info py-2 fw-bolder w-100 rounded-1">Contactez-nous</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AppelAction