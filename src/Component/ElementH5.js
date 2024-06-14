import React, {useEffect, useRef, useState} from 'react'

const ElementH5 = ({stylePositionTop,texte,isWhite=true}) => {
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
        <h5 ref={elementRef}
            className={`${isWhite ? 'text-white' : 'text-black'} ${isVisible ? stylePositionTop ? 'showTop' : 'arrow-div' : ''}`}
            style={{opacity: isVisible ? 1 : 0 }}
        >
            {texte}
        </h5>
    )
}
export default ElementH5