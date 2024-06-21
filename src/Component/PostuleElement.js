import React from "react";
import {Button} from "react-bootstrap";

const PostuleElement = ({domaine,titre}) => {
    return (
        <div className="card h-100 shadow-lg cursor-pointer rounded-4 mx-auto w-100">
            <div className="card-title mb-0 bg-success-subtle rounded-4 rounded-bottom-0">
                <h5 className="pt-2 text-white text-center ">{domaine}</h5>
            </div>
            <div className="card-body m-0">
                <h4 className="text-center">{titre}</h4>
            </div>
            <div className="row card-footer border-0 bg-body rounded-top-0 rounded-bottom-4 w-100 m-0 p-2">
                <div className="col-6">
                    <Button variant="outline-light" className="w-100 text-info">Plus d'info</Button>
                </div>
                <div className="col-6">
                    <Button variant="outline-success" className="w-100">Postuler</Button>
                </div>
            </div>
        </div>
    )
}
export default PostuleElement