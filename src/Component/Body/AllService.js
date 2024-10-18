import React, {useCallback, useMemo, useState} from "react";
import DetailService from "./DetailService";
import {useTranslation} from "react-i18next";
import cp from '../../Asset/ciel-compta.jpg'
import traitement from '../../Asset/traitDonne.jpg'
import rh from '../../Asset/rh.jpg'
import extAdd from '../../Asset/extAdd.jpg'
import web from '../../Asset/web-marketing.jpg'
import {JobData as metier} from "../../Config/Job";
import {useNavigate, useParams} from "react-router-dom";
import ShowModalDevis from "./ShowModalDevis";

const AllService = () => {
    const { t, i18n } = useTranslation();
    const services= useMemo(() => {
        return [
            {id: 1, div: 'accounting', image: cp, trans:'Nous vous aidons sur : ', title: t('compta'), text: 'Confiez-nous votre comptabilité pour une gestion financière transparente et fiable. Nos experts assurent un suivi rigoureux de vos comptes et vous aident à prendre des décisions éclairées.'},
            {id: 4, div: 'info', image: traitement, trans:'Sur cela, nous proposons :', title: t('info'), text: 'Bénéficiez de solutions informatiques innovantes et personnalisées. Nos spécialistes optimisent vos systèmes d\'information et traitent vos données avec efficacité.'},
            {id: 5, div: 'hr', image: rh, trans:'Nous apportons :', title: t('rh'), text: 'Nous vous accompagnons dans la gestion de vos talents. Du recrutement à la formation, nos services RH vous aident à construire des équipes performantes.'},
            {id: 2, div: 'ext', image: extAdd, trans:'Nous vous aidons à gèrer : ', title: t('ext'), text: 'Déléguez vos tâches administratives pour vous concentrer sur votre cœur de métier.' },
            {id: 3, div: 'web-marketing', image: web, trans:'Nous vous aidons sur :', title: t('marketing'), text: 'Développez votre présence en ligne et améliorez votre visibilité. Nos experts en marketing digital vous proposent des solutions clés en main pour atteindre vos objectifs.'},
        ]
    }, [i18n.language]);
    const navigate=useNavigate()
    const { lang } = useParams()
    const [clickModal,setClickModal]=useState(false)
    const [title,setTitle]=useState('')
    const setHideModal = useCallback((value, tl) => {
        setClickModal(!value)
        setTitle(tl)
    },[])
    return (
        <>
            {services.map((data,index)=>(
                <DetailService clicked={()=>setHideModal(false,data.title)} key={index} position={index+1} element={data}>
                    <span className="display-6 fw-bold">{data.trans}</span>
                    <ul className="list mt-3 ms-3 text-slate-500 grid grid-cols-2 grid-rows-3 gap-y-3">
                        {metier.find((e)=>e.id===data.id).children.map((child)=>(
                            <li onClick={()=>navigate(`/${lang}/service/${data.id}/${child.id}`)} className="cursor-pointer bg-warning rounded-3 me-1 px-0 py-2 d-flex align-items-center justify-content-center text-center" key={`${child.id}-${data.id}`}>{child.title}</li>
                        ))}
                    </ul>
                </DetailService>
            ))}
            {clickModal && (
                <ShowModalDevis title={title} show={clickModal} onHide={()=>setHideModal(true,'')}/>
            )}
        </>
    )
}

export default AllService