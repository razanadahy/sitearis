import React from "react";
import {Toast} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const Message = ({erreur,showResponse,setShowResponse}) => {
    const { t } = useTranslation();
    return(
        <Toast className={`position-fixed ${erreur ? 'bg-danger' : 'bg-success'} bottom-0 end-0`} show={showResponse} onClose={()=>setShowResponse(false)} delay={5000} autohide>
            <Toast.Header>
                <strong className="me-auto">Notification</strong>
                <small>{t('maintenant')}</small>
            </Toast.Header>
            <Toast.Body>
                {erreur ? (`${t('probleme')}`) : (`${t('sucMes')}`)}
            </Toast.Body>
        </Toast>
    )
}
export default Message