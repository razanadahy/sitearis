import React, {useState} from "react";
import {Button, Form, Spinner} from "react-bootstrap";

const Devis = ({objectTitle}) => {
    const [loading, setLoading] = useState(false);
    return(
        <>
            <div className="card w-100 p-0 m-0">
                <div className="card-body border-0 p-0 m-0">
                    <div className="p-2">
                        <h5 className="text-center mt-3 display-6 text-concept">
                            Demander un devis gratuit ici.
                        </h5>
                    </div>
                    <Form noValidate className="row p-0 m-0" autoComplete={"off"}>
                        <Form.Group className="mt-1 mb-2 col-lg-12 col-md-12" controlId="nom">
                            <Form.Label className="fw-bold fs-5">Entreprise *</Form.Label>
                            <Form.Control required type="text"
                                // value={nom} onChange={(e)=>setNom(e.target.value)}
                                          placeholder="Enter le nom de votre entreprise" />
                        </Form.Group>
                        <Form.Group className="mt-1 mb-2 col-lg-12 col-md-12" controlId="nom">
                            <Form.Label className="fw-bold fs-5">Nom *</Form.Label>
                            <Form.Control required type="text"
                                // value={nom} onChange={(e)=>setNom(e.target.value)}
                                          placeholder="Enter votre nom" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12 col-md-12" controlId="mail">
                            <Form.Label className="fw-bold fs-5">Email *</Form.Label>
                            <Form.Control required type="email"
                                // value={mail} onChange={(e)=>setMail(e.target.value)}
                                          placeholder="Entrer votre email" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="besoin">
                            <Form.Label className="fw-bold fs-5">Portable *</Form.Label>
                            <Form.Control required type="text"
                                // value={mail} onChange={(e)=>setMail(e.target.value)}
                                          placeholder="Entrez votre tel" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="besoin">
                            <Form.Label className="fw-bold fs-5">Déscription *</Form.Label>
                            <Form.Control required as="textarea"
                                // value={comment} onChange={(e)=>setComment(e.target.value)}
                                          aria-rowspan={3}
                                          placeholder="A propos de vos besoins..." />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" >
                            <Button variant="primary" className="w-100 btn-content text-uppercase fw-bold espacement" type={`${loading ? 'button' : 'submit'}`}>
                                {loading ? (<Spinner animation="border" size="sm" variant="light" />):("Obtenir un devis gratuit")}
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Devis