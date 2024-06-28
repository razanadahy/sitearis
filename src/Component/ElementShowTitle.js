import React, {useEffect, useRef, useState} from 'react'

const ElementShowTitle = ({title}) => {
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
    return(
        <>
            {/*<div ref={elementRef} className={`col-md-10 col-sm-11 arrow-shape bg-gradient-info-dark pt-5  pb-3  text-white ${isVisible ? 'arrow-div' : 'd-none'}`}>*/}
            <div ref={elementRef} className={`col-md-10 col-sm-11 arrow-shape  pt-5  pb-3  color-aris ${isVisible ? 'arrow-div' : 'd-none'}`}>
                <h2 className="text-center fs-2 text-uppercase ">{title}</h2>
            </div>
        </>
    )
}

export default ElementShowTitle