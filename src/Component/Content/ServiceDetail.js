import React, {useCallback, useEffect, useMemo, useState} from "react";
import wave from "../../Asset/bg.svg";
import wave2 from "../../Asset/wave (4).svg";
import compta from "../../Asset/comptable.png"
import web from "../../Asset/traitement.png"
import rh from "../../Asset/ressources humaines.png"
import mark from "../../Asset/Web et Marketing.png"
import ext from "../../Asset/image.png"
import CardServiceContent from "./CardServiceContent";
import {useTranslation} from "react-i18next";


const ServiceDetail= ()=>{
    const [date,setDate]=useState(new Date())
    const { t, i18n } = useTranslation();
    const services=useMemo(()=>{
        return[
            {id: 1, bg: 'bg-primary', next: 2, prev: 5, img: mark, text: t('marketing'), content: t('textMarketing')},
            {id: 2, bg: 'bg-cyan', next: 3, prev: 1, img: compta, text: t('compta'), content: t('textCompta')},
            {id: 3, bg: 'bg-primary-subtle', next: 4, prev: 2, img: web, text: t('info'), content: t('textInfo')},
            {id: 4, bg: 'bg-info-subtle', next: 5, prev: 3, img: rh, text: t('rh'), content: t('textRh')},
            {id: 5, bg: 'bg-blue', next: 1, prev: 4, img: ext, text: t('ext') , content: t('textExt')},
        ]
    },[i18n.language])
    const [carDefaultClicked,setClicked]=useState(services[0])
    const afficheCarousel = useMemo(() => {
        let elements = [];
        let servNext = carDefaultClicked;
        let i = 1;

        while (servNext?.next !== carDefaultClicked.id) {
            servNext = services.find((e) => e.id === servNext.next);
            const dId=servNext.id
            const du=i
            elements.push(
                <div className={`col-6 h-50 pb-2 ${i%2===0 ? 'ps-1 pe-0' : 'ps-0 pe-1'}`} key={i} >
                    <CardServiceContent element={servNext} id={du} onClicked={()=>clickDetail(dId)}/>
                </div>
            );
            i += 1;
        }

        return elements;
    }, [carDefaultClicked,i18n.language]);
    const [isPaused, setIsPaused] = useState(false);

    const clickDetail= useCallback( (id) => {
        setDate(new Date())
        setClicked(services.find((e)=>e.id===id))
    },[i18n.language,services])
    useEffect(()=>{
        setClicked((prev)=>services.find((e)=>e.id===prev.id))
    },[i18n.language])
    useEffect(() => {
        const updateClickedService = () => {
            setClicked((prevClicked) => {
                return services.find((e) => e.id === prevClicked.next);
            });
            setDate(new Date());
        };

        if (!isPaused) {
            const timer = setTimeout(() => {
                updateClickedService();
            }, 4500);
            return () => clearTimeout(timer);
        }
    }, [date, isPaused,services]);

    return (
        <>
            <div className="mx-0 mt-0 mb-2 p-0 w-100 position-relative" style={{backgroundImage: `url('${wave}')`,backgroundSize: 'cover',backgroundPosition: 'center', width:'100%', minHeight: '100vh'}}>
                <img src={wave2} className="position-absolute w-100 m-0 p-0 top-0 z-0"  alt="..."/>
                <h2 className="ms-4 fs-1 fw-bold text-white p-5 pb-2 w-100 z-2 position-relative w-100 bg-test">{t('serUs')}</h2>
                <div className="row mx-0 mb-2 mt-2 p-2 w-100 z-1 position-relative">
                    <div  onMouseEnter={() => setIsPaused(true)}
                          onMouseLeave={() => setIsPaused(false)} className="col-6">
                        <div className="card shadow-lg rounded-2 border-0 h-100 d-flex justify-content-center scale">
                            <img src={carDefaultClicked.img} className="mx-auto mt-2" height={300}  alt="..."/>
                            <div className="card-title text-center mt-3">
                                <h4 className="fs-3 fw-bold text-aris text-uppercase">{carDefaultClicked.text}</h4>
                            </div>
                            <div className="card-footer mt-1 mb-2 border-0 bg-transparent">
                                <p className="mt-2 text-dark mx-2 mb-0 fs-5">
                                    {carDefaultClicked.content}
                                </p>
                                <div className="w-100 d-flex justify-content-end">
                                    <button onClick={()=>carDefaultClicked.id} type="button" className="btn bg-aris text-white fw-bold py-2 rounded-1 btnIcon">{t('plus')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 m-0 p-0 my-auto">
                        <div className="row m-0 p-0 w-100 d-flex h-100 align-items-stretch" >
                            {afficheCarousel}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServiceDetail