import React from "react";
import "./FormInput.css";

export const FormInput = ({type="text", isInvalid=false,label, ...props }) => {
    return (
        <>
            <div className="form-input">
                <label htmlFor={props.id} className="form-label pb-0 mb-0">
                    {label}
                </label>
                <div className="position-relative bg-danger">
                    <input id={props.id} type={type} className={`input-field w-100 ${isInvalid ? 'border-bottom-invalid' : 'border-bottom-grey'}`} {...props}  aria-label={label}/>
                    {isInvalid && (
                        <i className="bi bi-exclamation-circle icon-danger"/>
                    )}
                </div>
            </div>
        </>
    )
}
export const FormSelect = ({label,...props}) => {
    return(
        <>
            <div className="form-input">
                <label htmlFor={props.id} className="form-label pb-0 mb-0">{label}</label>
                <div className="custom-select-wrapper">
                    <select {...props} id={props.id} className="custom-select">
                        {props.children}
                    </select>
                </div>
            </div>
        </>
    )
}
export const FormTextarea = ({ label, ...props }) => {
    return (
        <div className="form-input">
            <label htmlFor={props.id} className="form-label pb-0 mb-0">
                {label}
            </label>
            <textarea id={props.id} rows={3} className="textarea-field" {...props} aria-label={label}/>
        </div>
    );
}