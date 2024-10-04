import React from "react";

const CardServiceContent = ({onClicked,element, id}) => {

    return (
        <div onClick={onClicked} className={`card rounded-2 card-transition shadow ${element.bg} h-100 bg-change border-0`}
             style={{ backgroundImage: `url('${element.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', minHeight: '20rem' }}>
            <h3 className={`text-center text ${id===1 || id=== 4 ? 'text-white' : 'text-aris'} fw-bold my-auto`}>{element.text}</h3>
            <div className="position-absolute bottom-0 end-0 p-2 pe-3">
                <button type="button" className="btn btn-light py-2 rounded-1 btnIcon">En savoir plus</button>
            </div>
        </div>
    )
}

export default CardServiceContent