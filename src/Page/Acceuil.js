import React, {useEffect} from 'react'
import EntrepriseInfo from "../Component/Head/EntrepriseInfo";
import HeaderContent from "../Component/Head/HeaderContent";
import ServiceDetail from "../Component/Content/ServiceDetail";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import AppelAction from "../Component/Content/AppelAction";
import {useLocation} from "react-router-dom";
import ListMetier from "../Component/Content/ListMetier";
import SolutionServicePage from "../Component/SolutionServicePage";
import '../Component/Content/Service.css'

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
            <HeaderContent active={1}/>
            <EntrepriseInfo/>
            <ListMetier/>
            <ServiceDetail/>
            <AppelAction/>
            <SolutionServicePage/>
            <AccueilFooter/>
        </>
    )
}
export default Acceuil