import React from 'react';

export const Input = ({ label, name, type, min, max, onChange, value, col, row, props }) => {
    var colStart = col;
    var colEnd = col;
    if (Array.isArray(col)) {
        colStart = col[0];
        colEnd = col[1];
    };
    return (
        <span style={{ gridColumnStart: colStart, gridColumnEnd: colEnd, gridRow: row }}>
            <label>{label}</label>
            {type === "text"
                ? (
                    <input type={type}
                        minLength={min}
                        maxLength={max}
                        value={value}
                        name={name}
                        onChange={onChange}
                        className="required"
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
                        className="required"
                        {...props}
                    />
                )
            }
        </span>
    )
}
