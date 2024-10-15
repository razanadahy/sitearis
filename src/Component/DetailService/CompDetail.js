import React, {useState} from "react";
import {Button, Form, Spinner} from "react-bootstrap";

const CompDetail = ({element}) => {
    const [loading, setLoading] = useState(false);
    return(
        <>
            <div className=" w-100 row p-0 m-0">
                <div className="col-7">
                    <div className="border-aris text-start p-0 mx-3 my-0">
                        <h4 className="p-2 m-0 text-aris title pb-3 display-6"><i className="me-2 far fa-dot-circle fs-3"/>{element?.title}</h4>
                    </div>
                    <div className="mt-3 p-2 w-100">
                        <p className="fs-5">
                            {element?.description}
                        </p>
                        <span className="display-6 ms-4 color-cyan">
                            <i className="mx-3 fa fa-minus"/>Responsabilités principales :
                        </span>
                        <ul className="list-group list-group-flush mt-2">
                            {element?.resp.map((e, index) => {
                                const [beforeColon, afterColon] = e.split(':');
                                return (
                                    <li key={index} className="list-group-item d-flex align-items-center">
                                        <i className="me-3 fa fa-asterisk color-dark-concept"/>
                                        <span>
                                             <strong>{beforeColon}</strong>
                                            {afterColon && `: ${afterColon}`}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="col-5 ps-0 pe-1 m-0 d-flex align-items-center">
                    <div className="card w-100 p-0 m-0">
                        <div className="card-body border-0 p-0 m-0">
                            <div className="p-2">
                                <h5 className="text-center mt-3 display-6 text-concept">
                                    Envie d'externaliser ?
                                </h5>
                                <p>
                                    Demander un devis gratuit ici.
                                </p>
                            </div>
                            <Form noValidate className="row p-0 m-0" autoComplete={"off"}>
                                <Form.Group className="mt-1 mb-2 col-lg-12 col-md-12" controlId="nom">
                                    <Form.Label className="fw-bold fs-4">Entreprise *</Form.Label>
                                    <Form.Control required type="text"
                                        // value={nom} onChange={(e)=>setNom(e.target.value)}
                                                  placeholder="Enter le nom de votre entreprise" />
                                </Form.Group>
                                <Form.Group className="mt-1 mb-2 col-lg-12 col-md-12" controlId="nom">
                                    <Form.Label className="fw-bold fs-4">Nom *</Form.Label>
                                    <Form.Control required type="text"
                                                  // value={nom} onChange={(e)=>setNom(e.target.value)}
                                                  placeholder="Enter votre nom" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-12 col-md-12" controlId="mail">
                                    <Form.Label className="fw-bold fs-4">Email *</Form.Label>
                                    <Form.Control required type="email"
                                                  // value={mail} onChange={(e)=>setMail(e.target.value)}
                                                  placeholder="Entrer votre email" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-12" controlId="besoin">
                                    <Form.Label className="fw-bold fs-5">Portable *</Form.Label>
                                    <Form.Control required type="text"
                                                  size={"lg"}
                                        // value={mail} onChange={(e)=>setMail(e.target.value)}
                                                  placeholder="Entrez votre tel" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-12" controlId="besoin">
                                    <Form.Label className="fw-bold fs-4">Déscription *</Form.Label>
                                    <Form.Control required as="textarea"
                                                  size={"lg"}
                                                  // value={comment} onChange={(e)=>setComment(e.target.value)}
                                                  aria-rowspan={3}
                                                  placeholder="A propos  de vos besoins..." />
                                </Form.Group>
                                <Form.Group className="mb-2 col-lg-12" >
                                    <Button variant="primary" className="w-100" type={`${loading ? 'button' : 'submit'}`}>
                                        {loading ? (<Spinner animation="border" size="sm" variant="secondary" />):("Valider")}
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="w-100 mt-2 bg-danger p-5">

                </div>
            </div>
        </>
    )
}

export default CompDetail