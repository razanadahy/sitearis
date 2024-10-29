import React from "react";
import InfoContact from "../Component/Head/InfoContact";
import ContatctContainer from "../Component/ContatctContainer";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";

const ContactPage = () => {
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