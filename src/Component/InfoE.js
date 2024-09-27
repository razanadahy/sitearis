import React  from 'react';
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const InfoE = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/BROCHURE_ARIS-Concept.pdf';
        link.download = 'BROCHURE_ARIS-Concept.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="row bg-gradient-info-dark w-100 text-white mt-md-3 mt-sm-2 mx-0 mb-3 font-ramona">
            <br/>
            <div className="col-lg-10 col-md-11 mt-5 p-6 pb-5 offset-lg-1 offset-md-1 col-sm-12" >
                <h1 className="slideOutToRight font-ramona fs-2 p-sm-2">
                    <span style={{ color: '#D10D58' }}>ARIS </span> <span style={{ color: '#0e8de8' }}>CONCEPT</span> est une entreprise enregistrée au registre du commerce de Madagascar en 2022, née d'une véritable passion pour le traitement des données informatiques et la conception de solutions créatives pour les professionnels de divers secteurs. Ainsi, notre savoir-faire et nos compétences reposent sur des personnels engagés.
                </h1>
                {/*<p className="fs-5 p-3 m-0 me-2 preAnimation fst-italic font-consolas border bg-edit rounded-3">*/}
                {/*    {displayedText}*/}
                {/*</p>*/}
                <br/>
                {/*<div className="row mt-2">*/}
                    {/*<div className="col-lg-3 col-md-4 col-sm-6 fadeIn">*/}
                    {/*    */}
                    {/*</div>*/}
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id={`tooltip-${1}`}>
                            <div className="position-relative py-2">
                                <span className=" ">Télécharger notre BROCHURE</span>
                            </div>
                        </Tooltip>
                    }
                >
                    <button onClick={handleDownload} type="button" className="btn mt-3 btn-light btn-lg p-3 rounded-0">Notre Plaquette entreprise <i className="fa-solid fa-chevron-right ms-1"/></button>
                </OverlayTrigger>

                {/*</div>*/}
            </div>
        </div>
    );
};

export default InfoE;
