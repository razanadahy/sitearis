import React, {useEffect, useRef, useState} from "react";

const SolutionComponent = ({color,icon,title,content, emplacement}) => {
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
        <div ref={elementRef} className={`card h-100 border-0 mx-auto w-100 ${isVisible ? (emplacement+1)%2!==0 ? 'arrow-div' : 'arrow-div-left' : 'opacity-0'}`}>
            <div className="card-body">
                <h3 className={`text-start mb-3 ${color}`}><i className={`fas fa-2xl p-2 ${icon}`}/>{title}</h3>
                <div className="row w-100">
                    <p className="fs-6">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SolutionComponent