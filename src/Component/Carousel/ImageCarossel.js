import React from "react";

const ImageCarossel = ({linkImage}) => {
    return(
        <>
            <div className="vw-80" style={{
                height: '500px',
                backgroundImage: `url(${linkImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            </div>
        </>
    )
}

export default ImageCarossel