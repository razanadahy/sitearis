import React, {useEffect} from "react";
import Header from "../Component/Header";
import {useLocation} from "react-router-dom";
import InfoPostule from "../Component/InfoPostule";
import Footer from "../Component/Footer";
import OffreEmploye from "../Component/OffreEmploye";

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
            <Header idActive={4}/>
            <InfoPostule/>
            <OffreEmploye/>
            <Footer/>
        </>
    )
}
export default PostulerPage