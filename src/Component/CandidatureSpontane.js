import React, {useState} from "react";
import {Button, Col, Form, InputGroup, Row, Spinner} from "react-bootstrap";
import CDSpontaneM from "../Model/CDSpontaneM.ts";
import {useMediaQuery} from "react-responsive";
import {useTranslation} from "react-i18next";

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

    const {t} = useTranslation()
    return (
        <>
            <div className={`row mt-2 mb-0 mx-0 ${maxW ? 'p-2' :'p-5'} bg-edit-2 bg-opacity-25`}>
                <div className="card border-0 m-auto">
                   <div className="row m-0 p-2">
                       <h3 className={`${maxW ? 'my-2' : 'pt-2'} text-center`}>
                           {t('formSp')}
                       </h3>
                       <Form className="p-md-3 p-sm-2 m-md-3" noValidate validated={validated} autoComplete={"off"} onSubmit={handleSubmit}>
                           <Row className="mb-3">
                               <Form.Group as={Col} lg="4" md="6" sm="12" className="mb-3">
                                   <Form.Label>{t('nom')}*</Form.Label>
                                   <Form.Control
                                       required
                                       type="text"
                                       placeholder={t('enterName')}
                                       value={nom}
                                       onChange={(e)=>setNom(e.target.value)}
                                   />
                               </Form.Group>
                               <Form.Group as={Col} lg="4" md="6" sm="12" className="mb-3">
                                   <Form.Label> {t('prenom')} *</Form.Label>
                                   <Form.Control
                                       required
                                       type="text"
                                       placeholder={t('plPre')}
                                       value={prenom}
                                       onChange={(e)=>setPrenom(e.target.value)}
                                   />
                               </Form.Group>
                               <Form.Group as={Col} lg="4" md="6" sm="12" className="mb-3">
                                   <Form.Label> Email * </Form.Label>
                                   <Form.Control
                                       type="email"
                                       placeholder={t('emailEnter')}
                                       aria-describedby="inputGroupPrepend"
                                       className="z-1"
                                       value={email}
                                       onChange={(e)=>setEmail(e.target.value)}
                                       required
                                   />
                               </Form.Group>
                               <Form.Group as={Col} lg="6" md="6" sm="12" className="mb-3">
                                   <Form.Label>{t('phone')}</Form.Label>
                                   <Form.Control
                                       required
                                       type="text"
                                       placeholder={t('yourTel')}
                                       value={telephone}
                                       onChange={(e)=>setTel(e.target.value)}
                                   />
                               </Form.Group>
                               <Form.Group as={Col} lg="6" md="6" sm="12" className="mb-3">
                                   <Form.Label>{t('titrePost')} *</Form.Label>
                                   <Form.Control
                                       required
                                       type="text"
                                       placeholder={t('titrePostC')}
                                       value={titre}
                                       onChange={(e)=>setTitre(e.target.value)}
                                   />
                               </Form.Group>
                               <Form.Group className="mb-3" as={Col} lg="12" md="6" sm="12">
                                   <Form.Label>{t('cv')} * </Form.Label>
                                   <Form.Control
                                       type="file"
                                       required
                                       name="file"
                                       accept=".pdf, .jpg, .jpeg, .png, .gif"
                                       onChange={(e) => setCv(e.target.files[0])}
                                   />
                                   {/*<div className="custom-file-input">*/}
                                   {/*    <input*/}
                                   {/*        type="file"*/}
                                   {/*        id="cv-upload"*/}
                                   {/*        required*/}
                                   {/*        name="file"*/}
                                   {/*        accept=".pdf, .jpg, .jpeg, .png, .gif"*/}
                                   {/*        // onChange={handleFileChange}*/}
                                   {/*        style={{ display: "none" }} // Cache l'élément input*/}
                                   {/*    />*/}
                                   {/*    <label htmlFor="cv-upload" className="btn btn-primary">*/}
                                   {/*        {cv ? cv.name : t("chooseFile")} /!* Texte dynamique *!/*/}
                                   {/*    </label>*/}
                                   {/*</div>*/}
                               </Form.Group>
                               <Form.Group className="mb-3 col-12" controlId="">
                                   <Form.Label>Message *</Form.Label>
                                   <Form.Control value={lm} onChange={(e) => setLm(e.target.value)}  required as="textarea" aria-rowspan={3} placeholder="Message" />
                               </Form.Group>
                           </Row>
                           <div className="row m-0 p-0 w-100">
                               <div className="col-md-6 ms-0 ps-0 d-md-block d-none">
                                   <Button className="w-100" variant="danger" type="reset" style={{letterSpacing: '0.065rem'}}>{t('annuler')}</Button>
                               </div>
                               <div className="col-md-6 col-sm-12 p-0 m-0">
                                   <Button  className="w-100" type={`${load ? 'button' : 'submit'}`} style={{letterSpacing: '0.065rem'}}>
                                       {load ? (<Spinner animation="border" size={"sm"} variant="secondary" />):(`${t('envoyer')}`)}
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