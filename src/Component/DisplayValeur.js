import React, {useEffect, useRef, useState} from "react";

const DisplayValeur = ({icon,text,emplacement, bg}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const top = elementRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, emplacement * 350);
                }else{
                    setIsVisible(false)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [emplacement]);
    return(
        <>
            <div ref={elementRef} className={`card h-100 w-100 rounded-4 mx-auto shadow cursor-pointer ${bg} text-bg-primary ${isVisible ? 'showTop' : 'opacity-0'}`}>
                <div className="card-body">
                    <div className="mt-4 mb-3 text-center w-100">
                        <i className={`fas ${icon} fa-2xl`}/>
                    </div>
                    <h3 className="text-center mb-3 px-3">{text}</h3>
                </div>
            </div>
        </>
    )
}

export default DisplayValeur