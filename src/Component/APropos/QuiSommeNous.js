import React from "react";
import './apropos.css'
import MrMamy from '../../Asset/MrMamy.jpg'
import Esperant from '../../Asset/Esperant.jpg'
import bgAris from '../../Asset/bgAris.png'
import {useMediaQuery} from "react-responsive";

const QuiSommeNous = () => {
    const wMin=useMediaQuery({query: "(max-width: 1156px)"})
    return (
        <>
            <div className="w-100 m-0 p-0">
                <div className="px-lg-5 px-md-1">
                    <div className="row m-0 p-0 w-100">
                        {wMin && (
                            <div className="col-12 m-0 p-0">
                                <img src={Esperant} draggable={"false"} decoding={"async"} className="w-100 z-0 shadow-lg" alt="Equipe" style={{transform: 'translateY(-1.55rem)'}}/>
                            </div>
                        )}
                        <div className={`${wMin ? 'col-12' : 'col-6'}`}>
                            <div className="mt-2">
                                <span className="text-concept display-6 fw-bold text-uppercase">A propos de nous</span>
                                <p className="mt-4"><span className="fw-bold text-aris">ARIS</span> <span className="fw-bold text-concept"> CONCEPT</span>  est une entreprise enregistrée au registre du commerce de Madagascar en 2022, née d'une véritable passion pour le traitement des données informatiques et la conception de solutions créatives pour les professionnels de divers secteurs. Ainsi, notre savoir-faire et nos compétences reposent sur des personnels engagés.</p>
                                <p>Nous visons à offrir des opportunités d'emploi significatives pour les jeunes Malagasy, contribuant ainsi à l'amélioration des perspectives économiques et sociales de la région</p>
                                <p>Nous nous engageons à fournir des conditions de travail optimales, notamment en disposant de matériels performants, en mettant en place une solution anti-délestage, en offrant des horaires flexibles, et en assurant des affiliations à la CNAPS, OSTIE.</p>
                                <p>Nous croyons fermement en l'importance du développement professionnel. C'est pourquoi nous proposons diverses formations visant à améliorer les compétences et la polyvalence de notre personnel, pour leur permettre d'évoluer tant sur le plan professionnel que personnel.</p>
                            </div>
                        </div>
                        <div className={`${wMin ? 'd-none' : 'col-6 d-flex align-items-center'}`}>
                            <div className="w-100 position-relative" style={{height: '400px'}}>
                                <img src={bgAris} draggable={"false"} decoding={"async"} className="position-absolute z-0 bg-info w-100 top-0 start-0"  alt="background photo"/>
                                <img src={MrMamy} draggable={"false"} decoding={"async"} className="position-absolute z-1 bg-info top-0 start-0" width={370} alt="Mr Mamy Aris Concept"/>
                                <img src={Esperant} draggable={"false"} decoding={"async"} className="position-absolute z-1 bg-info bottom-0 end-0" width={370} alt="Mr Esperant Aris Concept"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default QuiSommeNous