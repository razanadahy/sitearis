import React from "react";
import IconFooter from "./IconFooter";
import waveFooter from "../../Asset/bg-footer.svg";

const AccueilFooter = () => {
    return (
        <>
            <IconFooter/>
            <div className="mt-5 p-4 bg-dark bg-opacity-25 w-100 text-white" style={{backgroundImage: `url('${waveFooter}')`,backgroundSize: 'cover',backgroundPosition: 'center', width:'100%', minHeight: '50vh'}}>

            </div>
        </>
    )
}

export default AccueilFooter