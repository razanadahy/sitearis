import React from 'react'
import ElementShowTitle from "./ElementShowTitle";
import DisplayValeur from "./DisplayValeur";

const Valeur = () => {
    return (
        <>
            <div className="row w-100 m-0 pt-4 pb-4 pr-4 pe-0">
                <ElementShowTitle title={"NOS VALEURS"}/>
            </div>
            <div className="row m-0 p-0">
                <div className="card border-0">
                    <div className="card-body">
                        <div className="row m-0 p-2">
                            <div className="col-lg-3 offset-lg-0 col-md-6 col-sm-12 d-flex align-items-stretch mb-2">
                                <DisplayValeur emplacement={0} text={'Savoir-faire'} icon={'fa-cogs'} bg={'bg-info'}/>
                            </div>
                            <div className="col-lg-3 offset-lg-0 col-md-6 col-sm-12 d-flex align-items-stretch mb-2">
                                <DisplayValeur emplacement={1} icon={'fa-award'} text={'Qualité'} bg={'bg-cyan'}/>
                            </div>
                            <div className="col-lg-3 offset-lg-0 col-md-6 col-sm-12 d-flex align-items-stretch mb-2">
                                <DisplayValeur emplacement={2} text={'Engagement'} icon={'fa-flag'} bg={'bg-mi-blue'}/>
                            </div>
                            <div className="col-lg-3 offset-lg-0 col-md-6 col-sm-12 d-flex align-items-stretch mb-2">
                                <DisplayValeur emplacement={3} icon={'fa-tags'} text={'Disponibilité'} bg={'bg-blue'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Valeur