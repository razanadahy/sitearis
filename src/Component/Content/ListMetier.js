import React, {useMemo, useState} from "react";
import wave from "../../Asset/wave.svg";
import wave2 from "../../Asset/waveHead.svg";
import {Form} from "react-bootstrap";
import {JobData} from "../../Config/Job";
import {useNavigate, useParams} from "react-router-dom";
import Superposed from "../Accueil/Superposed";
import Pagination from "../Body/Pagination";

const ListMetier = () => {
    const navigate=useNavigate()
    const { lang } = useParams()
    const allJobDetails=useMemo(()=>{
        return JobData.flatMap(e =>
            e.children.map(child => ({
                ...child,
                parentId: e.id
            })))
    },[])
    const [active,setActive]=useState(1)
    const len=useMemo(()=>{
        const am=allJobDetails.length%18
        if(am===0){
            return allJobDetails.length/18
        }else{
            return Math.floor((allJobDetails.length/18)+1)
        }
    },[allJobDetails])
    return(
        <>
            <div className="m-0 p-0 w-100 position-relative d-flex border-0" style={{backgroundImage: `url('${wave}')`,backgroundSize: 'cover',backgroundPosition: 'center', width:'100%', minHeight: '100vh'}}>
                <img src={wave2} className="position-absolute w-100 m-0 p-0 top-0 z-0 border-0 " alt="..."/>
                <div className="p-3 z-1 mt-2 w-100">
                    <div className="mt-4 mb-4 w-100 p-2 d-flex justify-content-between align-items-center">
                        <h2 className="display-6 flex-grow-1 ms-5 fw-bold text-white slide-down ">Solutions clé en main pour votre entreprise</h2>
                    </div>
                    <div className="w-100 border-aris text-start p-0 m-0 d-flex justify-content-between align-items-center">
                        <h4 className="p-0 m-0 text-aris title pb-3 fw-bold">Notre ADN</h4>
                        <div className="w-25 h-100">
                            <Form.Control
                                type="search"
                                aria-describedby="searchBlock"
                                placeholder="Recherche un métier ou une activité "
                                autoComplete="off"
                                className=""
                                style={{ border: '1px solid blue'}}
                            />
                        </div>
                    </div>
                    <div className="mt-3 w-100">
                        <div className="row w-100 m-0 p-0">
                            <div className="col-4 position-relative d-flex justify-content-center align-items-center">
                                <Superposed/>
                            </div>

                            <div className="col-8">
                                <ul className="custom-list">
                                    {allJobDetails.slice((active-1)*18,(active*18)).map((jobDetail)=>(
                                        <li key={`${jobDetail.parentId}-${jobDetail.id}`} onClick={()=>navigate(`/${lang}/service/${jobDetail.parentId}/${jobDetail.id}`)} className="cursor-pointer"><span> <i className="far fa-dot-circle text-aris me-1"/>{jobDetail.title}</span></li>
                                    ))}
                                </ul>
                                <div className="w-100 p-2">
                                    <Pagination length={len} active={active} setActive={setActive}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="position-absolute bottom-0 w-100 start-0" viewBox="0 0 1440 320"><path fill="#d0d0d0" fillOpacity="0.2" d="M0,0L26.7,32C53.3,64,107,128,160,165.3C213.3,203,267,213,320,197.3C373.3,181,427,139,480,112C533.3,85,587,75,640,74.7C693.3,75,747,85,800,80C853.3,75,907,53,960,48C1013.3,43,1067,53,1120,48C1173.3,43,1227,21,1280,16C1333.3,11,1387,21,1413,26.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"/></svg>
            </div>
        </>
    )
}

export default ListMetier