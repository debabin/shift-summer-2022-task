import React from 'react';

export const Checkbox = ({ label, name, setFormState, formState }) => {
    const [checkboxState, setCheckboxState] = React.useState(false);
    const handleChangeCheckbox = (event) => {
        // если выбран чекбокс, предыдущий инпут (для ввода отчества) становится неактивным
        const block = event.target.parentNode.parentNode.parentNode.id;
        setFormState({ ...formState, [block]: { ...formState[block], noMiddlename: checkboxState } });
        if (event.target.checked) {
            setCheckboxState(true);
        }
        else {
            setCheckboxState(false);
        }
    };

    return (
        <div className="input-wrapper">
            <label>{label}</label>
            <input type="checkbox"
                name={name}
                value={checkboxState}
                onChange={handleChangeCheckbox}
            />
        </div>
    )
}
