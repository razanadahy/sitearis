import React, {useEffect} from 'react'
import Header from "../Component/Header";
import InfoE from "../Component/InfoE";
import Activity from "../Component/Activity";
import Moyen from "../Component/Moyen";
import Offre from "../Component/Offre";
import Objectif from "../Component/Objectif";
import Valeur from "../Component/Valeur";
import Footer from "../Component/Footer";
import {useLocation} from "react-router-dom";

const Acceuil = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [location]);

    return (
        <>
            <Header idActive={1}/>
            <InfoE/>
            <div id="activity"><Activity/></div>
            <div id="moyen"><Moyen/></div>
            <div id="collaboration"><Offre/></div>
            <div id="aspiration"><Objectif/></div>
            <div id="valeur"><Valeur/></div>
            <Footer/>
        </>
    )
}
export default Acceuil