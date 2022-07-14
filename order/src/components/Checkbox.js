import React from 'react';

export const Checkbox = ({ label, name, value, onChange }) => {
    return (
        <div className="input-wrapper">
            <label>{label}</label>
            <input type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
