import React, {useCallback, useEffect, useMemo, useState} from "react";
import Devis from "../Body/Devis";
import {useParams} from "react-router-dom";
import Pagination from "../Body/Pagination";
import ShowModalDevis from "../Body/ShowModalDevis";

const CompDetail = ({element,parent}) => {
    const {lang}=useParams()
    const [idActive,setActive]=useState(1)
    const len= useMemo(() => {
        const valiny=parent?.children.length%5
        if (valiny===0){
            return parent?.children.length/5
        }
        return Math.floor(parent?.children.length/5)+1
    }, [parent]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setActive((prev)=>(prev>=len ? 1 : prev+1));
        }, 3700);

        return () => clearInterval(intervalId);
    }, [len]);

    const [clickModal,setClickModal]=useState(false)
    const setHideModal = useCallback((value) => {
        setClickModal(!value)
    },[])

    return(
        <>
            <div className=" w-100 row p-0 m-0">
                <div className="col-7">
                    <div className="border-aris text-start p-0 mx-3 my-0">
                        <h4 className="p-2 m-0 text-aris title pb-3 display-6"><i className="me-2 far fa-dot-circle fs-3"/>{element?.title}</h4>
                    </div>
                    <div className="mt-3 p-2 w-100">
                        <p className="fs-5">
                            {element?.description}
                        </p>
                        <span className="display-6 ms-4 color-cyan">
                            <i className="mx-3 fa fa-minus"/>Responsabilités principales :
                        </span>
                        <ul className="list-group list-group-flush mt-2">
                            {element?.resp.map((e, index) => {
                                const [beforeColon, afterColon] = e.split(':');
                                return (
                                    <li key={index} className="list-group-item d-flex align-items-center">
                                        <i className="me-3 fa fa-asterisk color-dark-concept"/>
                                        <span>
                                             <strong>{beforeColon}</strong>
                                            {afterColon && `: ${afterColon}`}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="w-100 d-flex justify-content-center mt-2">
                        <button onClick={()=>setHideModal(false)} className="btn-content px-4 py-2 fw-bold btn rounded-3 btn-info text-white " style={{letterSpacing: '0.07rem', fontSize: '1.2rem'}}>Contactez-nous pour simplifier votre {parent?.title}</button>
                    </div>
                </div>
                <div className="col-5 ps-0 pe-1 m-0 d-flex align-items-center">
                    <Devis objectTitle={parent?.title}/>
                </div>
                <div className="mt-3 w-100 d-inline-flex justify-content-evenly bg-dark-subtle py-4">
                    {parent?.children.slice((idActive - 1)*5,(idActive*5)).map((e)=>(
                        <div key={e.id} className="text-center flex-grow-1 w-20">
                            <a href={`/${lang}/service/${parent.id}/${e.id}`}>{e.title}</a>
                        </div>
                    ))}
                </div>
                <Pagination length={len} active={idActive} setActive={setActive}/>
            </div>
            <ShowModalDevis title={parent?.title} show={clickModal} onHide={()=>setHideModal(true)}/>
        </>
    )
}

export default CompDetail