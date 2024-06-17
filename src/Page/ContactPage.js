import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import InfoContact from "../Component/InfoContact";
import ContatctContainer from "../Component/ContatctContainer";

const ContactPage = () => {
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