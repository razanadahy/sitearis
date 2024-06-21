import React, {useEffect, useRef, useState} from "react";
import {Button, Form, Spinner, Toast} from "react-bootstrap";
import DisplayLi from "./DisplayLi";
import Newsletter from "../Model/Newsletter.ts";

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
        {id:1, name: 'Images / Photos'},
        {id:2 , name: 'Vidéos'},
        {id:3 , name: 'Traitements de données'},
        {id:4 , name: 'Web et Marketing'},
        {id:5 , name: 'Comptabilité'},
        {id:6 , name: 'Externalisation administrative'},
        {id:7 , name: 'Autre'},
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

    return(
        <>
            <div className="row w-100 my-3 mx-0 p-0">
                <div className="card border-0">
                    <div className="row p-4">
                        <div className="col-lg-7 col-md-10 offset-md-1 offset-lg-0 col-sm-12 d-flex align-items-stretch mb-2">
                            <div ref={elementRef} className={`card h-100 border-0 mx-auto w-100 shadow ${isVisible ? 'showTop-70' : 'opacity-0'}`} style={{transform: 'translateY(-70px)'}}>
                                <div className="card-body">
                                    <Form noValidate validated={validated} className="row" onSubmit={(e)=>handleSubmit(e)} autoComplete={"off"}>
                                        <Form.Group className="mt-1 mb-2 col-lg-6 col-md-12" controlId="nom">
                                            <Form.Label>Nom *</Form.Label>
                                            <Form.Control required type="text" value={nom} onChange={(e)=>setNom(e.target.value)} placeholder="Enter votre nom" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-lg-6 col-md-12" controlId="mail">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control required type="email" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder="Entrer votre email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-lg-12" controlId="besoin">
                                            <Form.Label>Votre besoin *</Form.Label>
                                            <Form.Select required  onChange={(e)=>handleChange(e)}>
                                                {
                                                    elementOption.map(({id,name})=>(
                                                        <option className="p-2" key={id} value={id} >{name}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-lg-12" controlId="besoin">
                                            <Form.Label>Commentaire *</Form.Label>
                                            <Form.Control required as="textarea" value={comment} onChange={(e)=>setComment(e.target.value)} aria-rowspan={3} placeholder="A propos  de vos besoins..." />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-lg-12" >
                                            <Button variant="primary" className="w-100" type={`${loading ? 'button' : 'submit'}`}>
                                                {loading ? (<Spinner animation="border" variant="secondary" />):("Valider")}
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

                                        <DisplayLi color={'color-red'} icon={'fa-location-dot'} emplacement={0} title={'Lot II T 104 A Iavoloha, Antananarivo 102'}/>

                                        <DisplayLi color={'color-semi-purpule'} icon={'fa-phone'} emplacement={1} title={'+261 38 53 405 34'}/>
                                       
                                        <DisplayLi color={'color-cyan'} icon={'fa-envelope'} emplacement={2} title={'arisconcept.company@gmail.com'}/>
                                    </ul>
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