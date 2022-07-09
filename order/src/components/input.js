import React from 'react';

export const Input = ({ label, name, type, min, max, onChange, value, col, row, isRequired, props }) => {
    var colStart = col;
    var colEnd = col;
    if (Array.isArray(col)) {
        colStart = col[0];
        colEnd = col[1];};
    if (isRequired)
    {
        var asterisk = <span style={{color:"#356FFF", fontWeight:500}}>*</span>
    }
    else {
        var asterisk = ""
    }
    
    return (
        <span style={{ gridColumnStart: colStart, gridColumnEnd: colEnd, gridRow: row }}>
            <label>{label}{asterisk}</label>
            {type === "text"
                ? (
                    <input type={type}
                        minLength={min}
                        maxLength={max}
                        value={value}
                        name={name}
                        onChange={onChange}
                        required={isRequired}
                        {...props}
                    />
                )
                : (
                    <input type={type}
                        min={min}
                        max={max}
                        value={value}
                        name={name}
                        onChange={onChange}
                        required={isRequired}
                        {...props}
                    />
                )
            }
        </span>
    )
}
