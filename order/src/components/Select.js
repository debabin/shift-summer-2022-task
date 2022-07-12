export const Select = ({ label, name, children, onChange, value, col, row }) => {
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
            <label>{label}{asterisk}</label>
            <select
                value={value}
                name={name}
                onChange={onChange}
                required>
                <option value="">---</option>
                {children}
            </select>
        </div>
    )
}