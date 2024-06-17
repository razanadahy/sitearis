import React, { useEffect, useRef, useState } from "react";

const DisplayText = () => {
    const elementRef = useRef(null);
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Nous sommes là pour vous accompagner et collaborer avec vous!!!';
    const [endTyping,setEndTyping]=useState(false)

    const [isVisible, setIsVisible] = useState(false);

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

    const [isDisplayed,setIsDisplay]=useState(false)
    useEffect(() => {
        if (isVisible && !isDisplayed){
            setDisplayedText('')
            let index = 0;
            const startInterval = () => {
                const intervalId = setInterval(() => {
                    setDisplayedText((prev) => {
                        if (index < fullText.length) {
                            const nextChar = fullText[index];
                            index += 1;
                            return prev + nextChar;
                        } else {
                            setEndTyping(true)
                            setIsDisplay(true)
                            clearInterval(intervalId);
                            return prev;
                        }
                    });
                }, 50);
            };

            const timeoutId = setTimeout(startInterval, 900);

            return () => {
                clearTimeout(timeoutId);
            };
        }

    }, [isVisible]);

    return (
        <h2 ref={elementRef} className="typing font-consolas"><i className="fa-solid fa-right-long p-2"/>{displayedText} {!endTyping && <span className="cursor">|</span>}</h2>
    );
}

export default DisplayText;
