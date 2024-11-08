import React, {useState} from "react";
import integite from '../../Asset/intergrite.jpg'
import excellent from '../../Asset/exelent.jpg'
import eng from '../../Asset/engagementClient.jpg'
import giv from '../../Asset/giveJob.jpg'
import {useMediaQuery} from "react-responsive";
import ValeurE from "./ValeurE";
import {useTranslation} from "react-i18next";
import ViewContent from "../../FunctionComponent/ViewContent";
import StepLi from "../../FunctionComponent/StepLi";
const NosValeur = () => {
    const wMin=useMediaQuery({query: "(max-width: 768px)"})
    const {t} = useTranslation()

    const [viewList, setViewList] = useState(false);
    const [vInt,setVInt]=useState(false)
    return (
        <>
            <div className="mx-0 mb-2 mt-3 w-100 p-3">
                <div className={`${wMin ? 'w-100 p-0 m-0' : 'container'}`}>
                    <div className="row p-0 m-0 border-aris">
                        <span className="display-6 text-aris title width-max">{t('valeur')}</span>
                    </div>
                    <div className="row mx-0 mt-3 mb-2 p-0">
                        <p className="fs-5 mb-0">{t('p1Valeur')}</p>
                    </div>
                    <ViewContent time={250} setIsVisible={setViewList}>
                        <StepLi setTurnOn={setVInt} index={1} isVisible={viewList}>
                            <ValeurE emplacement={0} text={t('inTP')} img={integite} title={t('inT')}/>
                        </StepLi>
                        <StepLi setTurnOn={setVInt} index={2} isVisible={viewList}>
                            <ValeurE emplacement={1} text={t('exP')} img={excellent} title={'Excellence'}/>
                        </StepLi>
                        <StepLi setTurnOn={setVInt} index={4} isVisible={viewList}>
                            <ValeurE emplacement={2} text={t('eng')} img={eng} title={t('engT')}/>
                        </StepLi>
                        <StepLi setTurnOn={setVInt} index={6} isVisible={viewList}>
                            <ValeurE emplacement={3} text={t('respT')} img={giv} title={t('respP')}/>
                        </StepLi>
                    </ViewContent>

                </div>
            </div>
        </>
    )
}
export default NosValeur