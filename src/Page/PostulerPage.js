import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import InfoPostule from "../Component/Head/InfoPostule";
import OffreEmploye from "../Component/OffreEmploye";
import CandidatureSpontane from "../Component/CandidatureSpontane";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";

const PostulerPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [location]);
    return (
        <>
            <HeaderContent active={6}/>
            <InfoPostule/>
            <OffreEmploye/>
            <CandidatureSpontane/>
            <AccueilFooter/>
        </>
    )
}
export default PostulerPage