import React, {useState} from "react";
import {useParams} from "react-router-dom";

const AppelAvantage = () => {
    const {lang}=useParams()
    return(
        <>
            <div className="mt-3 w-100 mx-0 mb-0 px-0 py-4 text-center ">
                <span className="display-6">
                    Que voulez vous en savoir sur <strong className="text-aris fw-bold">Aris</strong> <strong className="text-concept fw-bold"> Concept</strong>?
                </span>
                <div className="mt-3 d-flex justify-content-center px-1">
                    <a href={`/${lang}/contact`} className="me-3 btn btn-content btn-lg rounded-3 btn-primary">
                        Nous contacter
                    </a>
                    <a href={`/${lang}/service`} className="ms-3 btn btn-content btn-lg rounded-3 btn-light">
                        Nos services
                    </a>
                </div>
            </div>
        </>
    )
}

export default AppelAvantage