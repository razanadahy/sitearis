import React from "react";
import PostuleElement from "./PostuleElement";

const OffreEmploye = () => {
    return (
        <>
            <div className="row m-0 p-4 w-100">
                <div className="card border-0 pt-3">
                    <div className="row m-0 p-0">
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-3">
                            <PostuleElement domaine={"programation"} titre={"Traitement d\'image"}/>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-3">
                            <PostuleElement domaine={"programation"} titre={"Traitement d\'image"}/>
                        </div>
                        <div className="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-3">
                            <PostuleElement domaine={"programation"} titre={"Traitement d\'image"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OffreEmploye