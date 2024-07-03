import React, {useEffect, useRef, useState} from 'react'
import {useMediaQuery} from "react-responsive";

const ElementShowTitle = ({title}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    const isXS = useMediaQuery({ query: "(max-width: 767px)" });

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
            <div ref={elementRef} className={`col-md-12 col-sm-12 p-2 color-aris ${isVisible ? 'arrow-div' : 'd-none'}`}>
                <h2 className="text-center fs-2 text-uppercase ">{title}</h2>
            </div>
            {/*<div ref={elementRef} className={`col-12 color-aris ${isVisible ? 'arrow-div' : 'd-none'}`}>*/}
            {/*    <div className="row w-100 p-0">*/}
            {/*        <div className={`${isXS ? 'd-none' : 'col w-100 px-0'}`}>*/}
            {/*            <div className="row m-0 p-0 w-100">*/}
            {/*                <div className="col-md-6 col-sm-12 px-0 pt-5 pb-3 bg-gradient-info-dark block-initial"/>*/}
            {/*                <div className={`${isXS ? 'd-none' : 'col-md-6 d-sm-none d-md-block'}`}>*/}
            {/*                    <div className=" row m-0 p-0 w-100">*/}
            {/*                        <div className="col-3 block-child-1 pt-5 pb-3 bg-gradient-info-dark"/>*/}
            {/*                        <div className="col-3 block-child pt-5 pb-3 bg-gradient-info-dark"/>*/}
            {/*                        <div className="col-3 block-child pt-5 pb-3 bg-gradient-info-dark"/>*/}
            {/*                        <div className="col-3 block-child pt-5 pb-3 bg-gradient-info-dark"/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="col w-100 pt-3">*/}
            {/*            <h2 className="text-center fs-2 text-uppercase ">{title}</h2>*/}
            {/*        </div>*/}
            {/*        <div className="col-lg d-sm-none d-lg-block w-100 bg-aris">*/}

            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default ElementShowTitle