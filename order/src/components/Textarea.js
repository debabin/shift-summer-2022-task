export const Textarea = ({ name, onChange, value, col, row }, props) => {
    const getCols = (col) => {
        if (Array.isArray(col)) {
            return [col[0], col[1]]
        }
        return [col, col]
    };
    const [colStart, colEnd] = getCols(col);
    return (
        <div className="input-wrapper" style={{ gridColumnStart: colStart, gridColumnEnd: colEnd, gridRow: row }}>
            <label>Заметка для курьера</label>
            <textarea
                placeholder="курлык-курлык"
                value={value}
                name={name}
                onChange={onChange}
                {...props}>
            </textarea>
        </div>
    )
}