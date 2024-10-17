import React, {useEffect} from 'react'
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import {useLocation} from "react-router-dom";
import InfoApropos from "../Component/Head/InfoApropos";
import QuiSommeNous from "../Component/APropos/QuiSommeNous";
import NosEquipe from "../Component/APropos/NosEquipe";
import NosValeur from "../Component/APropos/NosValeur";
import AppelAvantage from "../Component/Body/AppelAvantage";

const Apropos = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [location]);

    return (
        <>
            <HeaderContent active={3}/>
            <InfoApropos/>
            <QuiSommeNous/>
            <NosValeur/>
            <AppelAvantage/>
            <NosEquipe/>
            <AccueilFooter/>
        </>
    )
}
export default Apropos