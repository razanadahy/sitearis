import React, {useCallback, useEffect, useMemo, useState} from "react";

import fr from '../../Asset/france.png'
import usa from '../../Asset/anglais.png'
import logo from '../../Asset/icon.png'
import {Dropdown} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import './Annimate.css'
import {useParams} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

const HeaderContent=({active})=>{
    const [idActive,setIdActive]=useState(active)
    const [hasShadow, setHasShadow] = useState(false);
    const handleScroll = useCallback( () => {
        if (window.scrollY > 0) {
            setHasShadow(true);
        } else {
            setHasShadow(false);
        }
    },[])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()
    const { lang } = useParams()
    const [ch,setCh]=useState(new Date())

    const changeLanguage = useCallback((langage) => {
        const newPath = `/${langage}${location.pathname.replace(/\/(fr|en)/, '')}`;
        navigate(newPath);
    },[location,lang])

    useEffect(()=>{
        if (lang && ['fr', 'en'].includes(lang)) {
            i18n.changeLanguage(lang);
            setCh(new Date())
        }
    },[location,lang,i18n.language])
    const currentIconLanguage=useMemo(()=>{
        if (i18n.language==='fr'){
            return fr
        }
        return usa
    },[i18n.language])

    const wMax = useMediaQuery({ query: "(max-width: 1034px)" });
    return (
        <>
            {wMax ? (
                <>
                    <nav id="header" className={`navbar navbar-light position-fixed top-0 start-0 w-100 z-3 ${hasShadow ? 'bg-light shadow-lg': 'bg-transparent'}`}>
                        <div className="container-fluid">
                            <a className="navbar-brand d-inline-flex align-items-center" href="#">
                                <img src={logo} alt="" width="35" className="d-inline-block align-text-top me-2"/>
                                <strong className="text-aris me-2">Aris</strong><strong className="text-concept">Concept</strong>
                            </a>
                            <i className="fa-solid fa-bars"/>
                        </div>
                    </nav>
                </>
            ): (
                <div id="header" className={`position-fixed top-0 start-0 w-100 pt-2 px-3 pb-0 z-3 d-flex justify-content-between text-white text-opacity-75 fw-bold ${hasShadow ? ' bg-white shadow' : ''}`}  style={{ transition: 'background-color 700ms ease-in-out' }}>
                    {hasShadow ? (
                        <>
                            <div className="flex-grow-1 d-inline-flex ms-3">
                                <img onClick={()=>navigate(`/${lang}/`)} src={logo} alt="logo" className="logo-icon img-fluid me-3 cursor-pointer"/>
                                <h4 onClick={()=>navigate(`/${lang}/`)} className="mb-0 fs-4 cursor-pointer fw-bold">
                                    <strong style={{ color: '#D10D58' }}>Aris </strong> <strong style={{ color: '#0e8de8' }}>Concept</strong>
                                </h4>
                            </div>
                            <div className="d-flex justify-content-between text-white text-opacity-75 fw-bold">
                                <div className={`me-2 mx-2 btn-animate`}>
                                    <a href={`/${lang}/`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===1 ? 'btn-active' : ''} text-dark fw-bold`} >{t('ac')}</a>
                                </div>
                                <div className={`me-2 mx-2 btn-animate`}>
                                    <a href={`/${lang}/apropos`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===3 ? 'btn-active' : ''} text-dark fw-bold`} >{t("apropos")}</a>
                                </div>
                                <div className={`me-2 mx-2 btn-animate`}>
                                    <a href={`/${lang}/service`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===2 ? 'btn-active' : ''} text-dark fw-bold`} ><span className="p-2">{t('service')}</span></a>
                                </div>
                                <div className={`me-2 mx-2 btn-animate`}>
                                    <a href={`/${lang}/avantages`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===5 ? 'btn-active' : ''} text-dark fw-bold`}>Vos avantages</a>
                                </div>
                                <div className={`me-2 mx-2 btn-animate`}>
                                    <a href={`/${lang}/contact`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===4 ? 'btn-active' : ''} text-dark fw-bold`}>{t('contact')}</a>
                                </div>
                                <div className="me-2 px-2 d-flex align-items-center mx-2 btn-animate">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            as="span"
                                            id="lang"
                                            className={`cursor-pointer fs-6 px-2 rounded-0 text-dark fw-bold`}
                                        >
                                            <img src={currentIconLanguage} alt={"..."} width={20} className="me-2 "/><i className="ms-2 fa-solid fa-angle-down"/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="mt-3">
                                            <Dropdown.Item onClick={()=>changeLanguage('fr')} as={"div"} className="d-inline-flex cursor-pointer text-uppercase justify-content-center">
                                                <img src={fr} alt={"..."} width={20} className="me-2 "/>{t('fr')}
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={()=>changeLanguage('en')} as={"div"} className="d-inline-flex cursor-pointer text-uppercase justify-content-center">
                                                <img src={usa} alt={"..."} width={20} className="me-2 "/>{t('en')}
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="bg-danger h-75 my-auto border-start"/>
                                <div className={`me-2 ps-2 btn-animate`}>
                                    <a href={`/${lang}/carrier`} className={`btn btn-header py-1 rounded-0 fs-6 px-2 text-dark fw-bold`}><span className="p-2">{t('post')}</span></a>
                                </div>
                            </div>
                        </>
                    ): (
                        <>
                            <div className="d-flex justify-content-between text-white text-opacity-75 fw-bold">
                                <div className={`me-2 btn-animate`}>
                                    <a href={`/${lang}/`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===1 ? 'btn-active' : ''} text-white text-opacity-75 fw-bold`} >{t('ac')}</a>
                                </div>
                                <div className={`me-2 btn-animate`}>
                                    <a href={`/${lang}/service`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===2 ? 'btn-active' : ''} text-white text-opacity-75 fw-bold`} ><span className="p-2">{t('service')}</span></a>
                                </div>
                                <div className={`me-2 btn-animate`}>
                                    <a href={`/${lang}/avantages`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===5 ? 'btn-active' : ''} text-white text-opacity-75 fw-bold`} >Vos avantages</a>
                                </div>
                                <div className={`me-2 btn-animate`}>
                                    <a href={`/${lang}/contact`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===4 ? 'btn-active' : ''} text-white text-opacity-75 fw-bold`}>{t('contact')}</a>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-end">
                                <div className={`me-2 btn-animate2 px-2`}>
                                    <a href={`/${lang}/apropos`} className={`btn btn-header py-1 rounded-0 px-2 fs-6 ${idActive===3 ? 'btn-active' : ''} text-white text-opacity-75 fw-bold`}>{t('apropos')}</a>
                                </div>
                                <div className="bg-danger h-75 my-auto border-start"/>
                                <div className="me-2 btn-animate2 px-2 my-auto d-flex align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            as="span"
                                            id="lang"
                                            className={`cursor-pointer py-1 fs-6 px-2 rounded-0 text-white text-opacity-75 fw-bold`}
                                        >
                                            <img src={currentIconLanguage} alt={"..."} width={20} className="me-2 "/><i className="ms-2 fa-solid fa-angle-down"/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="">
                                            <Dropdown.Item onClick={()=>changeLanguage('fr')} as={"div"} className="d-inline-flex cursor-pointer text-uppercase justify-content-center">
                                                <img src={fr} alt={"..."} width={20} className="me-2 "/>{t('fr')}
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={()=>changeLanguage('en')} as={"div"} className="d-inline-flex cursor-pointer text-uppercase justify-content-center">
                                                <img src={usa} alt={"..."} width={20} className="me-2 "/>{t('en')}
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="bg-danger h-75 my-auto border-start"/>
                                <div className={`me-2 btn-animate2 px-2`}>
                                    <a href={`/${lang}/carrier`} className={`btn btn-header py-1 rounded-0 fs-6 ps-2 text-white text-opacity-75 fw-bold`} ><span className="p-2">{t('post')}</span></a>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default HeaderContent