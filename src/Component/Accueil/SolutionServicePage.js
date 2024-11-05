import React, {useState} from "react";
import SolutionComponent from "./SolutionComponent";
import {useMediaQuery} from "react-responsive";
import ViewContent from "../../FunctionComponent/ViewContent";

const SolutionServicePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const minW=useMediaQuery({query: "(max-width: 517px)"})
    return(
        <>
            <div className="row w-100 m-0 p-4 pb-0">
                <ViewContent setIsVisible={setIsVisible} time={0}>
                    <h2 className={`text-warning-emphasis ${isVisible ? 'showTop' : 'opacity-0'}`}>
                        Optimisez vos opérations avec nos solutions en:
                    </h2>
                </ViewContent>
                <div className={`row mt-2 mb-0 ${minW ? 'p-0 mx-0' : ' mx-3 p-3'}`}>
                    <div id={"coworking"} className="col-lg-6 p-0 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">

                        <SolutionComponent emplacement={0} title={"Coworking?"} color={'color-semi-purpule'} icon={'fa-people-carry'} >
                            <p style={{letterSpacing: '0.045rem'}}>
                                Vous avez déjà <span className="text-white bg-danger px-2 py-1 rounded-2 fw-semibold">votre client ?</span>Vous avez déjà votre commande ? Vous avez déjà votre équipe ? Mais il vous reste le local et moyens matériels pour accomplir vos tâches ? Nous sommes là pour vous fournir tous ces moyens en location avec une <span className="bg-success-subtle px-2 py-1 rounded-2">tarification très spéciale</span>.
                            </p>
                        </SolutionComponent>
                    </div>

                    <div id={"sous-traitance"} className="col-lg-6 p-0 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                        <SolutionComponent emplacement={1} title={'Sous-traitance?'} color={'color-semi-orange'} icon={'fa-handshake'} >
                            <p style={{letterSpacing: '0.045rem'}}>
                                Au lieu de <span className="bg-warning px-2 py-1 rounded-2 text-white">casser votre tête</span> pour trouver tous les moyens humains et matériels, n’hésitez pas à nous consulter pour sous-traiter vos commandes !!! Nous vous proposons des <span className="text-white px-2 py-1 bg-success rounded-2">solutions très avantageuses</span>.
                            </p>
                        </SolutionComponent>
                    </div>
                    <div id="centre-offshore" className="col-lg-6 p-0 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                        <SolutionComponent emplacement={2} title={'Un centre offshore?'} color={'color-orange'} icon={'fa-city'}>
                            <p style={{letterSpacing: '0.045rem'}}>
                                <span className="fw-semibold color-aris">ARIS </span> <span className="fw-semibold color-concept">CONCEPT</span> est un centre <span className="text-success-emphasis px-2 py-1 bg-success-subtle rounded-2">OFFSHORE</span> qui peut traiter toutes vos <span className="text-white bg-warning px-2 py-1 rounded-2">données en informatique et multimédia</span> quelque que soit vos domaines d’activités.
                            </p>
                        </SolutionComponent>
                    </div>
                    <div id="pourquoi-externaliser" className="col-lg-6 p-0 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                        <SolutionComponent emplacement={3} title={'Pourquoi externaliser?'} color={'color-red'} icon={'fa-lightbulb'} >
                            <p style={{letterSpacing: '0.045rem'}}>
                                Madagascar est déjà réputé pour ses coûts de production très compétitifs, mais aussi avec les <span className="text-white px-2 py-1 rounded-2 bg-danger-subtle">talents et compétences de nos jeunes</span> diplômés, vos traitements seront assurés par une équipe motivée à <span className="text-white bg-success px-2 py-1 rounded-2">moindre coût</span> !
                            </p>
                        </SolutionComponent>
                    </div>
                    <div id="une-equipe-selon-vos-besoins" className="col-lg-6 p-0 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-1">
                        <SolutionComponent emplacement={4} title={'Créer une équipe selon vos besoins?'} color={'color-cyan'} icon={'fa-user-friends'} >
                            <p style={{letterSpacing: '0.045rem'}}>
                                <span className="fw-bolder text-uppercase">Du jamais vu à Madagascar</span>!!! Un <span className="px-2 py-1 rounded-2 bg-success-subtle text-wrap">centre offshore</span> qui travaille avec une équipe d’<span className="px-2 py-1 rounded-2 bg-success text-white">Ingénieurs en BTP</span> pour des traitements de données dans ce domaine. Les Ingénieurs Malagasy peuvent désormais prouver leurs compétences sans aller sur-terrain grâce à une entreprise européenne qui a osé faire ce pas avec <span className="fw-semibold color-aris">ARIS</span> <span className="fw-semibold color-concept">CONCEPT</span>.
                            </p>
                        </SolutionComponent>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SolutionServicePage