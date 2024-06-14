import React, {useEffect, useRef, useState} from "react";

const CardCollaboration = ({color,text,icon,emplacement}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const top = elementRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(top < windowHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div ref={elementRef} className="card h-100 rounded-4 w-100 mx-auto shadow content-contribution cursor-pointer showTop">
                <div className={`card-body ${color}`}>
                    <div className="mt-4 mb-3 text-center w-100">
                        <i className={`fas fa-2xl ${icon}`}/>
                    </div>
                    <h3 className="text-center mb-3 px-3">{text}</h3>
                </div>
            </div>
        </>
    )
}
export default CardCollaboration