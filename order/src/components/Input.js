import React from 'react';

export const Input = ({ label, name, type, min, max, onChange, value, col, row, isRequired, props }) => {
    const getCols = (col) => {
        if (Array.isArray(col)) {
            return [col[0], col[1]]
        }
        return [col, col]
    };
    const [colStart, colEnd] = getCols(col);

    //звёздочка для обязательных полей
    const asterisk = <span style={{ color: "#356FFF", fontWeight: 500 }}>*</span>
    return (
        <div className="input-wrapper" style={{ gridColumnStart: colStart, gridColumnEnd: colEnd, gridRow: row }}>
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
