import React from "react";
import TraitementComponent from "./TraitementComponent";

const Infotraitement = () => {
    return (
        <>
            <div className="row m-0 p-4 w-100">
                <div className="card border-0 pt-4">
                    <div className="row m-0 p-0">
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                            <TraitementComponent title={'Comptabilité'} emplacement={1} content={'En tant que collaborateurs comptables, nous sommes le cœur battant du processus comptable. Nous assurons avec rigueur les opérations quotidiennes telles que les saisies, les contrôles, les rapprochements bancaires et la préparation des déclarations. Notre expertise nous permet de garantir la fiabilité des données financières, offrant ainsi aux experts-comptables une base solide pour leurs analyses et leurs conseils stratégiques."'}/>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                            <TraitementComponent title={'Externalisation administrative '} emplacement={1} content={'Nous proposons des services de secrétariat administratif complets, incluant la gestion efficace des agendas, la rédaction et le suivi de la correspondance, ainsi que l\'organisation minutieuse de réunions. Notre équipe dédiée s\'assure que chaque détail est pris en charge, permettant ainsi à nos clients de se concentrer sur leurs priorités stratégiques.'}/>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                            <TraitementComponent title={'Informatique et traitement de données'} emplacement={1} content={'Nos spécialistes en informatique proposent une gamme complète de services, allant du développement logiciel sur mesure au traitement efficace des données, tant en ligne qu\'hors ligne. Grâce à leur compétence technique de pointe, nous garantissons des solutions innovantes et adaptées aux besoins spécifiques de nos clients, assurant ainsi une performance optimale de leurs systèmes d\'information.'}/>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                            <TraitementComponent title={'Ressources Humaines'} emplacement={2} content={'Nos services de ressources humaines englobent le recrutement, la formation et l\'administration des ressources humaines. Grâce à notre technique de pointe, nous nous engageons à fournir des solutions personnalisées qui favorisent le développement des talents et optimisent la gestion des équipes, contribuant ainsi à la réussite de votre organisation.'}/>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                            <TraitementComponent title={'Web et Marketing'} emplacement={2} content={'Nous offrons une gamme complète de services, incluant la rédaction web, le référencement, la conception graphique et la gestion des médias sociaux, parmi bien d\'autres. Notre approche intégrée vise à renforcer votre présence en ligne et à maximiser l\'impact de votre communication, tout en répondant aux besoins spécifiques de votre entreprise.'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Infotraitement