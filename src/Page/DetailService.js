import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {JobData as metier} from "../Config/Job";
import HeaderContent from "../Component/Head/HeaderContent";
import InfoService from "../Component/Head/InfoService";
import AllService from "../Component/Body/AllService";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import InfoDetailService from "../Component/Head/InfoDetailService";
import CompDetail from "../Component/DetailService/CompDetail";

const DetailService = () => {
    const navigate=useNavigate()
    const location = useLocation();
    const {domaine, service}=useParams()
    const [child,setChild]=useState(null);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [location]);
    useEffect(()=>{
        const search=metier.find((e)=>e.id===parseInt(domaine))
        if (search){
            const childrenFind=search.children.find((e)=>e.id===parseInt(service))
            if (childrenFind){
                setChild(childrenFind)
            }else{
                navigate('/notfound')
            }
        }else{
            navigate('/notfound')
        }
    },[domaine,service])
    return (
        <>
            {child && (
                <>
                    <HeaderContent active={2}/>
                    <InfoDetailService/>
                    <CompDetail element={child}/>
                    <AccueilFooter/>
                </>
            )}
        </>
    )
}

export default DetailService