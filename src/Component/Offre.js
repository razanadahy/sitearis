import React from 'react'
import ElementShowTitle from "./ElementShowTitle";
import {useMediaQuery} from "react-responsive";
import CardCollaboration from "./CardCollaboration";
import DisplayText from "./DisplayText";

const Offre = () => {
    const isMediumOrLarger = useMediaQuery({ query: '(max-width: 992px)' });
    return(
        <>
            <div className="row w-100 m-0 pt-4 pb-4 pr-4 pe-0">
                <ElementShowTitle title={"Notre Collaboration"}/>
            </div>
            <div className="container mb-2">
                <div className="card border-0 mb-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-2">
                            <CardCollaboration color={"color-semi-purpule"} emplacement={0} icon={'fa-people-carry'} text={'Coworking?'}/>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-lg-4 mb-2" style={{transform: `translateY(${isMediumOrLarger ? '0' : '30px'})`}}>
                            <CardCollaboration color={'color-semi-orange'} emplacement={1} icon={'fa-handshake'} text={'Sous-traitance?'}/>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch mb-2">
                            <CardCollaboration color={'color-orange'} icon={'fa-city'} emplacement={2} text={'Un centre offshore?'}/>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-6 col-sm-12 d-flex align-items-stretch mb-2 mt-lg-4">
                            <CardCollaboration color={'color-red'} icon={'fa-lightbulb'} emplacement={3} text={'Pourquoi externaliser?'}/>
                        </div>
                        <div className="col-lg-5 col-sm-12 d-flex align-items-stretch mb-2 mt-lg-4">
                            <CardCollaboration color={'color-cyan'} icon={'fa-user-friends'} emplacement={4} text={'Une équipe selon vos besoins?'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 p-3 w-100">
                <div className="card mx-auto rounded-4 bg-edit border-2 border-success ">
                    <div className="card-body p-4 text-center text-white">
                        <DisplayText/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Offre