import React from 'react'
import ElementShowTitle from "./ElementShowTitle";
import DisplayObjectif from "./DisplayObjectif";

const Objectif = () => {

    return (
        <>
            <div className="row w-100 m-0 pt-4 pb-4 pr-4 pe-0">
                <ElementShowTitle title={"Nos aspirations"}/>
            </div>
            <div className="row my-3 mx-0 p-0">
                <div className="card border-0">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                            {/*<div className="card h-100 border-0 mx-auto w-100 cursor-pointer">*/}
                            {/*    <div className="card-body">*/}
                            {/*        <h3 className="text-center mb-3 px-3 text-info">*/}
                            {/*            Créer des emplois pour des jeunes Malagasy*/}
                            {/*        </h3>*/}
                            {/*        <div className="row">*/}
                            {/*            <h5>*/}
                            {/*                Nous visons à offrir des*/}
                            {/*                opportunités d'emploi*/}
                            {/*                significatives pour les jeunes*/}
                            {/*                Malagasy, contribuant ainsi à*/}
                            {/*                l'amélioration des perspectives*/}
                            {/*                économiques et sociales de la*/}
                            {/*                région.*/}

                            {/*            </h5>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <DisplayObjectif emplacement={0} title={'Créer des emplois pour des jeunes Malagasy'} content={'Nous visons à offrir des\n' +
                            '                                            opportunités d\'emploi\n' +
                            '                                            significatives pour les jeunes\n' +
                            '                                            Malagasy, contribuant ainsi à\n' +
                            '                                            l\'amélioration des perspectives\n' +
                            '                                            économiques et sociales de la\n' +
                            '                                            région.'}/>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                            {/*<div className="card h-100 border-0 mx-auto w-100 cursor-pointer">*/}
                            {/*    <div className="card-body">*/}
                            {/*        <h3 className="text-center mb-3 px-3 text-info">*/}
                            {/*            Améliorer les conditions de travail*/}
                            {/*        </h3>*/}
                            {/*        <div className="row">*/}
                            {/*            <h5>*/}
                            {/*                Nous nous engageons à fournir*/}
                            {/*                des conditions de travail*/}
                            {/*                optimales, notamment en*/}
                            {/*                disposant de matériels*/}
                            {/*                performants, en mettant en place*/}
                            {/*                une solution anti-délestage, en*/}
                            {/*                offrant des horaires flexibles, et*/}
                            {/*                en assurant des affiliations à la*/}
                            {/*                CNAPS, OSTIE, et FMFP.*/}
                            {/*            </h5>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <DisplayObjectif emplacement={1} title={"Améliorer les conditions de travail"} content={'                Nous nous engageons à fournir\n' +
                            '                                            des conditions de travail\n' +
                            '                                            optimales, notamment en\n' +
                            '                                            disposant de matériels\n' +
                            '                                            performants, en mettant en place\n' +
                            '                                            une solution anti-délestage, en\n' +
                            '                                            offrant des horaires flexibles, et\n' +
                            '                                            en assurant des affiliations à la\n' +
                            '                                            CNAPS, OSTIE.'}/>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                            {/*<div className="card h-100 border-0 mx-auto w-100 cursor-pointer">*/}
                            {/*    <div className="card-body">*/}
                            {/*        <h3 className="text-center mb-3 px-3 text-info">*/}
                            {/*            Offrir des formations pour développer les compétences du personnel*/}
                            {/*        </h3>*/}
                            {/*        <div className="row">*/}
                            {/*            <h5>*/}
                            {/*                Nous croyons fermement en*/}
                            {/*                l'importance du développement*/}
                            {/*                professionnel. C'est pourquoi*/}
                            {/*                nous proposons diverses*/}
                            {/*                formations visant à améliorer les*/}
                            {/*                compétences et la polyvalence*/}
                            {/*                de notre personnel, pour leur*/}
                            {/*                permettre d'évoluer tant sur le*/}
                            {/*                plan professionnel que*/}
                            {/*                personnel.*/}
                            {/*            </h5>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <DisplayObjectif emplacement={2} title={'Offrir des formations pour développer les compétences du personnel'} content={'                Nous croyons fermement en\n' +
                            '                                            l\'importance du développement\n' +
                            '                                            professionnel. C\'est pourquoi\n' +
                            '                                            nous proposons diverses\n' +
                            '                                            formations visant à améliorer les\n' +
                            '                                            compétences et la polyvalence\n' +
                            '                                            de notre personnel, pour leur\n' +
                            '                                            permettre d\'évoluer tant sur le\n' +
                            '                                            plan professionnel que\n' +
                            '                                            personnel.'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Objectif