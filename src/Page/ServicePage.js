import React, {useEffect} from 'react'
import InfoService from "../Component/Head/InfoService";
import {useLocation} from "react-router-dom";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import AllService from "../Component/Body/AllService";

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
            <HeaderContent active={2}/>
            <InfoService/>
            <AllService/>
            <AccueilFooter/>
        </>
    )
}

export default ServicePage