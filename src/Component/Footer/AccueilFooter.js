import React, {useCallback} from "react";
import IconFooter from "./IconFooter";
import waveFooter from "../../Asset/bg-footer.svg";
import logo from "../../Asset/icon.png";

const AccueilFooter = () => {
    const handleClick = useCallback((e) => {
        e.preventDefault();
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${'contact@aris-cc.com'}`;
        window.open(mailtoUrl, '_blank');
    },[])
    return (
        <>
            <IconFooter/>
            <div className="mt-5 p-4 w-100 bg-dark-blue text-white small" style={{backgroundImage: `url('${waveFooter}')`,backgroundSize: 'cover',backgroundPosition: 'center', width:'100%', minHeight: '50vh'}}>
                <div className="row w-100 mx-0 mt-2 mb-0 p-0">
                    <div className="col-3">
                        <div className="w-100 d-inline-flex align-items-center">
                            <img src={logo} alt="logo" className="img-fluid me-3" width={40}/>
                            <h4 className="mb-0 fs-4 fw-bold">
                                <strong style={{ color: '#D10D58' }}>Aris </strong> <strong style={{ color: '#0e8de8' }}>Concept</strong>
                            </h4>
                        </div>
                        <ul className="list-inline d-md-block d-sm-flex align-items-sm-center flex-sm-column mb-0">
                            <li className="list-inline-item p-2 rounded-2 d-flex align-items-stretch cursor-pointer" style={{ height: '50px' }}>
                                <div className="h-100 d-flex align-items-center flex-shrink-0">
                                    <i className="fa fa-location-dot fa-2x"/>
                                </div>
                                <div className="h-100 d-flex align-items-center flex-grow-1">
                                    <span className="ms-2">Iavoloha, Antananarivo 102</span>
                                </div>
                            </li>
                            <li className="list-inline-item p-2 rounded-2 d-flex align-items-stretch cursor-pointer" style={{ height: '50px' }}>
                                <div className="h-100 d-flex align-items-center flex-shrink-0" style={{height: '100%'}}>
                                    <i className="fa fa-phone fa-2x"/>
                                </div>
                                <div className="h-100 d-flex align-items-center flex-grow-1">
                                    <a  href="https://wa.me/+261385340534" target="_blank" rel="noopener noreferrer" className="ms-2 email-link">+261 38 53 405 34</a>
                                </div>
                            </li>
                            <li className="list-inline-item p-2 rounded-2 d-flex align-items-stretch cursor-pointer" style={{ height: '50px' }}>
                                <div className="h-100 d-flex align-items-center flex-shrink-0 ">
                                    <i className="far fa-envelope fa-2x"/>
                                </div>
                                <div className="h-100 d-flex align-items-center flex-grow-1">
                                    <a  href={`mailto:${'contact@aris-cc.com'}`} onClick={handleClick} className="ms-2 email-link">contact@aris-cc.com</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="col-3">
                        Lien
                    </div>
                    <div className="col-3">
                        Service
                    </div>
                    <div className="col-3">
                        News Letter
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccueilFooter