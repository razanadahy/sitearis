import React, {useCallback} from "react";
import  '../../Page/IconCss.css'

const IconFooter = ({isVisible=true}) => {
    const handleClick = useCallback((e) => {
        e.preventDefault();
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${'contact@aris-cc.com'}`;
        window.open(mailtoUrl, '_blank');
    },[])
    return(
        <>
            <div className={`${isVisible ? 'position-fixed shadow pst-icon rounded-top-start p-2 z-3 rounded-bottom-end bg-footer d-flex': 'd-none'}`}>
                <ul className="list-group position-relative">
                    <li className={`list-group-item comp mb-1 cursor-pointer rounded-circle w-h-30 bg-li border-0 d-flex justify-content-center align-items-center `}>
                        <a href="https://www.linkedin.com/in/aris-concept-company-567703240" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin-in fn-6"/>
                        </a>
                    </li>
                    <li className={`list-group-item comp mb-1 cursor-pointer rounded-circle w-h-30 bg-li border-0 d-flex justify-content-center align-items-center`}>
                        <a href={`mailto:${'contact@aris-cc.com'}`} onClick={handleClick}>
                            <i className="fa-solid fa-at fn-6"/>
                        </a>
                    </li>
                    <li className={`list-group-item comp mb-1 cursor-pointer rounded-circle w-h-30 bg-li border-0 d-flex justify-content-center align-items-center`}>
                        <a  href="https://wa.me/+261385340534" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp fn-6"/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default IconFooter