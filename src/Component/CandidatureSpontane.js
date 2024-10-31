import React, {useState} from "react";
import {Button, Col, Form, InputGroup, Row, Spinner} from "react-bootstrap";
import CDSpontaneM from "../Model/CDSpontaneM.ts";
import {useMediaQuery} from "react-responsive";

const CandidatureSpontane = () => {

    const [load,setLoad]=useState(false)
    const [erreur,setErreur]=useState(false)
    const [nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [titre,setTitre]=useState('')
    const [telephone,setTel]=useState('')
    const [email,setEmail]=useState('')
    const [lm,setLm]=useState('')
    const [cv,setCv]=useState(null)

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            setValidated(false);
            setLoad(true)
            const candidat = new CDSpontaneM(-76, titre,nom, prenom, email, telephone,"", lm,cv);
            CDSpontaneM.sendCandidat(candidat).then((res)=>{
                if (res){
                    alert('Candidat envoyé avec succès!');
                }else{
                    alert('Verifier, il y a un problème! Le fichier est trop grand');
                }
            }).catch((er)=>{
                console.log(er)
            }).finally(()=>{
                setNom('')
                setPrenom('')
                setTitre('')
                setEmail('')
                setLm('')
                setTel('')
                setCv(null)
                setLoad(false)
            });
        }
    };
    const maxW=useMediaQuery({query: "(max-width: 602px)"})
    return (
        <>
            <div className={`row mt-2 mb-0 mx-0 ${maxW ? 'p-2' :'p-5'} bg-edit-2 bg-opacity-25`}>
                <div className="card border-0 m-auto">
                   <div className="row m-0 p-2">
                       <h3 className={`${maxW ? 'my-2' : 'pt-2'} text-center`}>
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
                                       value={nom}
                                       onChange={(e)=>setNom(e.target.value)}
                                   />
                               </Form.Group>
                               <Form.Group as={Col} lg="4" md="6" sm="12" className="mb-3">
                                   <Form.Label> Prénom *</Form.Label>
                                   <Form.Control
                                       required
                                       type="text"
                                       placeholder="Votre prénom"
                                       value={prenom}
                                       onChange={(e)=>setPrenom(e.target.value)}
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
                                           value={email}
                                           onChange={(e)=>setEmail(e.target.value)}
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
                                       value={telephone}
                                       onChange={(e)=>setTel(e.target.value)}
                                   />
                               </Form.Group>
                               <Form.Group as={Col} lg="6" md="6" sm="12" className="mb-3">
                                   <Form.Label> Titre du poste *</Form.Label>
                                   <Form.Control
                                       required
                                       type="text"
                                       placeholder="Entrez le titre de l'emploi"
                                       value={titre}
                                       onChange={(e)=>setTitre(e.target.value)}
                                   />
                               </Form.Group>
                               <Form.Group className="mb-3" as={Col} lg="12" md="6" sm="12">
                                   <Form.Label>CV * </Form.Label>
                                   <Form.Control
                                       type="file"
                                       required
                                       name="file"
                                       accept=".pdf, .jpg, .jpeg, .png, .gif"
                                       onChange={(e) => setCv(e.target.files[0])}
                                   />
                               </Form.Group>
                               <Form.Group className="mb-3 col-12" controlId="besoin">
                                   <Form.Label>Message *</Form.Label>
                                   <Form.Control value={lm} onChange={(e) => setLm(e.target.value)}  required as="textarea" aria-rowspan={3} placeholder="Lettre de motivation..." />
                               </Form.Group>
                           </Row>
                           <div className="row m-0 p-0 w-100">
                               <div className="col-md-6 ms-0 ps-0 d-md-block d-none">
                                   <Button className="w-100" variant="danger" type="reset">annuler</Button>
                               </div>
                               <div className="col-md-6 col-sm-12 p-0 m-0">
                                   <Button  className="w-100" type={`${load ? 'button' : 'submit'}`}>
                                       {load ? (<Spinner animation="border" size={"sm"} variant="secondary" />):("Envoyer")}
                                   </Button>
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