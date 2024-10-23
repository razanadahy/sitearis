import React from "react";
import statistique from '../../img/ofre.png'
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

const AppelAction = () => {
    const { t, i18n } = useTranslation();
    const { lang } = useParams()
    const wMaxText = useMediaQuery({ query: "(max-width: 994px) and (min-width: 768px)" });

    return (
        <>
            <div className="container bg-dark bg-opacity-10">
                <div className="row mx-0 mt-4 p-3">
                    {/*<div className="col-3 offset-2 bg-primary-subtle">*/}
                    <div className="col-5 bg-primary-subtle">
                        <img src={statistique} alt="..." height={200}/>
                    </div>
                    <div className="col-7 position-relative">
                        <div className="mt-2">
                            <span className="small text-body-emphasis p-3 mb-3">{t('aide')}</span>
                            <h3 className="my-3 text-concept fw-bolder">{t('decService')}</h3>
                            <h5>{t('devService')}</h5>
                        </div>
                        <div className="w-100 position-absolute bottom-0 row m-0 px-0 pt-0 pb-2">
                            <div className="col-6">
                                <a href={`/${lang}/service`} className="btn btn-content btn-primary w-100 py-2 fw-bolder rounded-1">{t('serUs')}</a>
                            </div>
                            <div className="col-6">
                                <a href={`/${lang}/contact`} className="btn btn-content btn-info py-2 fw-bolder w-100 rounded-1">{t('contactez')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AppelAction