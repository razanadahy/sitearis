import React, {useEffect, useRef, useState} from "react";

const DisplayLi = ({icon,title,emplacement,color}) => {
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
                    },  350*emplacement);
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
    return (
        <>
            <li ref={elementRef} className={`list-inline-item p-2 rounded-2 d-flex align-items-center cursor-pointer ${isVisible ? 'arrow-div-left' : 'opacity-0'}`}>
                <i className={`fa-solid ${icon} fa-2x ${color}`}/>
                <span className="ms-2 text-light-emphasis">{title}</span>
            </li>
        </>
    )
}
export default DisplayLi