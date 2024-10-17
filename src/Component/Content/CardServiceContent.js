import React from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router-dom";

const CardServiceContent = ({onClicked,element, id}) => {
    const { t, i18n } = useTranslation();
    const navigate=useNavigate()
    const {lang}=useParams()
    return (
        <div onClick={onClicked} className={`card rounded-2 card-transition shadow ${element.bg} h-100 bg-change border-0`}
             style={{ backgroundImage: `url('${element.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', minHeight: '20rem' }}>
            <div
                className="opacity-overlay rounded-2"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 1
                }}
            />
            <h3 className={`text-center text ${id===1 || id=== 4 ? 'text-white' : 'text-aris'} fw-bold my-auto`}>{element.text}</h3>
            <div className="position-absolute bottom-0 end-0 p-2 pe-3">
                <button type="button" onClick={(e)=>{
                    e.preventDefault()
                    navigate(`/${lang}/service#${element.div}`);
                }} className="btn btn-content btn-light py-2 rounded-1 btnIcon">{t('plus')}</button>
            </div>
        </div>
    )
}

export default CardServiceContent