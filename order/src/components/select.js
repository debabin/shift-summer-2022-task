import React from 'react';

export const Select = ({ label, name, children, onChange, value, col, row }) => {
    var colStart = col;
    var colEnd = col;
    if (Array.isArray(col)) {
        colStart = col[0];
        colEnd = col[1];
    };
    return (
        <span style={{ gridColumnStart: colStart, gridColumnEnd: colEnd, gridRow: row }}>
            <label>{label}</label>
            <select
                value={value}
                name={name}
                onChange={onChange}
                className="required">
                {children}
            </select>
        </span>
    )
}