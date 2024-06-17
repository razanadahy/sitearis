import React, {useEffect, useRef, useState} from "react";

const TraitementComponent = ({title,content,emplacement}) => {
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
        <div ref={elementRef} className={`card h-100 border-0 mx-auto w-100 ${isVisible ? 'showTop' : 'opacity-0'}`}>
            <div className="card-body">
                <h3 className="text-center mb-3 text-info">{title}</h3>
                <div className="row w-100">
                    <p className="fs-5">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default TraitementComponent