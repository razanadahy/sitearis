import React from "react";
import integite from '../../Asset/intergrite.jpg'
import excellent from '../../Asset/exelent.jpg'
import eng from '../../Asset/engagementClient.jpg'
import giv from '../../Asset/giveJob.jpg'
const NosValeur = () => {
    return (
        <>
            <div className="mx-0 mb-2 mt-3 w-100 p-3">
                <div className="container">
                    <div className="row p-0 m-0 border-aris">
                        <span className="display-6 text-aris title">Nos Valeurs</span>
                    </div>
                    <div className="row mx-0 mt-3 mb-2 p-0">
                        <h5>
                            Nos valeurs fondamentales guident chacune de nos actions et définissent notre engagement envers nos clients, nos collaborateurs et notre communauté.
                            Elles sont le socle sur lequel nous bâtissons des relations durables et des solutions sur mesure.
                        </h5>
                    </div>
                    <div className="mx-0 mt-3 mb-2 p-0 d-flex justify-content-between align-items-center">
                        <div className="w-auto me-5">
                            <span className="text-concept display-5 fw-bold"><span className="display-6 me-3 color-dark-concept">1.</span>Intégrité</span>
                            <p className="fs-5 p-2">
                                Nous plaçons l'honnêteté et la transparence au cœur de nos relations. Chaque décision est prise avec rigueur et éthique professionnelle.
                            </p>
                        </div>
                        <div className="width-max">
                            <img src={integite} alt=""/>
                        </div>
                    </div>
                    <div className="mx-0 mt-3 mb-2 p-0 d-flex justify-content-between align-items-center">
                        <div className="w-auto">
                            <img src={excellent} alt=""/>
                        </div>
                        <div className="ms-5">
                            <span className="text-concept display-5 fw-bold"><span className="display-6 me-3 color-dark-concept">2.</span>Excellence</span>
                            <p className="fs-5 p-2">
                                Nous nous engageons à fournir des services de la plus haute qualité, en visant l'excellence dans toutes nos prestations et en dépassant constamment les attentes.
                            </p>
                        </div>
                    </div>
                    <div className="mx-0 mt-3 mb-2 p-0 d-flex justify-content-between align-items-center">
                        <div className="w-auto me-5">
                            <span className="text-concept display-5 fw-bold"><span className="display-6 me-3 color-dark-concept">3.</span>Engagement envers le client</span>
                            <p className="fs-5 p-2">
                                Nos clients sont au centre de notre activité. Nous offrons des services personnalisés et adaptés, avec un suivi attentif de leurs besoins.
                            </p>
                        </div>
                        <div className="width-max">
                            <img src={eng} alt=""/>
                        </div>
                    </div>
                    <div className="mx-0 mt-3 mb-2 p-0 d-flex justify-content-between align-items-center">
                        <div className="w-auto">
                            <img src={giv} alt=""/>
                        </div>
                        <div className="ms-5">
                            <span className="text-concept display-5 fw-bold"><span className="display-6 me-3 color-dark-concept">4.</span>Responsabilité sociale</span>
                            <p className="fs-5 p-2">
                                Nous nous engageons à contribuer positivement à notre communauté, en créant des emplois et en améliorant les conditions de travail de nos employés.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NosValeur