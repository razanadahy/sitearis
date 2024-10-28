import React, {useCallback, useMemo} from "react";
import infoE from '../Asset/info.mp4'
import {useMediaQuery} from "react-responsive";

const EbookDowload = () => {
    const handleDownload = useCallback(() => {
        const link = document.createElement('a');
        link.href = '/BROCHURE_ARIS-Concept.pdf';
        link.download = 'BROCHURE_ARIS-Concept.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },[])
    const maxCol6=useMediaQuery({query: "(max-width: 1100px)"})
    const minW = useMediaQuery({query: "(min-width : 1100px)"})
    const minWidth=useMediaQuery({query: "(max-width: 551px)"})
    const wDnone = useMediaQuery({query :"(max-width: 436px)"})
    const hMin = useMediaQuery({query : "(max-height : 771px)"})

    const ratio= useMemo(() => {
        return window.innerWidth / window.innerHeight;
    }, []);
    return(
        <>
            <div className="vh-100 bg-dark bg-opacity-10 w-100 p-0 m-0">
                <div className="row p-0 m-0 w-100 h-100">
                    <div className={wDnone ? 'd-none' : `h-100 ${maxCol6 ? 'col-12': 'col-6'} d-flex justify-content-center align-items-center`}>
                        <div className={`${minWidth ? 'm-0 p-0 w-100' : 'm-0 p-0 w-75'}`}>
                            <video
                                src={infoE}
                                controls
                                className="w-100 p-0 m-0 shadow-lg"
                                style={{objectFit: 'cover'}}
                            />
                        </div>
                    </div>
                    <div className={`${!hMin && ratio>1 ? 'h-100' : ''} ${maxCol6 ? 'col-12 px-3 pt-2': 'col-6 px-4 pt-3'} bg-gradient-info-dark position-relative  d-flex flex-column justify-content-center`}>
                        <h3 className={`${wDnone ? 'mx-1' : 'mx-4'} text-white`} style={{fontSize: '2.5rem', letterSpacing: '0.1rem'}}>
                            Découvrez les stratégies gagnantes de l'externalisation avec <strong className="text-aris">Aris</strong> <strong className="text-concept">Concept</strong>
                        </h3>
                        <p className="mt-3 pt-3 px-2 text-white" style={{letterSpacing: '0.085rem'}}>
                            Découvrez comment l'externalisation peut transformer votre entreprise.
                            Notre ebook exclusif vous guide à travers les meilleures pratiques pour optimiser vos processus
                            et améliorer votre performance grâce à un centre d'offshore dédié. En téléchargeant ce guide,
                            vous accéderez à des conseils stratégiques sur la manière de réduire vos coûts,
                            d'accroître votre efficacité et de concentrer vos efforts sur ce qui compte vraiment : votre croissance
                        </p>
                        <div className={`d-flex mb-3 mx-0 px-0 pb-3 justify-content-center ${hMin && ratio<1 ? 'position-relative' : 'position-absolute'}  bottom-0 ${minW ? 'w-100 ' : !hMin && ratio <1 ? 'width-padding2rem' : 'mt-2'}`}>
                            <button onClick={handleDownload} className="btn btn-lg bg-info text-white btn-content rounded-3" style={{letterSpacing: '0.085rem'}}>Télécharger notre ebook gratuitement</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EbookDowload