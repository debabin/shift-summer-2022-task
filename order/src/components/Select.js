export const Select = ({ label, name, children, onChange, value }) => {
    //звёздочка для обязательных полей
    const asterisk = <span className="asterisk">*</span>
    return (
        <div className="input-wrapper">
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