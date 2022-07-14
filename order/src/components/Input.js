import React from 'react';

export const Input = ({ label, name, className, type, min, max, onChange, value, isRequired, props }) => {
    if (!className) {
        className = "input-wrapper"
    }
    //звёздочка для обязательных полей
    const asterisk = <span className="asterisk">*</span>
    return (
        <div className={className}>
            <label>{label}{isRequired && asterisk}</label>
            <input type={type}
                minLength={min}
                maxLength={max}
                min={min}
                max={max}
                value={value}
                name={name}
                onChange={onChange}
                required={isRequired}
                {...props}
            />
        </div>
    )
}
