import React, {useEffect} from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import InfoContact from "../Component/InfoContact";
import ContatctContainer from "../Component/ContatctContainer";
import {useLocation} from "react-router-dom";

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
            <Header idActive={3}/>
            <InfoContact/>
            <ContatctContainer/>
            <Footer/>
        </>
    )
}
export default ContactPage