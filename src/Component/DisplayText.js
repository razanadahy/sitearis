import React, { useEffect, useRef, useState } from "react";

const DisplayText = () => {
    const elementRef = useRef(null);

    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Nous sommes là pour vous accompagner et collaborer avec vous!!!';
    const [hasStarted, setHasStarted] = useState(false);
    const [endTyping,setEndTyping]=useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const top = elementRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight && !hasStarted) {
                    setHasStarted(true);
                    setTimeout(() => {
                        let index = 0;
                        const intervalId = setInterval(() => {
                            setDisplayedText((prev) => {
                                if (index < fullText.length) {
                                    const nextChar = fullText[index];
                                    index += 1;
                                    return prev + nextChar;
                                } else {
                                    clearInterval(intervalId);
                                    setEndTyping(true)
                                    return prev;
                                }
                            });
                        }, 50);
                    }, 500);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasStarted, fullText]);

    return (
        <h2 ref={elementRef} className="typing"><i className="fa-solid fa-right-long p-2"/>{displayedText} {!endTyping && <span className="cursor">|</span>}</h2>
    );
}

export default DisplayText;
