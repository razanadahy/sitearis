import React, {useCallback, useEffect, useState} from "react";
import {Button, Form, Spinner} from "react-bootstrap";
import MailSender from "../../Model/MailSender";
import Message from "../../Config/Message";
import {useTranslation} from "react-i18next";

const Devis = ({objectTitle,setModalVisible}) => {
    const {t}=useTranslation()
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(false);
    const [phoneNumber,setPhoneNumber]=useState('+ ')
    const inputPhone=useCallback(
        (e) => {
            const numericValue = e.replace(/\D/g, "");
            let formattedPhone = numericValue;
            if (numericValue.length > 3 && numericValue.length <= 6) {
                formattedPhone = `${numericValue.slice(0, 3)} ${numericValue.slice(3)}`;
            } else if (numericValue.length > 6) {
                formattedPhone = `${numericValue.slice(0, 3)} ${numericValue.slice(3, 6)} ${numericValue.slice(6)}`;
            }
            setPhoneNumber(`+ ${formattedPhone}`)
        },
        [],
    );
    const [entreprise, setEntreprise] = useState('');
    const [nom, setNom] = useState('');
    const [mail, setMail] = useState('');
    const [description, setDescription] = useState('');
    const [phP, setPhP] = useState(false);
    const [pMail, setPMail] = useState(false);
    useEffect(()=>{
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) && mail !=="") {
            setPMail(true);
        }else{
            setPMail(false)
        }
    },[mail])
    useEffect(()=>{
        if ( phoneNumber.length>2 && phoneNumber.length<9) {
            setPhP(true);
        }else{
            setPhP(false)
        }
    },[phoneNumber])
    const [erreur, setErreur] = useState(false);
    const [showResponse, setShowResponse] = useState(false);
    const submit=useCallback(
        (e) => {
            setPhP(false)
            e.preventDefault()
            const form = e.currentTarget;
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
                setPMail(true);
                setValid(false);
            }else if(phoneNumber.length<9){
                setPhP(true)
                setValid(false);
            } else if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
                setValid(true);
            }
            else {
                setLoading(true)
                MailSender.devi(entreprise,nom,mail,phoneNumber,description,objectTitle).then(res=>{
                    if (res){
                        setErreur(false)
                        setShowResponse(true)
                    }
                }).catch((e)=>{
                    setErreur(true)
                    setShowResponse(true)
                }).finally(()=> {
                    setLoading(false)
                    if (setModalVisible !==null){
                        setModalVisible()
                    }
                })
            }

        },
        [entreprise,nom,mail,description,phoneNumber,phP],
    );


    return(
        <>
            <div className="card w-100 p-0 m-0">
                <div className="card-body border-0 p-0 m-0">
                    <div className="p-2">
                        <h5 className="text-center mt-3 display-6 text-concept">
                            {t('demandeDevis')}
                        </h5>
                    </div>
                    <Form noValidate validated={valid} className="row p-0 m-0" autoComplete={"off"} onSubmit={submit}>
                        <Form.Group className="mt-1 mb-2 col-lg-12 col-md-12" controlId="entreprise">
                            <Form.Label className="fw-bold fs-5">{t('entreprise')} *</Form.Label>
                            <Form.Control required type="text" autoFocus
                                value={entreprise} onChange={(e)=>setEntreprise(e.target.value)}
                                          placeholder={t('companyName')}
                            />
                        </Form.Group>
                        <Form.Group className="mt-1 mb-2 col-lg-12 col-md-12" controlId="nom">
                            <Form.Label className="fw-bold fs-5">{t('nom')} *</Form.Label>
                            <Form.Control required type="text"
                                value={nom} onChange={(e)=>setNom(e.target.value)}
                                          placeholder={t('enterName')} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12 col-md-12" controlId="mail">
                            <Form.Label className="fw-bold fs-5">Email *</Form.Label>
                            <Form.Control required type="email"
                                value={mail} onChange={(e)=>setMail(e.target.value)}
                                          placeholder={t('emailEnter')} isInvalid={pMail}/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="besoin">
                            <Form.Label className="fw-bold fs-5">{t('phone')} *</Form.Label>
                            <Form.Control required type="text"
                                value={phoneNumber} onChange={(e)=>inputPhone(e.target.value)}
                                          placeholder={t('yourTel')} isInvalid={phP}/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" controlId="description">
                            <Form.Label className="fw-bold fs-5">{t('desc')} *</Form.Label>
                            <Form.Control required as="textarea"
                                value={description} onChange={(e)=>setDescription(e.target.value)}
                                          aria-rowspan={3}
                                          placeholder={t('bes')} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-12" >
                            <Button variant="primary" className="w-100 btn-content text-uppercase fw-bold espacement" type={`${loading ? 'button' : 'submit'}`}>
                                {loading ? (<Spinner animation="border" size="sm" variant="light" />):(t('envoyer'))}
                            </Button>
                        </Form.Group>
                    </Form>                </div>
            </div>
            <Message erreur={erreur} showResponse={showResponse} setShowResponse={setShowResponse}/>
        </>
    )
}

export default Devis