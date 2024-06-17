import React, { useEffect, useState } from 'react';

const InfoE = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Notre savoir-faire et nos compétences se reposent sur des personnels expérimentés et motivés.';

    useEffect(() => {
        let index = 0;
        const startInterval = () => {
            const intervalId = setInterval(() => {
                setDisplayedText((prev) => {
                    if (index < fullText.length) {
                        const nextChar = fullText[index];
                        index += 1;
                        return prev + nextChar;
                    } else {
                        clearInterval(intervalId);
                        return prev;
                    }
                });
            }, 50);
        };

        const timeoutId = setTimeout(startInterval, 1100);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [fullText]);

    return (
        <div className="row bg-gradient-info-dark w-100 text-white mt-md-3 mt-sm-2 mx-0 mb-3 font-roboto">
            <br/>
            <div className="col-lg-9 col-md-11 mt-5 p-6 pb-5 offset-lg-1 offset-md-1 col-sm-12">
                <h1 className="slideOutToRight fs-3 p-sm-2">
                    <span style={{ color: '#D10D58' }}>ARIS </span> <span style={{ color: '#0e8de8' }}>CONCEPT</span> est une entreprise fondée légalement et enregistrée au registre du commerce de Madagascar en 2022, née d'une véritable passion pour le traitement des données informatiques.
                </h1>
                <p className="fs-5 p-3 m-0 me-2 preAnimation fst-italic font-consolas border bg-edit rounded-3">
                    {displayedText}
                </p>
                <br/>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-4 col-sm-6 fadeIn">
                        <button type="button" className="btn btn-light w-100 btn-lg">Plus <i className="fa-solid fa-chevron-right"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoE;
