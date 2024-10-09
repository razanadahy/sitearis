import React from "react";
import infoE from '../../Asset/info.mp4'
import './EntrepriseInfo.css'
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import logo from "../../Asset/icon.png";
import {useTranslation} from "react-i18next";


const EntrepriseInfo= ()=>{
    const { t, i18n } = useTranslation();
    return (
        <>
            <header className="header">
                <video className="header-video" autoPlay muted loop>
                    <source src={infoE} type="video/mp4" />
                    Votre navigateur ne supporte pas la video
                </video>
                <div className="video-overlay"/>
                <svg xmlns="http://www.w3.org/2000/svg" className="position-absolute bottom-0 w-100 start-0" viewBox="0 0 1440 320">
                    <path fill="#0e8de8" fillOpacity="0.2" d="M0,0L26.7,32C53.3,64,107,128,160,165.3C213.3,203,267,213,320,197.3C373.3,181,427,139,480,112C533.3,85,587,75,640,74.7C693.3,75,747,85,800,80C853.3,75,907,53,960,48C1013.3,43,1067,53,1120,48C1173.3,43,1227,21,1280,16C1333.3,11,1387,21,1413,26.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"/></svg>
                <div className="w-100 p-3 position-relative d-flex justify-content-center">
                    <img src={logo} alt="logo" className="logo-img img-fluid"/>
                </div>
                <div className="header-content p-0">
                    <div className="row w-100 m-0 p-0 text-white">
                        <div className="text-center" >
                            <h1 className="slideOutToRight p-0 m-0 font-ramona fs-2 p-sm-2">
                                <strong className="fs-1" style={{ color: '#D10D58' }}>ARIS </strong> <strong className="fs-1" style={{ color: '#0e8de8' }}>CONCEPT</strong>
                                <br/>
                                <br/>
                                <span className="fw-bold ">
                                     {t('txtHead')}
                                </span>
                                <br/>
                                <br/>
                                {t('serv')}
                            </h1>
                        </div>
                    </div>
                </div>
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id={`tooltip-${1}`}>
                            <div className="position-relative py-2">
                                <span className=" ">{t('dBr')}</span>
                            </div>
                        </Tooltip>
                    }
                >
                    <div className="position-absolute d-flex z-2 justify-content-center w-100 bottom-0">
                        <button onClick={null} type="button" className="btn mb-4 btn-style btn-lg p-4 rounded-4"  style={{ transition: 'background-color 700ms ease-in-out' }}>{t('brochure')}<i className="fa-solid fa-chevron-right ms-2"/></button>
                    </div>
                </OverlayTrigger>
            </header>
        </>
    )
}
export default EntrepriseInfo