import React, {useEffect, useState} from "react";

const LiElement = ({navigate,lang,jobDetail, isVisible, index}) => {
    const [visible,setVisible]=useState(false)
    useEffect(()=>{
        let timeout;
        if (isVisible){
            timeout = setTimeout(()=>setVisible(true),index*100)
        }else{
            setVisible(false)
        }
        return () => clearTimeout(timeout);
    },[isVisible])
    return(
        <li onClick={()=>navigate(`/${lang}/service/${jobDetail.parentId}/${jobDetail.id}`)} className={`cursor-pointer scale ${visible ? 'showTop visible' : 'invisible'}`}><span> <i className="far fa-dot-circle text-aris me-1"/>{jobDetail.title[lang]}</span></li>
    )
}
export default LiElement