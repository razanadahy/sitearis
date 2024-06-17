import React, {useEffect, useRef, useState} from "react";
import SolutionComponent from "./SolutionComponent";

const SolutionServicePage = () => {

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const top = elementRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(top < windowHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return(
        <>
            <div className="row w-100 m-0 p-4">
                <h2 ref={elementRef} className={`text-warning-emphasis ${isVisible ? 'showTop' : 'opacity-0'}`}>
                    Optimisez vos opérations avec nos solutions en:
                </h2>
                <div className="row mt-2 mx-3 mb-0 p-4">
                    <div id={"coworking"} className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">

                        <SolutionComponent emplacement={0} title={"Coworking?"} color={'color-semi-purpule'} icon={'fa-people-carry'} content={" Vous avez déjà votre client ? Vous avez déjà votre commande ? Vous avez déjà votre équipe ?\n" +
                        "                                        Mais il vous reste le local et moyens matériels pour accomplir vos tâches ?\n" +
                        "                                        Nous sommes là pour vous fournir tous ces moyens en location avec une tarification très spéciale."}/>
                    </div>

                    <div id={"sous-traitance"} className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                        <SolutionComponent emplacement={1} title={'Sous-traitance?'} color={'color-semi-orange'} icon={'fa-handshake'} content={'Au lieu de casser votre tête pour trouver tous les moyens humains et matériels, n’hésitez pas à nous consulter pour sous-traiter vos commandes !!! Nous vous proposons des solutions très avantageuses.'}/>
                    </div>
                    <div id="centre-offshore" className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                        <SolutionComponent emplacement={2} title={'Un centre offshore?'} color={'color-orange'} icon={'fa-city'} content={'ARIS CONCEPT est un centre OFFSHORE qui peut traiter toutes vos données en informatique et multimédia quelque que soit vos domaines d’activités.'}/>
                    </div>
                    <div id="pourquoi-externaliser" className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                        <SolutionComponent emplacement={3} title={'Pourquoi externaliser?'} color={'color-red'} icon={'fa-lightbulb'} content={' Madagascar est déjà réputé pour ses coûts de production très compétitifs, mais aussi avec les talents et compétences de nos jeunes diplômés, vos traitements seront assurés par une équipe motivée à moindre coût !'}/>
                    </div>
                    <div id="une-equipe-selon-vos-besoins" className="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-1">
                        <SolutionComponent emplacement={4} title={'Créer une équipe selon vos besoins?'} color={'color-cyan'} icon={'fa-user-friends'} content={'Du jamais vu à Madagascar !!! Un centre offshore qui travaille avec une équipe d’Ingénieurs en BTP pour des traitements de données dans ce domaine. Les Ingénieurs Malagasy peuvent désormais prouver leurs compétences sans aller sur-terrain grâce à une entreprise européenne qui a osé faire ce pas avec ARIS CONCEPT.'}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SolutionServicePage