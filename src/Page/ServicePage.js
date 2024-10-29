import React, {useEffect} from 'react'
import InfoService from "../Component/Head/InfoService";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import AllService from "../Component/Body/AllService";

const ServicePage = () => {
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