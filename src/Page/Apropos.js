import React, {useEffect} from 'react'
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import {useLocation} from "react-router-dom";
import InfoApropos from "../Component/Head/InfoApropos";
import QuiSommeNous from "../Component/APropos/QuiSommeNous";
import NosEquipe from "../Component/APropos/NosEquipe";
import Aspiration from "../Component/APropos/Aspiration";
import NosValeur from "../Component/APropos/NosValeur";

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
            <NosEquipe/>
            <Aspiration/>
            <AccueilFooter/>
        </>
    )
}
export default Apropos