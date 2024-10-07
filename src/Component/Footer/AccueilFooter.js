import React, {useCallback} from "react";
import IconFooter from "./IconFooter";
import waveFooter from "../../Asset/bg-footer.svg";
import logo from "../../Asset/icon.png";

const AccueilFooter = () => {
    const handleClick = useCallback((e) => {
        e.preventDefault();
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${'contact@aris-cc.com'}`;
        window.open(mailtoUrl, '_blank');
    },[])
    return (
        <>
            <IconFooter/>
            <div className="mt-5 p-0 w-100 bg-dark-blue text-white small">
                <div className="row w-100 mx-0 mt-2 mb-0 pt-4 px-3 border-bottom">
                    <div className="col-6">
                        <div className="w-100 d-inline-flex align-items-center ">
                            <img src={logo} alt="logo" className="img-fluid me-3" width={40}/>
                            <h4 className="mb-0 fs-2 fw-bold">
                                <strong style={{ color: '#D10D58' }}>Aris </strong> <strong style={{ color: '#0e8de8' }}>Concept</strong>
                            </h4>
                        </div>
                        <div className="my-3 w-100 text-center" >
                            <p className="" style={{fontSize: '0.875rem', lineHeight: '1.35rem'}}>
                                Nous visons à créer des opportunités d'emploi pour les jeunes motivés, en leur permettant de développer
                                leurs compétences aux côtés de professionnels expérimentés dans leur domaine.
                            </p>
                        </div>
                        <div className="w-100 mt-3">
                            <span className="fs-5 fw-bolder text-uppercase text-aris">Nous Contacter</span>
                            <div className=" w-100 mt-2 p-2 d-flex justify-content-between">
                                <div className="d-inline-flex text-jaune fw-bold">
                                    <span className="icon me-1">+</span>
                                    <span className="fw-bolder txt-at">Par ici</span>
                                </div>
                                <div>
                                    <span className="link-primary fw-bold">Iavoloha, Antananarivo 102</span>
                                </div>
                                <div>
                                    <a  href="https://wa.me/+261385340534" target="_blank" rel="noopener noreferrer" className="ms-2 email-link link-primary">+261 38 53 405 34</a>
                                </div>
                                <div>
                                    <a  href={`mailto:${'contact@aris-cc.com'}`} onClick={handleClick} className="ms-2 email-link link-primary">contact@aris-cc.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 ">
                            LinkDIN
                        </div>
                    </div>
                    <div className="col-3 px-3">
                        <h4 className="fs-3 mb-3 ps-4">Service</h4>
                        <ul className="list-group list-group-flush bg-transparent">
                            <li className="list-group-item bg-transparent text-white d-inline-flex justify-content-between border-0">
                                <span className="fw-bolder p-0 m-0">Informatique et traitement de données</span>
                            </li>
                            <li className="list-group-item bg-transparent text-white border-0"><span className="fw-bolder p-0 m-0">Web et Marketing</span></li>
                            <li className="list-group-item bg-transparent text-white border-0"><span className="fw-bolder p-0 m-0">Comptabilité</span></li>
                            <li className="list-group-item bg-transparent text-white border-0"><span className="fw-bolder p-0 m-0">Externalisation administrative</span></li>
                            <li className="list-group-item bg-transparent text-white mb-2 border-0"><span className="fw-bolder p-0 m-0">Ressources Humaines</span></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h4 className="ms-2 mb-3 text-primary">
                            Newsletter
                        </h4>
                        <div className="">
                            Inscrivez-vous à notre newsletter et recevez par email les dernières tendances du digital.

                            <div className="email-container border-bottom mt-2 w-100 d-inline-flex justify-content-between py-2 px-1 align-items-center">
                                <label className="email-label" htmlFor="email">
                                    e-mail
                                </label>
                                <input type="email" id="email" className="email-input" />
                                <span className="email-arrow">
                                    <i className="fa-solid fa-arrow-right-long"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-0 p-2 w-100 d-inline-flex justify-content-between">
                    <div className=" text-light d-inline-flex">
                        <span className="pb-1">© 2024 Aris Concept company - Mentions légales - Politique de confidentialité</span>
                    </div>
                    <div className=" text-light pb-1">
                        <span> Tous droits réservés.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccueilFooter