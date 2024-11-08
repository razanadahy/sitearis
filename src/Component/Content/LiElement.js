import React, { useState} from "react";
import StepLi from "../../FunctionComponent/StepLi";

const LiElement = ({navigate,lang,jobDetail, isVisible, index}) => {
    const [visible,setVisible]=useState(false)
    return(
        <StepLi index={index} isVisible={isVisible} setTurnOn={setVisible}>
            <li onClick={()=>navigate(`/${lang}/service/${jobDetail.parentId}/${jobDetail.id}`)} className={`cursor-pointer scale ${visible ? 'showTop visible' : 'invisible'}`}><span> <i className="far fa-dot-circle text-aris me-1"/>{jobDetail.title[lang]}</span></li>
        </StepLi>
    )
}
export default LiElement