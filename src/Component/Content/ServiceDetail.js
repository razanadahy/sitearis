import React from "react";
import wave from "../../Asset/bg.svg";
import wave2 from "../../Asset/wave (4).svg";
import compta from "../../Asset/comptable.png"
import web from "../../Asset/Informatique et Traitement de Données.png"
import rh from "../../Asset/ressources humaines.png"
import mark from "../../Asset/Web et Marketing.png"
import  ext from "../../Asset/Externalisation administrative.png"

const ServiceDetail= ()=>{
    return (
        <>
            <div className="m-0 p-0 w-100 position-relative d-flex" style={{backgroundImage: `url('${wave}')`,backgroundSize: 'cover',backgroundPosition: 'center', width:'100%', height: '100vh'}}>
                <img src={wave2} className="position-absolute w-100 m-0 p-0 top-0 z-0"  alt="..."/>

                <div className="row mx-0 mb-2 mt-5 p-3 w-100 z-1">
                    <div className="col-6 h-100 bg-danger bg-opacity-10" >
                        <img src={compta} className="card-img-top h-100"  alt="..."/>
                    </div>
                    <div className="col-6 h-100">
                        <div className="row m-0 p-1 w-100">
                            <div className="col-6 h-50">
                                <img src={compta} className="card-img-top"  alt="..."/>
                            </div>
                            <div className="col-6 h-50">
                                <img src={ext} className="card-img-top"  alt="..."/>
                            </div>
                            <div className="col-6 h-50">
                                <img src={web} className="card-img-top"  alt="..."/>
                            </div>
                            <div className="col-6 h-50">
                                <img src={rh} className="card-img-top"  alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServiceDetail