import React from 'react'
import ElementShowTitle from "./ElementShowTitle";

const Objectif = () => {
    return (
        <>
            <div className="row w-100 m-0 pt-4 pb-4 pr-4 pe-0">
                <ElementShowTitle title={"Nos aspirations"}/>
            </div>
            <div className="row my-3 mx-0 p-0">
                <div className="card border-0">
                    <div className="row">
                        <div className="col-4 d-flex align-items-stretch mb-2">
                            <div className="card h-100 border-0 mx-auto w-100 cursor-pointer">
                                <div className="card-body">
                                    <h3 className="text-center mb-3 px-3 text-info">
                                        Créer des emplois pour des jeunes Malagasy
                                    </h3>
                                    <div className="row">
                                        <h5>
                                            Nous visons à offrir des
                                            opportunités d'emploi
                                            significatives pour les jeunes
                                            Malagasy, contribuant ainsi à
                                            l'amélioration des perspectives
                                            économiques et sociales de la
                                            région.

                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex align-items-stretch mb-2">
                            <div className="card h-100 border-0 mx-auto w-100 cursor-pointer">
                                <div className="card-body">
                                    <h3 className="text-center mb-3 px-3 text-info">
                                        Améliorer les conditions de travail
                                    </h3>
                                    <div className="row">
                                        <h5>
                                            Nous nous engageons à fournir
                                            des conditions de travail
                                            optimales, notamment en
                                            disposant de matériels
                                            performants, en mettant en place
                                            une solution anti-délestage, en
                                            offrant des horaires flexibles, et
                                            en assurant des affiliations à la
                                            CNAPS, OSTIE, et FMFP.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex align-items-stretch mb-2">
                            <div className="card h-100 border-0 mx-auto w-100 cursor-pointer">
                                <div className="card-body">
                                    <h3 className="text-center mb-3 px-3 text-info">
                                        Offrir des formations pour développer les compétences du personnel
                                    </h3>
                                    <div className="row">
                                        <h5>
                                            Nous croyons fermement en
                                            l'importance du développement
                                            professionnel. C'est pourquoi
                                            nous proposons diverses
                                            formations visant à améliorer les
                                            compétences et la polyvalence
                                            de notre personnel, pour leur
                                            permettre d'évoluer tant sur le
                                            plan professionnel que
                                            personnel.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Objectif