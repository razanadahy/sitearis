import React, {useEffect, useState} from "react";
import { useNavigate, useParams} from "react-router-dom";
import {JobData as metier} from "../Config/Job";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import InfoDetailService from "../Component/Head/InfoDetailService";
import CompDetail from "../Component/DetailService/CompDetail";

const DetailService = () => {
    const navigate=useNavigate()
    const {domaine, service}=useParams()
    const [child,setChild]=useState(null)
    const [parentChild,setParent]=useState(null)

    useEffect(()=>{
        const search=metier.find((e)=>e.id===parseInt(domaine))
        if (search){
            setParent(search)
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
            {child && parentChild && (
                <>
                    <HeaderContent active={2}/>
                    <InfoDetailService/>
                    <CompDetail parent={parentChild} element={child}/>
                    <AccueilFooter/>
                </>
            )}
        </>
    )
}

export default DetailService