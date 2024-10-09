import React from "react";
import {useTranslation} from "react-i18next";

const InfoService = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="row bg-gradient-info-dark w-100 text-white mt-md-2 mt-sm-2 mx-0 mb-3 font-ramona">
                <br/>
                <div className="col-lg-9 col-md-11 mt-5 p-6 pb-5 offset-lg-1 offset-md-1 col-sm-12">
                    <h1 className="slideOutToRight p-sm-2 fs-4">
                        <strong style={{ color: '#D10D58' }}>ARIS </strong> <strong style={{ color: '#0e8de8' }}>CONCEPT</strong> {t('introService')}
                    </h1>
                    <p className="fs-5 p-3 m-0 me-2 preAnimation fst-italic font-consolas ">{t('descService')}</p>
                </div>
            </div>
        </>
    )
}

export default InfoService