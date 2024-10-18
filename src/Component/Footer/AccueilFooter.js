import React, {useCallback, useEffect, useRef, useState} from "react";
import IconFooter from "./IconFooter";
import logo from "../../Asset/icon.png";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";

const AccueilFooter = () => {
    const handleClick = useCallback((e) => {
        e.preventDefault();
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${'contact@aris-cc.com'}`;
        window.open(mailtoUrl, '_blank');
    },[])
    const [isIconVisible, setIsIconVisible] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                    setIsIconVisible(true);
                    footerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }else{
                    setIsIconVisible(false);
                }
            },
            {
                threshold: 0.4,
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    const { t, i18n } = useTranslation();
    const {lang}=useParams()
    return (
        <>
             <IconFooter isVisible={!isIconVisible}/>
            <div ref={footerRef} className="m-0 p-0 w-100 bg-dark-blue text-white small">
                <div className="row w-100 mx-0 mt-2 mb-0 pt-4 px-3 border-bottom">
                    <div className="col-6">
                        <div className="w-100 d-inline-flex align-items-center ">
                            <img src={logo} alt="logo" className="img-fluid me-3" width={40}/>
                            <h4 className="mb-0 fs-2 fw-bold">
                                <strong style={{ color: '#D10D58' }}>Aris </strong> <strong style={{ color: '#0e8de8' }}>Concept</strong>
                            </h4>
                        </div>
                        <div className="my-3 w-100 text-center" >
                            <p className="" style={{fontSize: '0.875rem', lineHeight: '1.35rem'}}>{t('descFooter')}</p>
                        </div>
                        <div className="w-100 mt-3">
                            <span className="fs-5 fw-bolder text-uppercase text-aris">{t('ctnUs')}</span>
                            <div className=" w-100 mt-2 p-2 d-flex justify-content-between">
                                <div className="d-inline-flex text-jaune fw-bold">
                                    <span className="icon me-1">+</span>
                                    <span className="fw-bolder txt-at">{t('way')}</span>
                                </div>
                                <div>
                                    <span className="link-primary fw-bold cursor-pointer">Iavoloha, Antananarivo 102</span>
                                </div>
                                <div>
                                    <a  href="https://wa.me/+261385340534" target="_blank" rel="noopener noreferrer" className="ms-2 email-link link-primary cursor-pointer">+261 38 53 405 34</a>
                                </div>
                                <div>
                                    <a  href={`mailto:${'contact@aris-cc.com'}`} onClick={handleClick} className="ms-2 email-link link-primary cursor-pointer">contact@aris-cc.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 mb-3">
                            <a href="https://www.linkedin.com/in/aris-concept-company-567703240" target="_blank" rel="noreferrer" className="p-2 border text-decoration-underline rounded-3 cursor-pointer">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className="fs-3 mb-3 text-center">Services</h4>
                        <ul className="list-group m-0 p-0 bg-transparent list-group-flush">
                            <li className="list-group-item bg-transparent cursor-pointer text-white d-inline-flex justify-content-between border-0">
                                <a href={`/${lang}/service#info`} className="fw-bolder p-0 m-0 letter-spacing">{t('info')}</a>
                            </li>
                            <li className="list-group-item bg-transparent text-white border-0 cursor-pointer">
                                <a href={`/${lang}/service#web-marketing`} className="letter-spacing fw-bolder p-0 m-0">{t('marketing')}</a>
                            </li>
                            <li className="list-group-item bg-transparent text-white border-0 cursor-pointer">
                                <a href={`/${lang}/service#accounting`} className="letter-spacing fw-bolder p-0 m-0">{t('compta')}</a>
                            </li>
                            <li className="list-group-item bg-transparent text-white border-0 cursor-pointer">
                                <a href={`/${lang}/service#ext`} className="letter-spacing fw-bolder p-0 m-0">{t('ext')}</a>
                            </li>
                            <li className="list-group-item bg-transparent text-white mb-2 border-0 cursor-pointer">
                                <a href={`/${lang}/service#hr`} className="letter-spacing fw-bolder p-0 m-0">{t('rh')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h4 className="ms-2 mb-3 text-primary">
                            Newsletter
                        </h4>
                        <div className="">
                            {t('inscrire')}
                            <div className="email-container border-bottom mt-2 w-100 d-inline-flex justify-content-between py-2 px-1 align-items-center">
                                <label className="email-label" htmlFor="email">
                                    e-mail
                                </label>
                                <input type="email" id="email" autoComplete={"off"} className="email-input" />
                                <span className="email-arrow">
                                    <i className="fa-solid fa-arrow-right-long"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-0 p-2 w-100 d-inline-flex justify-content-between">
                    <div className=" text-light d-inline-flex">
                        <span className="pb-1">© 2024 Aris Concept company<i className="mx-2 fa fa-minus"/><span className="cursor-pointer">{t('mention')}</span><i className="mx-2 fa fa-minus"/><span className="cursor-pointer">{t('politique')}</span></span>
                    </div>
                    <div className=" text-light pb-1">
                        <span>{t('droit')}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccueilFooter