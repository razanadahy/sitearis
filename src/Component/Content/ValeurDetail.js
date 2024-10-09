import React from "react";
import wave from '../../Asset/wave.svg'
import wave2 from '../../Asset/waveHead.svg'
import './Service.css'
import {useTranslation} from "react-i18next";
const ValeurDetail =()=>{
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="m-0 p-0 w-100 position-relative d-flex bg-dark bg-opacity-10 border-0" style={{backgroundImage: `url('${wave}')`,backgroundSize: 'cover',backgroundPosition: 'center', width:'100%', minHeight: '100vh'}}>
                <img src={wave2} className="position-absolute w-100 m-0 p-0 top-0 z-0 border-0 " alt="..."/>
                <div className="p-3 z-1 mt-5 w-100">
                    <h2 className="fs-1 mt-4 mb-4 ms-5 fw-bold text-white p-2 slide-down ">{t('headText')}</h2>
                    <div className="row w-100 mt-0 mx-0 mb-4 p-0">
                        <div className="col-4 mb-3">
                            <div className={`h-100 w-100 rounded-4 border-box mx-auto`}>
                                <div className="card-body">
                                    <div className="mt-4 mb-3 w-100 d-inline-flex justify-content-center">
                                        <h3 className="text-center text-primary fw-bold"><i className="fas fa-bullseye fa-2xl me-3"/>{t('solC')}</h3>
                                    </div>
                                    <div className="w-100">
                                        <p className="m-0 p-0 text-dark">{t('textSolC')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-3">
                            <div className={` h-100 w-100 border-box rounded-4 mx-auto`}>
                                <div className="card-body">
                                    <div className="mt-4 mb-3 w-100 d-inline-flex justify-content-center">
                                        <h3 className="text-center color-orange fw-bold"><i className="fas fa-award fa-2xl me-3"/>{t('qualt')}</h3>
                                    </div>
                                    <div className="w-100">
                                        <p className="m-0 p-0">{t('textQualt')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-3">
                            <div className={` h-100 w-100 border-box rounded-4 mx-auto`}>
                                <div className="card-body">
                                    <div className="mt-4 mb-3 w-100 d-inline-flex justify-content-center">
                                        <h3 className="text-center color-cyan fw-bold"><i className="far fa-flag fa-2xl me-3"/>{t('engag')}</h3>
                                    </div>
                                    <div className="w-100">
                                        <p className="m-0 p-0">{t('textEng')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-3">
                            <div className={` h-100 w-100 border-box rounded-4 mx-auto`}>
                                <div className="card-body">
                                    <div className="mt-4 mb-3 w-100 d-inline-flex justify-content-center">
                                        <h3 className="text-center color-red fw-bold"><i className="fas fa-person-chalkboard fa-2xl me-3"/>{t('accomp')}</h3>
                                    </div>
                                    <div className="w-100">
                                        <p className="m-0 p-0">{t('textAccp')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-3">
                            <div className={` h-100 w-100 border-box rounded-4 mx-auto`}>
                                <div className="card-body">
                                    <div className="mt-4 mb-3 w-100 d-inline-flex justify-content-center">
                                        <h3 className="text-center text-info-emphasis fw-bold"><i className="fas fa-cogs fa-2xl me-3"/>{t('savF')}</h3>
                                    </div>
                                    <div className="w-100">
                                        <p className="m-0 p-0">{t('textSav')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-3">
                            <div className={` h-100 border-box w-100 rounded-4 mx-auto`}>
                                <div className="card-body">
                                    <div className="mt-4 mb-3 w-100 d-inline-flex justify-content-center">
                                        <h3 className="text-center color-semi-orange fw-bold"><i className="far fa-chess-queen fa-2xl mx-3"/>Expertise</h3>
                                    </div>
                                    <div className="w-100">
                                        <p className="m-0 p-0">{t('textExp')}</p>
                                    </div>
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
export default ValeurDetail