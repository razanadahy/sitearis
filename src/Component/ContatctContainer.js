import React, {useEffect, useMemo, useRef, useState} from "react";
import {Button, Form, Spinner, Toast} from "react-bootstrap";
import Newsletter from "../Model/Newsletter.ts";
import Localisation from "./Contact/Localisation";
import {useMediaQuery} from "react-responsive";
import {FormInput, FormSelect, FormTextarea} from "./Contact/FormInput";

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

    const [elementOption,]=useState([
        {id:1, name: 'Informatique et traitement de données'},
        {id:2 , name: 'Ressources Humaines'},
        {id:3 , name: 'Externalisation administrative'},
        {id:4 , name: 'Web et Marketing'},
        {id:5 , name: 'Comptabilité'},
        {id:6 , name: 'Autre'},
    ])
    const[nom,setNom]=useState('')
    const [mail,setMail]=useState('')
    const [comment,setComment]=useState('')
    const [selectedOption,setSelected]=useState('')
    const handleChange = (event) => {
        const selectedId = event.target.value;
        const selectedOptionObj = elementOption.find(option => option.id === parseInt(selectedId,1));
        const selectedName = selectedOptionObj ? selectedOptionObj.name : '';
        setSelected(selectedName);
    };

    const[erreur,setErreur]=useState(false)
    const [showToast,setShowToast]=useState(false)
    const [loading,setLoading]=useState(false)
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        setLoading(true)
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false ) {
            event.stopPropagation();
            setLoading(false)
            setValidated(true);
        }else{
            setLoading(true)
            const option=selectedOption.trim().length===0 ? elementOption[0].name : selectedOption
            Newsletter.sendContactToAdmin(nom,mail,comment,option).then((res)=>{
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
                setComment('')
                setSelected('')
            })
        }
    }

    const [checked,setChecked]=useState(false)
    const minWidth=useMediaQuery({query: "(max-width:1000px)"})
    const heig= useMemo(() => {
        return minWidth ? '300px' : 'calc(100% - 70px)'
    }, [minWidth]);
    return(
        <>
            <div className="row w-100 my-3 mx-0 p-0">
                <div className="card border-0">
                    <div id="map" className={`row m-0 ${minWidth ? 'p-0' : 'p-2'}`}>
                        <div className={`${minWidth ? 'col-12 p-0 m-0' : 'col-7'} align-items-stretch`}>
                            <div ref={elementRef} className={`card p-0 h-100 border-0 mx-auto w-100 shadow ${isVisible ? 'showTop-70' : 'opacity-0'}`} style={{transform: 'translateY(-70px)'}}>
                                <div className="card-body">
                                    <div className="w-100 mb-3 text-center">
                                        <span className="display-6 text-concept">Formulaire de contact</span>
                                        <p className="fw-bold text-dark mt-1" style={{letterSpacing: '0.085rem'}}>
                                            Ce formulaire vous permet de nous transmettre vos informations afin que nous puissions vous recontacter dans les plus brefs délais.
                                        </p>
                                    </div>
                                    <Form noValidate validated={validated} className="row" onSubmit={(e)=>handleSubmit(e)} autoComplete={"off"}>
                                        <Form.Group as={"div"} className={`mt-2 mb-2 col-lg-6 col-md-12`}>
                                            <FormInput id="entreprise" placeholder={"Votre entreprise"} label="Entreprise *" />
                                        </Form.Group>
                                        <Form.Group as={"div"} className={`mt-2 mb-2 col-lg-6 col-md-12`}>
                                            <FormInput id="site" placeholder={"www.entreprise.com"} label="Site web de l'Entreprise *" />
                                        </Form.Group>
                                        <Form.Group as={"div"} className="mt-2 mb-2 col-lg-6 col-md-12">
                                            <FormInput id="nom" placeholder={"Votre nom"} label="Nom *" />
                                        </Form.Group>
                                        <Form.Group as={"div"} className="mb-3 mt-2 col-lg-6 col-md-12">
                                            <FormInput type={"email"} id={"mail"} label={"Adresse Email *"} placeholder={"Adresse Email"}/>
                                        </Form.Group>
                                        <Form.Group as={"div"} className="mt-2 mb-3 col-lg-12">
                                            <FormSelect id={'besoin'} label={'Domaine *'} onChange={(e)=>handleChange(e)}>
                                                {elementOption.map(({id,name})=>(
                                                    <option className="p-4" key={id} value={id} >{name}</option>
                                                ))}
                                            </FormSelect>
                                        </Form.Group>
                                        <Form.Group as={"div"} className="mb-3 mt-2 col-lg-12">
                                            <FormTextarea placeholder={'Parlez-nous de votre besoin'} id={'description'} label={'Déscription *'}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-lg-12" controlId="besoin">
                                            <Form.Check
                                                type='checkbox'
                                                id="validation"
                                                label="En cochant ceci, vous acceptez nos conditions générales et notre politique de confidentialité"
                                                checked={checked}
                                                onChange={()=>setChecked(prevState => !prevState)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-lg-12" >
                                            <Button variant="primary" size={"lg"} disabled={!checked} className="w-100 btn-content fw-bold" style={{letterSpacing: '0.085rem'}} type={`${loading ? 'button' : 'submit'}`}>
                                                {loading ? (<Spinner animation="border" size="sm" variant="secondary" />):("ENVOYER")}
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className={`${minWidth ? 'col-12 p-0 mx-0 mb-3' : 'col-5'} d-flex align-items-stretch mb-0`}>
                            <div className="card border-0 shadow-lg mx-auto w-100 z-0" style={{height: heig}}>
                                <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                                    <h4 className="color-dark-concept fw-bold section-title pt-2">Où nous sommes?</h4>
                                    <div className="mb-1">
                                        <pre className="m-0 fs-5">
                                            Lieu :<strong> Iavoloha, Antananarivo 102</strong>
                                        </pre>
                                    </div>
                                    <div className="mb-1">
                                        <pre className="m-0 fs-5">
                                            Mobile :<strong> +261 38 12 379 96</strong>
                                        </pre>
                                    </div>
                                    <div className="mb-1">
                                        <pre className="m-0 fs-5">
                                            Email :<strong> contact@aris-cc.com</strong>
                                        </pre>
                                    </div>
                                    <h4 className="color-dark-concept fw-bold mt-3 section-title" >Heures d'ouverture</h4>
                                    <div>
                                        <pre className="m-0 fs-5">Lun<i className="mx-2 fa fa-minus"/>Ven : <strong>7h:30</strong><i className="mx-2 fa fa-minus"/><strong>17h</strong></pre>
                                    </div>
                                    <div>
                                        <pre className="m-0 fs-5">Sam<i className="mx-2 fa fa-minus"/>Dim : Disponible en ligne</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 p-0 mx-0 d-flex align-items-stretch mb-2`}>
                            <div className="card border-0 mx-auto w-100 z-0" style={{height: '500px'}}>
                                <div className="card-body shadow-lg w-100 m-0 p-0">
                                    <Localisation/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Toast className={`position-fixed ${erreur ? 'bg-danger' : 'bg-success'} bottom-0 end-0`} show={showToast} onClose={()=>setShowToast(false)} delay={5000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Message</strong>
                    <small>Maintenant</small>
                </Toast.Header>
                <Toast.Body>
                    {erreur ? ('Il y a un problème de connexion') : ('Votre information a été bien envoyée auprès du responsable d\'Aris Concept')}
                </Toast.Body>
            </Toast>
        </>
    )
}
export default ContatctContainer