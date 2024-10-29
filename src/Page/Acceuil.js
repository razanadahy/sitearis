import React from 'react'
import EntrepriseInfo from "../Component/Head/EntrepriseInfo";
import HeaderContent from "../Component/Head/HeaderContent";
import ServiceDetail from "../Component/Content/ServiceDetail";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import AppelAction from "../Component/Content/AppelAction";
import ListMetier from "../Component/Content/ListMetier";
import SolutionServicePage from "../Component/Accueil/SolutionServicePage";
import '../Component/Content/Service.css'

const Acceuil = () => {
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