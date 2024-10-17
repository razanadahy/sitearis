import React from "react";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import Equipement from "../Component/NosAvantage/Equipement";
import InfoAvantage from "../Component/Head/InfoAvantage";
import AppelAvantage from "../Component/Body/AppelAvantage";

const NosAnvantage = () => {
    return(
        <>
            <HeaderContent active={5}/>
            <InfoAvantage/>
            <Equipement/>
            <AppelAvantage/>
            <AccueilFooter/>
        </>
    )
}

export default NosAnvantage