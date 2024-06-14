import React, { useState, useEffect } from 'react';
import logo from '../img/logoA.png';
import { Dropdown,Modal,Button } from 'react-bootstrap';
import {useMediaQuery} from "react-responsive";
import {DropDirection} from "react-bootstrap/DropdownContext";

const Header = () => {
    const [hasShadow, setHasShadow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHasShadow(true);
        } else {
            setHasShadow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showAcceuil, setShowAcceuil] = useState(false);

    const handleMouseEnter = () => setShowAcceuil(true);
    const handleMouseLeave = () => setShowAcceuil(false);

    const isMediumOrLarger = useMediaQuery({ query: '(min-width: 992px)' });


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {isMediumOrLarger ? (
                <div className={`bg-gradient-info-dark row mt-0 mx-0 mb-3 p-3 position-fixed top-0 z-3 w-100 text-center ${hasShadow ? 'shadow' : ''}`}>
                    <div className="col-2">
                        <div className="d-flex align-items-center slideOutToRight">
                            <img src={logo} alt="logo" className="logo-img img-fluid mx-3" />
                            <h4 className="mb-0">
                                <span style={{ color: '#D10D58' }}>Aris </span> <span style={{ color: '#0e8de8' }}>Concept</span>
                            </h4>
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="row">
                            <div className={`col-2 offset-1 align-middle slideInFromLeft`}>
                                <Dropdown
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    show={showAcceuil}>
                                    <Dropdown.Toggle
                                        as="button"
                                        id="dropdown-custom-components"
                                        className="btn text-white fs-5 active"
                                    >
                                        Acceuil
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#activity">Nos Domaines d'Activités</Dropdown.Item>
                                        <Dropdown.Item href="#moyen">Nos Moyens Materiels et Humais</Dropdown.Item>
                                        <Dropdown.Item href="#">Nos Solutions</Dropdown.Item>
                                        <Dropdown.Item href="#">Nos Perspectives et Objectifs</Dropdown.Item>
                                        <Dropdown.Item href="#">Nos Valeurs</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className={`col-2 slideInFromLeft`}>
                                <button type="button" className="btn text-white fs-5">Service</button>
                            </div>
                            <div className={`col-2 slideInFromLeft`}>
                                <button type="button" className="btn text-white fs-5">Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className={`col-1 slideInFromLeft d-flex align-items-end`}>
                        <button type="button" className="btn bg-mi-dark-blue text-white fs-5"><span className="p-2">Postuler</span></button>
                    </div>
                </div>
            ) : (
                <>
                    <div className={`bg-gradient-info-dark row mt-0 mx-0 mb-3 p-2 position-fixed top-0 z-3 w-100 text-center ${hasShadow ? 'shadow' : ''}`}>
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <div className="d-flex align-items-center mx-auto">
                                <img src={logo} alt="logo" className="logo-img img-fluid mx-3 " />
                                <h4 className="mb-0">
                                    <span style={{ color: '#D10D58' }}>Aris </span>
                                    <span style={{ color: '#0e8de8' }}>Concept</span>
                                </h4>
                            </div>
                            <button type="button" className={`btn text-white fs-5 border-0 ${show && 'd-none'}`} onClick={handleShow}>
                                <i className="fas fa-bars-staggered"/>
                            </button>
                        </div>
                    </div>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        className="opacity-100"
                        dialogClassName="w-100"
                        fullscreen={true}
                    >
                        <Modal.Header closeButton closeVariant={"white"} className="border-0 bg-black"/>
                        <Modal.Body className="bg-black">
                            <div className="row mt-4 mb-0 mx-0 p-0 ">
                                <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2">
                                    <ul className="list-inline d-flex justify-content-center flex-column">
                                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="a-label rounded-2 p-3 d-flex align-items-center justify-content-center text-center cursor-pointer mt-2">
                                            <Dropdown show={showAcceuil}>
                                                <Dropdown.Toggle
                                                    as="span"
                                                    id="dropdown-custom-components"
                                                    className="text-center w-100 fs-3">
                                                    Qui sommes-nous?
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu >
                                                    <Dropdown.Item href="#activity" className="p-3 fs-5">Nos Domaines d'Activités</Dropdown.Item>
                                                    <Dropdown.Item href="#moyen">Nos Moyens Materiels et Humais</Dropdown.Item>
                                                    <Dropdown.Item href="#">Nos Solutions</Dropdown.Item>
                                                    <Dropdown.Item href="#">Nos Perspectives et Objectifs</Dropdown.Item>
                                                    <Dropdown.Item href="#">Nos Valeurs</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                        <li className="a-label rounded-2 p-3 d-flex align-items-center cursor-pointer mt-2">
                                            <span className="text-center w-100 fs-3">Nos serivce?</span>
                                        </li>
                                        <li className="a-label rounded-2 p-3 d-flex align-items-center cursor-pointer mt-2">
                                            <span className="text-center w-100 fs-3">Contactez-nous!</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="bg-black">
                            <button type="button" className="w-100 btn btn-warning btn-lg text-white blinking-button">Postuler</button>
                        </Modal.Footer>
                    </Modal>
                    {/*<div className="m-auto">
                                <Dropdown
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    data-bs-theme="dark"
                                    show={showAcceuil}>
                                    <Dropdown.Toggle
                                        as="a"
                                        id="dropdown-custom-components"
                                        size="lg"
                                        className="fs-4 cursor-pointer a-label p-3"
                                    >
                                        Qui sommes-nous?
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="bg-body">
                                        <Dropdown.Item href="#activity">Nos Domaines d'Activités</Dropdown.Item>
                                        <Dropdown.Item href="#moyen">Nos Moyens Materiels et Humais</Dropdown.Item>
                                        <Dropdown.Item href="#">Nos Solutions</Dropdown.Item>
                                        <Dropdown.Item href="#">Nos Perspectives et Objectifs</Dropdown.Item>
                                        <Dropdown.Item href="#">Nos Valeurs</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    data-bs-theme="dark"
                                    show={showAcceuil}>
                                    <Dropdown.Toggle
                                        as="a"
                                        id="dropdown-custom-components"
                                        size="lg"
                                        className="fs-4 cursor-pointer a-label p-3 border"
                                    >
                                        Nos service?
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="bg-body">
                                        <Dropdown.Item href="#activity">Nos Domaines d'Activités</Dropdown.Item>
                                        <Dropdown.Item href="#moyen">Nos Moyens Materiels et Humais</Dropdown.Item>
                                        <Dropdown.Item href="#">Nos Solutions</Dropdown.Item>
                                        <Dropdown.Item href="#">Nos Perspectives et Objectifs</Dropdown.Item>
                                        <Dropdown.Item href="#">Nos Valeurs</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>*/}
                </>
            )}
        </>
    );
};

export default Header;
