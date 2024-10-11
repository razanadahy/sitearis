import React from "react";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import Equipement from "../Component/NosAvantage/Equipement";
import ValeurDetail from "../Component/Content/ValeurDetail";

const NosAnvantage = () => {
    return(
        <>
            <HeaderContent active={5}/>
            <Equipement/>
            <ValeurDetail/>
            <AccueilFooter/>
        </>
    )
}

export default NosAnvantage