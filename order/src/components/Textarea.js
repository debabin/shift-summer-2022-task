export const Textarea = ({ name, onChange, value }, props) => {

    return (
        <div className="input-wrapper comment">
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