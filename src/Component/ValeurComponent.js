import React, {useEffect, useRef, useState} from "react";

const ValeurComponent = ({title,content,icon,emplacement}) => {
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
        <div ref={elementRef}  className={`card h-100 w-100 rounded-4 mx-auto ${isVisible ? 'showTop' : 'opacity-0'}`}>
            <div className="card-body">
                <h3 className="text-center mb-3 text-info-emphasis pb-2">
                    <i className={`fas ${icon} fa-2xl p-1`}/>{title}
                </h3>
                <p className="fs-5">
                    {content}
                </p>
            </div>
        </div>
    )

}

export default ValeurComponent