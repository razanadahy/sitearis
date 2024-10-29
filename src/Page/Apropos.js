import React from 'react'
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import InfoApropos from "../Component/Head/InfoApropos";
import QuiSommeNous from "../Component/APropos/QuiSommeNous";
import NosEquipe from "../Component/APropos/NosEquipe";
import NosValeur from "../Component/APropos/NosValeur";
import AppelAvantage from "../Component/Body/AppelAvantage";

const Apropos = () => {
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