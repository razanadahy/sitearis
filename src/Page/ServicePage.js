import React, {useEffect} from 'react'
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import InfoService from "../Component/InfoService";
import Infotraitement from "../Component/Infotraitement";
import SolutionServicePage from "../Component/SolutionServicePage";
import Difference from "../Component/Difference";
import {useLocation} from "react-router-dom";

const ServicePage = () => {
    const location = useLocation();

    useEffect(() => {
        const anchor = location.hash.substring(1);
        if (anchor) {
            const element = document.getElementById(anchor);
            if (element) {
                const headerOffset = document.querySelector('#header')?.offsetHeight || 0;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [location]);
    return(
        <>
            <Header idActive={2}/>
            <InfoService/>
            <Infotraitement/>
            <SolutionServicePage/>
            <Difference/>
            <Footer/>
        </>
    )
}

export default ServicePage