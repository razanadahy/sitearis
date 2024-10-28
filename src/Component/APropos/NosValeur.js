import React from "react";
import integite from '../../Asset/intergrite.jpg'
import excellent from '../../Asset/exelent.jpg'
import eng from '../../Asset/engagementClient.jpg'
import giv from '../../Asset/giveJob.jpg'
import {useMediaQuery} from "react-responsive";
import ValeurE from "./ValeurE";
const NosValeur = () => {
    const wMin=useMediaQuery({query: "(max-width: 768px)"})
    return (
        <>
            <div className="mx-0 mb-2 mt-3 w-100 p-3">
                <div className={`${wMin ? 'w-100 p-0 m-0' : 'container'}`}>
                    <div className="row p-0 m-0 border-aris">
                        <span className="display-6 text-aris title">Nos Valeurs</span>
                    </div>
                    <div className="row mx-0 mt-3 mb-2 p-0">
                        <h5>
                            Nos valeurs fondamentales guident chacune de nos actions et définissent notre engagement envers nos clients, nos collaborateurs et notre communauté.
                            Elles sont le socle sur lequel nous bâtissons des relations durables et des solutions sur mesure.
                        </h5>
                    </div>
                    <ValeurE emplacement={0} text={'Nous plaçons l\'honnêteté et la transparence au cœur de nos relations. Chaque décision est prise avec rigueur et éthique professionnelle.'} img={integite} title={'Intégrité'}/>
                    <ValeurE emplacement={1} text={'Nous nous engageons à fournir des services de la plus haute qualité, en visant l\'excellence dans toutes nos prestations et en dépassant constamment les attentes.'} img={excellent} title={'Excellence'}/>
                    <ValeurE emplacement={2} text={'Nos clients sont au centre de notre activité. Nous offrons des services personnalisés et adaptés, avec un suivi attentif de leurs besoins.'} img={eng} title={'Engagement envers le client'}/>
                    <ValeurE emplacement={3} text={'Nous nous engageons à contribuer positivement à notre communauté, en créant des emplois et en améliorant les conditions de travail de nos employés.'} img={giv} title={'Responsabilité sociale'}/>
                </div>
            </div>
        </>
    )
}
export default NosValeur