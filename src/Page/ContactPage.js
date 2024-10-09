import React, {useEffect} from "react";
import InfoContact from "../Component/InfoContact";
import ContatctContainer from "../Component/ContatctContainer";
import {useLocation} from "react-router-dom";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";

const ContactPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [location]);
    return (
        <>
            <HeaderContent active={4}/>
            <InfoContact/>
            <ContatctContainer/>
            <AccueilFooter/>
        </>
    )
}
export default ContactPage