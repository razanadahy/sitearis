import React, {useState} from 'react'
import {Button, Form, Spinner, Toast} from "react-bootstrap";
import Newsletter from "../Model/Newsletter.ts";

const Footer = () => {
    const [nom,setNom]=useState('')
    const [mail,setMail]=useState('')
    const [showToast,setShowToast]=useState(false)
    const [erreur,setErreur]=useState(false)
    const [loading,setLoading]=useState(false)

    const [validated, setValidated] = useState(false);
    const sendNewsletter = (event) => {
        setLoading(true)
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false ) {
            event.stopPropagation();
            setValidated(true);
            setLoading(false)
        } else{
            setLoading(true)
            Newsletter.sendDataToAdmin(nom,mail).then((res)=>{
                setErreur(!res)
                setShowToast(true)

            }).catch(()=>{
                setErreur(true)
                setShowToast(true)
            }).finally(()=>{
                setValidated(false);
                setLoading(false)
                setNom('')
                setMail('')
            })
        }
    }
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
                                        <Form noValidate validated={validated} autoComplete={"off"} onSubmit={(event)=>sendNewsletter(event)}>
                                            <Form.Group className="mt-1 mb-2" controlId="nom">
                                                <Form.Label>Nom *</Form.Label>
                                                <Form.Control required type="text" value={nom} onChange={(event)=>setNom(event.target.value)} placeholder="Enter votre nom" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="mail">
                                                <Form.Label>Email *</Form.Label>
                                                <Form.Control required type="email" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder="Entrer votre email" />
                                            </Form.Group>

                                            <Button variant="warning" className="w-100" type={`${loading ? 'button' : 'submit'}`}>
                                                {loading ? (<Spinner animation="border" size={"sm"} variant="secondary" />):("Valider")}
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
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
                                <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-facebook-f"/>
                                </a>
                            </li>
                            <li className="list-inline-item p-2 rounded-circle  w-h-30 border d-inline-flex  justify-content-center align-items-center">
                                <a href="https://www.linkedin.com/in/aris-concept-567703240" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-linkedin-in"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="float-end text-light p-2">
                        <span> Tous droits réservés.</span>
                    </div>
                </div>
            </div>
            <Toast className={`position-fixed ${erreur ? 'bg-danger' : 'bg-success'} bottom-0 end-0`} show={showToast} onClose={()=>setShowToast(false)} delay={5000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Message</strong>
                    <small>Maintenant</small>
                </Toast.Header>
                <Toast.Body>
                    {erreur ? ('Il y a un problème de connexion') : ('Votre information a été envoyée avec succès')}
                </Toast.Body>
            </Toast>
        </>
    )
}
export default Footer