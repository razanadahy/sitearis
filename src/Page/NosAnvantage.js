import React from "react";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import Equipement from "../Component/NosAvantage/Equipement";
import InfoAvantage from "../Component/Head/InfoAvantage";

const NosAnvantage = () => {
    return(
        <>
            <HeaderContent active={5}/>
            <InfoAvantage/>
            <Equipement/>
            <AccueilFooter/>
        </>
    )
}

export default NosAnvantage