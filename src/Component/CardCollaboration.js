import React, {useCallback, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const CardCollaboration = ({color, text, icon, emplacement}) => {
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
                    }, emplacement * 200);
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

    const navigate = useNavigate();

    const handleClick = useCallback( () => {
        const anchors = ["coworking", "sous-traitance", "centre-offshore", "pourquoi-externaliser", "une-equipe-selon-vos-besoins"];
        navigate(`/service#${anchors[emplacement]}`);
    },[emplacement])

    return (
        <div
            ref={elementRef}
            className={`card h-100 rounded-4 w-100 mx-auto shadow content-contribution cursor-pointer ${isVisible ? 'showTop' : ''}`}
            style={{ opacity: isVisible ? 1 : 0 }}
            onClick={handleClick}
        >
            <div className={`card-body ${color}`}>
                <div className="mt-4 mb-3 text-center w-100">
                    <i className={`fas fa-2xl ${icon}`}/>
                </div>
                <h3 className="text-center mb-3 px-3">{text}</h3>
            </div>
        </div>
    )
}

export default CardCollaboration;
