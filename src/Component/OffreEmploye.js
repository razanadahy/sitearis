import React, {useState} from "react";
import PostuleElement from "./PostuleElement";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";

const OffreEmploye = () => {
    const [modalShow, setModalShow] = useState(false);
    const infoClicked = (id) => {
        setShowPostule(false)
        setModalShow(true)
    }
    const [showPostule,setShowPostule]=useState(false)
    const postuleClicked = (id) => {
        setModalShow(false)
        setShowPostule(true)
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <div className="row m-0 p-4 w-100">
                <div className="card border-0 pt-3">
                    <div className="row m-0 p-0">
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-3">
                            <PostuleElement postuleClick={()=>postuleClicked(1)} infoClick={()=>infoClicked(1)} domaine={"programation"} titre={"Traitement d\'image"}/>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-3">
                            <PostuleElement postuleClick={()=>postuleClicked(2)} infoClick={()=>infoClicked(2)} domaine={"programation"} titre={"Traitement d\'image"}/>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-3">
                            <PostuleElement postuleClick={()=>postuleClicked(3)} infoClick={()=>infoClicked(3)} domaine={"programation"} titre={"Traitement d\'image"}/>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                fullscreen={"lg-down"}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="color-aris">
                        Programmation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row p-0 mt-0 mb-2 mx-0">
                        <h4 className="text-uppercase mb-2 color-concept">DESCRIPTION</h4>
                        <p className="fw-bolder">Nous cherchons un responsable RH</p>
                    </div>
                    <div className="row p-0 mt-0 mb-2 mx-0">
                        <h4 className="text-uppercase mb-2 color-concept">Profil recherché</h4>
                        <p className="fw-bolder">Expérience 3 ans minimum</p>
                    </div>
                    <div className="row p-0 mt-0 mb-2 mx-0">
                        <h4 className="text-uppercase mb-2 color-concept">Vos mission:</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>Concevoir, développer et déployer des sites e-commerce sur Magento (80%)</li>
                            <li className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>Participer à l'optimisation des performances et à l'amélioration continue des sites existants</li>
                            <li className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>Assurer la compatibilité multiplateforme et la réactivité des sites développés</li>
                            <li className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>An item</li>
                            <li className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>An item</li>
                        </ul>
                    </div>
                    <div className="row p-0 mt-0 mb-2 mx-0">
                        <h4 className="text-uppercase mb-2 color-concept">COMPÉTENCES TECHNIQUES :</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>Concevoir, développer et déployer des sites e-commerce sur Magento (80%)</li>
                            <li className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>Participer à l'optimisation des performances et à l'amélioration continue des sites existants</li>
                            <li className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>Assurer la compatibilité multiplateforme et la réactivité des sites développés</li>
                        </ul>
                    </div>
                    <div className="row p-0 mt-0 mb-2 mx-0">
                        <h4 className="text-uppercase mb-2 color-concept">QUALITÉS REQUISES :</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>Concevoir, développer et déployer des sites e-commerce sur Magento (80%)</li>
                            <li className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>Participer à l'optimisation des performances et à l'amélioration continue des sites existants</li>
                            <li className="list-group-item"><i className="fa-regular fa-circle-dot pe-2 color-aris"/>Assurer la compatibilité multiplateforme et la réactivité des sites développés</li>
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="row p-0 m-0 w-100">
                        <div className="col-6 p-2">
                            <Button variant="warning" onClick={()=>setModalShow(false)} className="w-100">Fermer</Button>
                        </div>
                        <div className="col-6 p-2">
                            <Button onClick={postuleClicked} className="w-100">Postuler</Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showPostule}
                onHide={() => setShowPostule(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                fullscreen={"lg-down"}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title className="color-aris">
                        Traitement d'image
                    </Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} autoComplete={"off"} onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Row>
                            <Form.Group className="mb-3" as={Col} lg="6" md="6" sm="12">
                                <Form.Label>Nom *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrez votre nom"
                                    autoFocus
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col} md="6" sm="12">
                                <Form.Label>Prénom *</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrez votre prénom"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col} md="6" sm="12" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Entrez votre email"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col} md="6" sm="12" >
                                <Form.Label>CV * </Form.Label>
                                <Form.Control
                                    type="file"
                                    accept=".pdf, .jpg, .jpeg, .png, .gif"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Message * </Form.Label>
                                <Form.Control as="textarea" placeholder="Lettre de motivation" rows={3} required />
                            </Form.Group>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="row p-0 m-0 w-100">
                            <div className="col-6 p-2">
                                <Button onClick={()=>setShowPostule(false)} variant="danger" className="w-100">Annuler</Button>
                            </div>
                            <div className="col-6 p-2">
                                <Button type="submit" className="w-100">Postuler</Button>
                            </div>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
export default OffreEmploye