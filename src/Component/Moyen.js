import React from 'react';
import imgMoyen from '../img/ofre.png'
import ElementShowTitle from "./ElementShowTitle";
import ElementH5 from "./ElementH5";

const Moyen = () => {

    return (
        <>
            <div className="row w-100 m-0 pt-4 pb-4 pr-4 pe-0 " id="moyen">
                <ElementShowTitle title={"Nos équipements"}/>
            </div>
            <div className="container">
                <div className="card border-0">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 d-xl-none">
                                <div className="card border-0 bg-gradient-info rounded-2" >
                                    <div className='rounded-2' style={{backgroundImage: `url('${imgMoyen}')`,backgroundSize: 'cover',backgroundPosition: 'center', width:'100%', height: 'auto'}}>
                                        <ul className="list-group list-group-flush bg-edit w-100 h-100 opacity-90 rounded-2">
                                            <li className="list-group-item bg-transparent">
                                                <ElementH5 stylePositionTop={true} texte={"Nous disposons des ordinateurs portables performants avec une autonomie de plus de 4H pour éviter la coupure de production pendant le délestage très répétitif à Madagascar."}/>
                                            </li>
                                            <li  className={`list-group-item bg-transparent`}>
                                                <ElementH5 stylePositionTop={false} texte={"Un deuxième écran pour chaque ordinateur portable pour faciliter et accélérer la manipulation des outils"}/>
                                            </li>
                                            <li className="list-group-item bg-transparent arrow-div">
                                                <ElementH5 stylePositionTop={false} texte={"Mise à disposition de Groupe électrogène automatique pour les écrans ou si le délestage persiste"}/>
                                            </li>
                                            <li className="list-group-item bg-transparent">
                                                <ElementH5 stylePositionTop={false} texte={"Connexion à haut débit avec deux lignes différentes en loadbalancing en cas de coupure"}/>
                                            </li>
                                            <li className="list-group-item bg-transparent">
                                                <ElementH5 stylePositionTop={false} texte={"Un local et moyens matériels qui peut accueillir jusqu'à 40 positions"}/>
                                            </li>
                                            <li className="list-group-item bg-transparent">
                                                <ElementH5 stylePositionTop={false} texte={"Création d’équipe rapide et efficace selon vos besoins en recrutements même les plus spécifiques grâce à notre collaboration avec un bureau de consultance expérimenté en recrutements et formations."}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 d-none d-xl-flex align-items-stretch">
                                <div className="card h-100 border-0 d-flex flex-column justify-content-center">
                                    <img src={imgMoyen} className="card-img bg-gradient-info w-100" alt="..." />
                                </div>
                            </div>
                            <div className="col-xl-6 d-none d-xl-flex align-items-stretch">
                                <div className="card h-100 border-0">
                                    <div className=" h-100 d-flex flex-column justify-content-center">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item ">
                                                <ElementH5 stylePositionTop={true} isWhite={false} texte={"Nous disposons des ordinateurs portables performants avec une autonomie de plus de 4H pour éviter la coupure de production pendant le délestage très répétitif à Madagascar."}/>
                                            </li>
                                            <li className="list-group-item ">
                                                <ElementH5 stylePositionTop={false} isWhite={false} texte={"Un deuxième écran pour chaque ordinateur portable pour faciliter et accélérer la manipulation des outils"}/>
                                            </li>
                                            <li className="list-group-item">
                                                <ElementH5 stylePositionTop={false} isWhite={false} texte={"Mise à disposition de Groupe électrogène automatique pour les écrans ou si le délestage persiste"}/>
                                            </li>
                                            <li className="list-group-item">
                                                <ElementH5 stylePositionTop={false} isWhite={false} texte={"Connexion à haut débit avec deux lignes différentes en loadbalancing en cas de coupure"}/>
                                            </li>
                                            <li className="list-group-item ">
                                                <ElementH5 stylePositionTop={false} isWhite={false} texte={"Un local et moyens matériels qui peut accueillir jusqu'à 40 positions"}/>
                                            </li>
                                            <li className="list-group-item">
                                                <ElementH5 stylePositionTop={false} isWhite={false} texte={"Création d’équipe rapide et efficace selon vos besoins en recrutements même les plus spécifiques grâce à notre collaboration avec un bureau de consultance expérimenté en recrutements et formations."}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Moyen