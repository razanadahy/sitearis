import React from "react";
import {Form} from "react-bootstrap";

const Equipement = () => {
    return(
        <>
            <div className="w-100 m-0 p-3">
                <span className="display-4 text-concept fw-bold">Avec nous, vous avez: </span>
                <div className="border-aris text-start p-0 mx-3 my-0">
                    <h4 className="p-2 m-0 text-aris title pb-3 display-6"><i className="me-2 far fa-dot-circle fs-3"/> Service</h4>
                </div>
                <div className="mt-2 w-100 mb-2 p-0">
                    <p>-Solutions personnalisées et unique</p>
                    <p>-Accompagnement et engagement</p>
                    <p>-Les prix et le rapport qualité/prix</p>
                    <p>-Flexibilité et adaptabilité</p>
                </div>
                <div className="border-aris text-end p-0 mx-3 my-0">
                    <h4 className="p-2 m-0 text-aris title pb-3 display-6"><i className="me-2 far fa-dot-circle fs-3"/> Personnels</h4>
                </div>
                <div className="mt-2 bg-danger w-100 mb-2 p-0">
                    <p>-L'innovation et l'adaptabilité</p>
                    <p>-Compétent et engagé</p>
                    <p>-Qualifié</p>
                </div>
                <div className="border-aris text-start p-0 mx-3 my-0">
                    <h4 className="p-2 m-0 text-aris title pb-3 display-6"><i className="me-2 far fa-dot-circle fs-3"/> Entreprise</h4>
                </div>
                <div className="mt-2 bg-danger w-100 mb-2 p-0">
                    <p>-contribution au formation du personnel</p>
                    <p>-Condition de travail au top</p>
                    <p>-Equipement haute performance</p>
                    <p>-Stabilité et engagement</p>
                </div>
            </div>
            que voulez vous en savoir sur Aris concept?
            contactez-nous/Notre brochure
        </>
    )
}

export default Equipement