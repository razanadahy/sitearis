import React, {useCallback, useEffect, useMemo, useState} from "react";
import wave from "../../Asset/bg.svg";
import wave2 from "../../Asset/wave (4).svg";
import compta from "../../Asset/comptable.png"
import web from "../../Asset/traitement.png"
import rh from "../../Asset/ressources humaines.png"
import mark from "../../Asset/Web et Marketing.png"
import ext from "../../Asset/image.png"
import CardServiceContent from "./CardServiceContent";


const ServiceDetail= ()=>{
    const services=useMemo(()=>{
        return[
            {id: 1, bg: 'bg-primary', next: 2, prev: 5, img: mark, text: 'Web et Marketing', content: 'Nous offrons une gamme complète de services, incluant la rédaction web, le référencement, la conception graphique et la gestion des médias sociaux, parmi bien d\'autres. Notre approche intégrée vise à renforcer votre présence en ligne et à maximiser l\'impact de votre communication, tout en répondant aux besoins spécifiques de votre entreprise.'},
            {id: 2, bg: 'bg-cyan', next: 3, prev: 1, img: compta, text: 'Comptabilité', content: 'Nos experts en comptabilité prennent en charge l\'intégralité du processus de tenue de livres, garantissant un suivi rigoureux des comptes clients et un contrôle minutieux des pièces comptables. Grâce à leur performance, nous assurons une gestion financière transparente et fiable, permettant à nos clients de prendre des décisions éclairées pour leur entreprise.'},
            {id: 3, bg: 'bg-primary-subtle', next: 4, prev: 2, img: web, text: 'Informatique et traitement de données', content: 'Nos spécialistes en informatique proposent une gamme complète de services, allant du développement logiciel sur mesure au traitement efficace des données, tant en ligne qu\'hors ligne. Grâce à leur compétence technique de pointe, nous garantissons des solutions innovantes et adaptées aux besoins spécifiques de nos clients, assurant ainsi une performance optimale de leurs systèmes d\'information.'},
            {id: 4, bg: 'bg-info-subtle', next: 5, prev: 3, img: rh, text: 'Ressources Humaines', content: 'Nos services de ressources humaines englobent le recrutement, la formation et l\'administration des ressources humaines. Grâce à notre technique de pointe, nous nous engageons à fournir des solutions personnalisées qui favorisent le développement des talents et optimisent la gestion des équipes, contribuant ainsi à la réussite de votre organisation'},
            {id: 5, bg: 'bg-blue', next: 1, prev: 4, img: ext, text: 'Externalisation administrative', content: 'Nous proposons des services de secrétariat administratif complets, incluant la gestion efficace des agendas, la rédaction et le suivi de la correspondance, ainsi que l\'organisation minutieuse de réunions. Notre équipe dédiée s\'assure que chaque détail est pris en charge, permettant ainsi à nos clients de se concentrer sur leurs priorités stratégiques.'},
        ]
    },[])
    const [carDefaultClicked,setClicked]=useState(services[0])
    const [date,setDate]=useState(new Date())

    const afficheCarousel = useMemo(() => {
        let elements = [];
        let servNext = carDefaultClicked;
        let i = 1;

        while (servNext?.next !== carDefaultClicked.id) {
            servNext = services.find((e) => e.id === servNext.next);
            const dId=servNext.id
            const du=i
            elements.push(
                <div className={`col-6 h-50 pb-2 ${i%2===0 ? 'ps-1 pe-0' : 'ps-0 pe-1'}`} key={i} >
                    <CardServiceContent element={servNext} id={du} onClicked={()=>clickDetail(dId)}/>
                </div>
            );
            i += 1;
        }

        return elements;
    }, [carDefaultClicked]);
    const [isPaused, setIsPaused] = useState(false);

    const clickDetail= useCallback( (id) => {
        setDate(new Date())
        setClicked(services.find((e)=>e.id===id))
    },[])
    useEffect(() => {
        const updateClickedService = () => {
            setClicked((prevClicked) => {
                return services.find((e) => e.id === prevClicked.next);
            });
            setDate(new Date());
        };

        if (!isPaused) {
            const timer = setTimeout(() => {
                updateClickedService();
            }, 4500);
            return () => clearTimeout(timer);
        }
    }, [date, isPaused]);
    return (
        <>
            <div className="mx-0 mt-0 mb-2 p-0 w-100 position-relative" style={{backgroundImage: `url('${wave}')`,backgroundSize: 'cover',backgroundPosition: 'center', width:'100%', minHeight: '100vh'}}>
                <h2 className="ms-4 fs-1 fw-bold text-white p-5 pb-2 w-100 z-2 position-relative w-100">
                    Nos Services
                </h2>
                <div className="row mx-0 mb-2 mt-2 p-2 w-100 z-1 position-relative">
                    <div  onMouseEnter={() => setIsPaused(true)}
                          onMouseLeave={() => setIsPaused(false)} className="col-6">
                        <div className="card shadow-lg rounded-2 border-0 h-100 d-flex justify-content-center scale">
                            <img src={carDefaultClicked.img} className="mx-auto mt-2" height={300}  alt="..."/>
                            <div className="card-title text-center mt-3">
                                <h4 className="fs-3 fw-bold text-aris text-uppercase">{carDefaultClicked.text}</h4>
                            </div>
                            <div className="card-footer mt-1 mb-2 border-0 bg-transparent">
                                <p className="mt-2 text-dark mx-2 mb-0 fs-5">
                                    {carDefaultClicked.content}
                                </p>
                                <div className="w-100 d-flex justify-content-end">
                                    <button onClick={()=>carDefaultClicked.id} type="button" className="btn bg-aris text-white fw-bold py-2 rounded-1 btnIcon">En savoir plus</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 m-0 p-0 my-auto">
                        <div className="row m-0 p-0 w-100 d-flex h-100 align-items-stretch" >
                            {afficheCarousel}
                        </div>
                    </div>
                </div>
                <img src={wave2} className="position-absolute w-100 m-0 p-0 top-0 z-0"  alt="..."/>
            </div>
        </>
    )
}
export default ServiceDetail