import React from "react";
import unique from '../../Asset/SolutionUnique.jpg'
import acc from '../../Asset/Accompagnement.jpg'
import prix from '../../Asset/BestPrice.jpg'
import flex from '../../Asset/Flexibilite.jpg'
import qual from '../../Asset/Qualifie.jpg'
import comp from '../../Asset/Competant.jpg'
import innovant from '../../Asset/Innovant.jpg'
import formation from '../../Asset/Formation.jpg'
import stable from '../../Asset/Stabilite.jpg'
import condition from '../../Asset/condition.jpg'
import equipement from '../../Asset/equipement.jpg'
import DetailAvantage from "./DetailAvantage";

const Equipement = () => {
    return(
        <>
            <div className="w-100 m-0 p-3">
                <span className="display-4 text-concept fw-bold">Avec nous, vous avez: </span>
                <div className="border-aris text-start p-0 mx-3 my-0">
                    <h4 className="p-2 m-0 text-aris title pb-3 display-6 width-max"><i className="me-2 far fa-dot-circle fs-3"/> Service</h4>
                </div>
                <div className="mt-3 w-100 mb-2 p-0">
                    <DetailAvantage emplacement={0} image={unique} title={'Solutions personnalisées et unique'} text={'Nous ne faisons pas dans le prêt-à-porter. Chaque solution est un produit unique, façonné à votre image. Bénéficiez d\'un accompagnement personnalisé pour des résultats qui sortent du lot.'}/>
                    <DetailAvantage emplacement={1} image={acc} title={'Accompagnement et engagement'} text={"Aris Concept vous propose des solutions personnalisées pour répondre à vos besoins spécifiques. Au-delà de la conception de solutions uniques, nous nous engageons à vos côtés tout au long de votre projet. Notre accompagnement sur-mesure vous garantit une réussite optimale."}/>
                    <DetailAvantage emplacement={2} image={prix} title={'Les prix et le rapport qualité/prix'} text={"Nous croyons en la valeur ajoutée de nos services. Nos tarifs sont étudiés au cas par cas pour offrir un excellent rapport qualité-prix, sans compromis sur la qualité."}/>
                    <DetailAvantage emplacement={3} image={flex} title={'Flexibilité et adaptabilité'} text={"Le monde change, nous aussi. Aris Concept vous garantit une réactivité à toute épreuve et des solutions adaptées à chaque situation."}/>
                </div>

                <div className="border-aris text-end p-0 mx-3 my-0">
                    <h4 className="p-2 m-0 width-max text-aris title pb-3 display-6"><i className="me-2 far fa-dot-circle fs-3"/> Personnels</h4>
                </div>
                <div className="mt-3 w-100 mb-2 p-0">
                    <DetailAvantage emplacement={0} image={innovant} title={"L'innovant et l'adaptabilité"} text={"Face à un monde en perpétuelle évolution, l'innovation et l'adaptabilité représentent des atouts clé pour notre personnel. En encourageant une culture où la créativité est valorisée et où le changement est perçu comme une opportunité plutôt qu'une contrainte, chaque membre de notre équipe est habilité à proposer des solutions novatrices face aux défis."}/>
                    <DetailAvantage emplacement={1} image={comp} title={"Compétent et Motivé"} text={"Notre personnel se distingue par son expertise et son engagement indéfectible envers l'excellence. Chacun de nos collaborateurs apporte une compétence unique qui renforce notre capacité à atteindre nos objectifs collectifs. "}/>
                    <DetailAvantage emplacement={2} image={qual} title={"Qualifié"} text={"Nous avons une équipe de professionnels d'une grande qualité, avec chacun une connaissance approfondie dans son domaine d'activité. Cette qualification nous permet de relever les défis avec confiance et de fournir des solutions efficaces et innovantes."}/>
                </div>
                <div className="border-aris text-start p-0 mx-3 my-0">
                    <h4 className="p-2 m-0 text-aris width-max title pb-3 display-6"><i className="me-2 far fa-dot-circle fs-3"/> Entreprise</h4>
                </div>

                <div className="mt-2 w-100 mb-2 p-0">
                    <DetailAvantage emplacement={0} image={formation} title={"contribution au formation du personnel"} text={"Pour rester à la pointe de l'innovation, nous offrons à nos collaborateurs des formations régulières sur les dernières technologies. Cela nous permet de vous proposer des solutions digitales toujours plus performantes et adaptées à vos besoins"}/>
                    <DetailAvantage emplacement={1} image={condition} title={"Condition de travail au TOP"} text={"Nous croyons que des collaborateurs épanouis sont la clé de notre succès. C'est pourquoi nous mettons tout en œuvre pour offrir un environnement de travail stimulant, où chacun peut s'épanouir et donner le meilleur de lui-même."}/>
                    <DetailAvantage emplacement={2} image={equipement} title={"Equipement haute performance"} text={"Nous croyons fermement que l'innovation passe par l'équipement haute performance. En investissant dans des technologies de pointe, nous offrons à notre équipe les outils nécessaires pour exceller dans leur travail et répondre aux besoins de nos clients avec efficacité."}/>
                    <DetailAvantage emplacement={3} image={stable} title={" Stabilité et engagement"} text={"C'est l'assurance d'un partenariat durable. Notre entreprise, solidement implantée, vous offre une stabilité et un engagement à long terme, pour vous accompagner dans toutes les étapes de votre projet."}/>
                </div>
            </div>
        </>
    )
}

export default Equipement