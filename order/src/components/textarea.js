import React from 'react';

export const Textarea = ({ name, onChange, value, col, row }, props) => {
    var colStart = col;
    var colEnd = col;
    if (Array.isArray(col)) {
        colStart = col[0];
        colEnd = col[1];
    };
    return (
        <span style={{ gridColumnStart: colStart, gridColumnEnd: colEnd, gridRow: row }}>
            <label>Заметка для курьера</label>
            <textarea
                placeholder="курлык-курлык"
                value={value}
                name={name}
                onChange={onChange}
                className="required"
                {...props}>
            </textarea>
        </span>
    )
}