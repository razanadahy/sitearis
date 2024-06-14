import React from 'react'
import Header from "../Component/Header";
import InfoE from "../Component/InfoE";
import Activity from "../Component/Activity";
import Moyen from "../Component/Moyen";
import Offre from "../Component/Offre";
import Objectif from "../Component/Objectif";
import Valeur from "../Component/Valeur";
import Footer from "../Component/Footer";

const Acceuil = () => {
    return (
        <>
            <Header/>
            <InfoE/>
            <Activity/>
            <Moyen/>
            <Offre/>
            <Objectif/>
            <Valeur/>
            <Footer/>
        </>
    )
}
export default Acceuil