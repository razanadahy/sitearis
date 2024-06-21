import React from "react";
import TraitementComponent from "./TraitementComponent";

const Infotraitement = () => {
    return (
        <>
            <div className="row m-0 p-4 w-100">
                <div className="card border-0 pt-4">
                    <div className="row m-0 p-0">
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                            <TraitementComponent title={'Traitement de sons et/ou vidéos'} emplacement={1} content={'Nous offrons des solutions de pointe pour le traitement de sons et/ou de vidéos, transformant vos fichiers multimédias en outils puissants . Grâce à nos technologies avancées, nous améliorons la qualité audio et visuelle, analysons les contenus et optimisons les fichiers pour une diffusion optimale. Faites confiance à notre expertise pour sublimer vos enregistrements et vidéos, assurant ainsi un impact maximal et une gestion efficace de vos données multimédias.'}/>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                            <TraitementComponent title={'Traitement d\'image'} emplacement={2} content={'Nous proposons des solutions avancées pour le traitement d\'images, permettant d\'optimiser et d\'améliorer vos visuels pour un rendu exceptionnel. Grâce à nos technologies de pointe, nous retouchons, analysons et convertissons vos images pour répondre à vos besoins spécifiques. Faites confiance à notre expertise pour transformer vos fichiers visuels en véritables atouts .'}/>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                            <TraitementComponent title={'Traitement de données online ou offline'} emplacement={3} content={'Nous offrons des solutions complètes pour le traitement de données online et offline, garantissant une gestion efficace et sécurisée de vos informations. Nos technologies avancées permettent d\'optimiser, analyser et sécuriser vos données, qu\'elles soient stockées localement ou dans le cloud. Faites confiance à notre expertise pour transformer vos données en ressources stratégiques pour vous.'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Infotraitement