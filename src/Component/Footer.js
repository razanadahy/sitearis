import React from 'react'
import {Button, Form} from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <div className="row mx-0 mt-4 mb-0 p-2 w-100 bg-dark-blue">
                <div className="row p-0 mt-3 mb-0 mx-0">
                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 rounded-2 p-3 bg-mi-blue text-white" style={{transform: 'translateY(-50px)'}}>
                        <h2 className="text-center pb-3">Contactez-nous</h2>
                        <ul className="list-inline d-md-block d-sm-flex align-items-sm-center flex-sm-column">
                            <li className="list-inline-item p-2 rounded-2 d-flex align-items-center cursor-pointer">
                                <i className="fa-solid fa-location-dot fa-2x"/>
                                <span className="ms-2">Lot II T 104 A Iavoloha, Antananarivo 102</span>
                            </li>
                            <li className="list-inline-item p-2 rounded-2 d-flex align-items-center cursor-pointer">
                                <i className="fa-solid fa-phone fa-2x"/>
                                <h5 className="ms-2">+261 38 53 405 34</h5>
                            </li>
                            <li className="list-inline-item p-2 rounded-2 d-flex align-items-center cursor-pointer">
                                <i className="fa-solid fa-envelope fa-2x"/>
                                <h5 className="ms-2">arisconcept.company@gmail.com</h5>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                        <div className="container text-white">
                            <div className="row m-0 p-0 d-flex align-items-center">
                                <h3 className="ms-2 text-primary p-2">
                                    Newsletter
                                </h3>
                                <div className="row m-0 p-0">
                                    <div className="col-12 p-2" >
                                        Inscrivez-vous à notre newsletter et recevez par email les dernières tendances du digital.
                                    </div>
                                    <div className="col-lg-7 col-md-10 offset-md-1 col-sm-12">
                                        <Form>
                                            <Form.Group className="mt-1 mb-2" controlId="nom">
                                                <Form.Label>Nom *</Form.Label>
                                                <Form.Control type="text" placeholder="Enter votre nom" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="mail">
                                                <Form.Label>Email *</Form.Label>
                                                <Form.Control type="email" placeholder="Entrer votre email" />
                                            </Form.Group>

                                            <Button variant="warning" className="w-100" type="submit">
                                                Valider
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                                {/*<div className="row m-0 align-items-center">*/}
                                {/*    <div className="col-7 offset-1">*/}
                                {/*        <div className="input-group mb-3">*/}
                                {/*            <input type="mail" className="form-control" placeholder="xyz@gmail.com"*/}
                                {/*                   aria-label="Recipient's username" aria-describedby="basic-addon2"/>*/}
                                {/*            <button className="input-group-text btn btn-warning" id="basic-addon2">Inscription</button>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="text-center pb-1">
                    <hr className="border-dark-subtle"/>
                </div>
                <div className="m-0 p-0 w-100">
                    <div className="float-start text-light d-inline-flex">
                        <span className="p-2">© 2024 Aris Concept company</span>
                        <ul className="list-inline">
                            <li className="list-inline-item rounded-circle w-h-30 border d-inline-flex  justify-content-center align-items-center">
                                <a href="#" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-facebook-f"/>
                                </a>
                            </li>
                            {/*<li className="list-inline-item p-2 rounded-circle w-h-30 border d-inline-flex  justify-content-center align-items-center">
                                <a href="#" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-x-twitter"/>
                                </a>
                            </li>*/}
                            <li className="list-inline-item p-2 rounded-circle  w-h-30 border d-inline-flex  justify-content-center align-items-center">
                                <a href="#" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-linkedin-in"/>
                                </a>
                            </li>
                            {/*<li className="list-inline-item rounded-circle  w-h-30 border d-inline-flex  justify-content-center align-items-center">
                                <a href="#"  target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-instagram"/>
                                </a>
                            </li>*/}
                        </ul>
                    </div>
                    <div className="float-end text-light p-2">
                        <span> Tous droits réservés.</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer