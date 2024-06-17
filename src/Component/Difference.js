import React from "react";
import ValeurComponent from "./ValeurComponent";

const Difference = () => {
    return(
        <>
            <div className="row w-100 mt-0 mb-2 mx-0 p-4 bg-light">
                <h2 className="text-center text-warning-emphasis p-4">
                    Notre différence?
                </h2>

                <div className="row w-100 mb-3 mt-0 mx-0 p-2">
                    <div className="col-lg-3 col-md-6 offset-md-0 col-sm-10 offset-sm-1 mb-3">
                        {/*<div  className={`card h-100 w-100 rounded-4 mx-auto`}>
                            <div className="card-body">
                                <h3 className="text-center mb-3 text-info-emphasis pb-2">
                                    <i className={`fas fa-cogs fa-2xl p-1`}/>Savoir-faire
                                </h3>
                                <p className="fs-5">
                                    Un groupe de
                                    professionnels compétents
                                    et expérimentés,
                                    représentant une expertise
                                    diversifiée dans le
                                    traitement des données.
                                    L'image devrait illustrer
                                    une équipe travaillant
                                    ensemble, mettant en
                                    avant leur savoir-faire et
                                    expérience.
                                </p>
                            </div>
                        </div>*/}
                        <ValeurComponent emplacement={0} title={'Savoir-faire'} content={'Un groupe de\n' +
                        '                                    professionnels compétents\n' +
                        '                                    et expérimentés,\n' +
                        '                                    représentant une expertise\n' +
                        '                                    diversifiée dans le\n' +
                        '                                    traitement des données.\n' +
                        '                                    L\'image devrait illustrer\n' +
                        '                                    une équipe travaillant\n' +
                        '                                    ensemble, mettant en\n' +
                        '                                    avant leur savoir-faire et\n' +
                        '                                    expérience.'} icon={'fa-cogs'}/>
                    </div>
                    <div className="col-lg-3 col-md-6 offset-md-0 col-sm-10 offset-sm-1 mb-3">
                        {/*<div  className={`card h-100 w-100 rounded-4 mx-auto`}>
                            <div className="card-body">
                                <h3 className="text-center mb-3 text-info-emphasis pb-2">
                                    <i className={`fas fa-award fa-2xl p-1`}/>Qualité
                                </h3>
                                <p className="fs-5">
                                    Une représentation
                                    visuelle d'un produit fini de
                                    haute qualité, soulignant
                                    l'engagement envers des
                                    normes élevées, la
                                    précision et la fiabilité.
                                    L'image devrait évoquer
                                    des standards élevés et
                                    une approche minutieuse.
                                </p>
                            </div>
                        </div>*/}
                        <ValeurComponent emplacement={1} title={'Qualité'} content={'Une représentation\n' +
                        '                                    visuelle d\'un produit fini de\n' +
                        '                                    haute qualité, soulignant\n' +
                        '                                    l\'engagement envers des\n' +
                        '                                    normes élevées, la\n' +
                        '                                    précision et la fiabilité.\n' +
                        '                                    L\'image devrait évoquer\n' +
                        '                                    des standards élevés et\n' +
                        '                                    une approche minutieuse.'} icon={'fa-award'}/>
                    </div>
                    <div className="col-lg-3 col-md-6 offset-md-0 col-sm-10 offset-sm-1 mb-3">
                        {/*<div  className={`card h-100 w-100 rounded-4 mx-auto`}>
                            <div className="card-body">
                                <h3 className="text-center mb-3 text-info-emphasis pb-2">
                                    <i className={`fas fa-flag fa-2xl p-1`}/>Engagement
                                </h3>
                                <p className="fs-5">
                                    Un visuel mettant en avant
                                    l'engagement de
                                    l'entreprise envers ses
                                    clients, illustrant la
                                    dévotion, la loyauté et la
                                    persévérance. L'image
                                    devrait refléter un
                                    engagement durable et
                                    sincère envers les clients
                                    et les partenaires.
                                </p>
                            </div>
                        </div>*/}
                        <ValeurComponent emplacement={2} title={'Engagement'} content={'Un visuel mettant en avant\n' +
                        '                                    l\'engagement de\n' +
                        '                                    l\'entreprise envers ses\n' +
                        '                                    clients, illustrant la\n' +
                        '                                    dévotion, la loyauté et la\n' +
                        '                                    persévérance. L\'image\n' +
                        '                                    devrait refléter un\n' +
                        '                                    engagement durable et\n' +
                        '                                    sincère envers les clients\n' +
                        '                                    et les partenaires.'} icon={'fa-flag'}/>
                    </div>
                    <div className="col-lg-3 col-md-6 offset-md-0 col-sm-10 offset-sm-1 mb-3">
                        {/*<div  className={`card h-100 w-100 rounded-4 mx-auto`}>
                            <div className="card-body">
                                <h3 className="text-center mb-3 text-info-emphasis pb-2">
                                    <i className={`fas fa-tags fa-2xl p-1`}/>Disponibilité
                                </h3>
                                <p className="fs-5">
                                    Une représentation
                                    visuelle de disponibilité
                                    constante et d'accessibilité
                                    pour les clients. L'image
                                    devrait transmettre un sens
                                    d'ouverture, d'accessibilité
                                    et de réactivité.
                                </p>
                            </div>
                        </div>*/}
                        <ValeurComponent emplacement={3} title={'Disponibilité'} content={'Une représentation\n' +
                        '                                    visuelle de disponibilité\n' +
                        '                                    constante et d\'accessibilité\n' +
                        '                                    pour les clients. L\'image\n' +
                        '                                    devrait transmettre un sens\n' +
                        '                                    d\'ouverture, d\'accessibilité\n' +
                        '                                    et de réactivité.'} icon={'fa-tags'}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Difference