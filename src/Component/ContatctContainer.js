import React, {useEffect, useRef, useState} from "react";
import {Button, Form} from "react-bootstrap";
import DisplayLi from "./DisplayLi";

const ContatctContainer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const top = elementRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight) {
                    setTimeout(() => {
                        setIsVisible(true);
                    },  350);
                }else{
                    setIsVisible(false)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <>
            <div className="row w-100 my-3 mx-0 p-0">
                <div className="card border-0">
                    <div className="row p-4">
                        <div className="col-lg-7 col-md-10 offset-md-1 offset-lg-0 col-sm-12 d-flex align-items-stretch mb-2">
                            <div ref={elementRef} className={`card h-100 border-0 mx-auto w-100 shadow ${isVisible ? 'showTop-70' : 'opacity-0'}`} style={{transform: 'translateY(-70px)'}}>
                                <div className="card-body">
                                    <Form className="row" autoComplete={"off"}>
                                        <Form.Group className="mt-1 mb-2 col-lg-6 col-md-12" controlId="nom">
                                            <Form.Label>Nom *</Form.Label>
                                            <Form.Control type="text" placeholder="Enter votre nom" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 col-lg-6 col-md-12" controlId="mail">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control type="email" placeholder="Entrer votre email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-lg-12" controlId="besoin">
                                            <Form.Label>Votre besoin *</Form.Label>
                                            <Form.Select>
                                                <option>Votre besoin concerne....</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-lg-12" controlId="besoin">
                                            <Form.Label>Commentaire *</Form.Label>
                                            <Form.Control as="textarea" aria-rowspan={3} placeholder="A propos  de vos besoins..." />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-lg-12" >
                                            <Button variant="primary" className="w-100" type="submit">
                                                Valider
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-10 offset-md-1 offset-lg-0 col-sm-12 d-flex align-items-stretch mb-2">
                            <div className="card h-100 border-0 mx-auto w-100">
                                <div className="card-body">
                                    <h4 className="text-uppercase text-center text-primary-emphasis">Notre adresse</h4>
                                    <ul className="list-inline d-md-block d-sm-flex align-items-sm-center flex-sm-column">

                                        <DisplayLi icon={'fa-location-dot'} emplacement={0} title={'Lot II T 104 A Iavoloha, Antananarivo 102'}/>

                                        <DisplayLi icon={'fa-phone'} emplacement={1} title={'+261 38 53 405 34'}/>
                                       
                                        <DisplayLi icon={'fa-envelope'} emplacement={2} title={'arisconcept.company@gmail.com'}/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContatctContainer