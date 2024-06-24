import React, {useState} from "react";
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";

const CandidatureSpontane = () => {
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
            <div className="row my-3 mx-0 p-5 bg-edit-2 bg-opacity-25">
                <div className="card border-0 m-auto">
                   <div className="row m-md-4 m-sm-0 p-0">
                       <h3 className="mb-3">
                           Formulaire pour la candidature spontanée
                       </h3>
                       <Form className="p-md-3 p-sm-2 m-md-3" noValidate validated={validated} autoComplete={"off"} onSubmit={handleSubmit}>
                           <Row className="mb-3">
                               <Form.Group as={Col} lg="4" md="6" sm="12" className="mb-3">
                                   <Form.Label>Nom * </Form.Label>
                                   <Form.Control
                                       required
                                       type="text"
                                       placeholder="Votre nom"
                                   />
                               </Form.Group>
                               <Form.Group as={Col} lg="4" md="6" sm="12" className="mb-3">
                                   <Form.Label> Prénom *</Form.Label>
                                   <Form.Control
                                       required
                                       type="text"
                                       placeholder="Votre prénom"
                                   />
                               </Form.Group>
                               <Form.Group as={Col} lg="4" md="6" sm="12" className="mb-3">
                                   <Form.Label> Email * </Form.Label>
                                   <InputGroup hasValidation>
                                       <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                       <Form.Control
                                           type="email"
                                           placeholder="Votre email"
                                           aria-describedby="inputGroupPrepend"
                                           className="z-1"
                                           required
                                       />
                                   </InputGroup>
                               </Form.Group>
                               <Form.Group as={Col} lg="6" md="6" sm="12" className="mb-3">
                                   <Form.Label> Telephone *</Form.Label>
                                   <Form.Control
                                       required
                                       type="text"
                                       placeholder="Entrez votre numéro téléphone"
                                   />
                               </Form.Group>
                               <Form.Group as={Col} lg="6" md="6" sm="12" className="mb-3">
                                   <Form.Label> Titre du poste *</Form.Label>
                                   <Form.Control
                                       required
                                       type="text"
                                       placeholder="Entrez le titre de l'emploi"
                                   />
                               </Form.Group>
                               <Form.Group className="mb-3" as={Col} lg="12" md="6" sm="12">
                                   <Form.Label>CV * </Form.Label>
                                   <Form.Control
                                       type="file"
                                       required
                                       name="file"
                                       accept=".pdf, .jpg, .jpeg, .png, .gif"
                                   />
                               </Form.Group>
                               <Form.Group className="mb-3 col-12" controlId="besoin">
                                   <Form.Label>Message *</Form.Label>
                                   <Form.Control required as="textarea" aria-rowspan={3} placeholder="Lettre de motivation..." />
                               </Form.Group>
                           </Row>
                           <div className="row m-0 p-0 w-100">
                               <div className="col-md-6 d-md-block d-none">
                                   <Button className="w-100" variant="danger" type="reset">annuler</Button>
                               </div>
                               <div className="col-md-6 col-sm-12">
                                   <Button className="w-100" type="submit">Valider</Button>
                               </div>
                           </div>
                       </Form>
                   </div>
                </div>
            </div>
        </>
    )
}
export default CandidatureSpontane