import { Input } from './input.js';
import { Textarea } from './textarea.js';
import { Select } from './select.js';
import {Button} from './button.js';

import React from 'react';
import axios from 'axios';




export const Form = () => {
    //получаем максимальную дату рождения для возраста >= 18 лет
    const getMaxDate = () => {
        const today = new Date();
        let yyyy = today.getFullYear() - 18;
        let mm = today.getMonth();
        let dd = today.getDay();
        if (mm < 10) mm = '0' + mm;
        if (dd < 10) dd = '0' + dd;
        return yyyy + "-" + mm + "-" + dd
    };
    const maxDate = getMaxDate();
    const minDate = '1900-01-01';


    const [formState, setFormState] = React.useState(
        {
            sender: { firstname: "", lastname: "", middlename: "", noMiddlename: "", birthDate: "", registrationAdress: "" },
            receiver: { firstname: "", lastname: "", middlename: "", noMiddlename: "", birthDate: "", registrationAdress: "" },
            address: { city: "", street: "", house: "", apartment: "", comment: "" },
            package: { type: "", weight: "", comment: "" }
        });

    // форма не должна отправляться при нажатии на enter
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    };

    const handleChange = (event) => {
        const element = event.target;
        const block = element.parentNode.parentNode.id;
        const field = element.name;
        const previousState = formState;
        const value = element.value;
        setFormState({ ...previousState, [block]: { ...previousState[block], [field]: value } });
        if (element.type === "checkbox") {
            disablePrev(element);
        }
        else if (element.type === "date") {
            validateDate(element);
        };
    };

    // если выбран чекбокс, предыдущий инпут (для ввода отчества) становится неактивным
    const disablePrev = (element) => {
        var input = element.parentNode.previousElementSibling.children[1];
        if (element.checked) {
            input.disabled = true;
        }
        else {
            input.disabled = false;
        }
    };

    // валидация даты рождения
    const validateDate = (element) => {
        if (element.value > maxDate) {
            element.setCustomValidity("Возраст должен быть не меньше 18.");
        }
        else if (element.value < minDate) {
            element.setCustomValidity("Дата рождения должна быть не ранее 01.01.1900.");
        }
        else {
            element.setCustomValidity("");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //const localhost = "http://localhost:3000/";
        const heroku = "https://shift-summer-2022-backend.herokuapp.com/";
        //const reqres = "https://reqres.in/";
        const apiLink = "api/create/order";
        const apiUrl = heroku + apiLink;
        const data = JSON.stringify({ order:formState });
        console.log(typeof data);
        sendRequest(data, apiUrl);
    }

// отправка запроса на сервер
    const sendRequest = (data, apiUrl) => {
        const successMessage = " Спасибо! Ваш заказ принят.";
        const errorMessage = "Упс! Кажется, что-то пошло не так. Приносим свои извинения.";
        axios.post(apiUrl, data, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(response => { console.log(response); alert(successMessage) })
        .catch(function (error) { console.log(error); alert(errorMessage) })
    };

    return (
        <form id="order-form" name="order_form" onSubmit={handleSubmit} onKeyPress={handleKeyPress} onChange={handleChange}>
            <h2 id="page-title">Заявка на доставку</h2>
            <p className="form-unit-title">Персональные данные отправителя </p><hr />
            <div className="form-elements" id="sender">
                <Input col={1} row={1} label="Имя*" type="text" min={2} max={30} onChange={handleChange} value={formState.sender.firstname} name="firstname" isRequired={true}/>
                <Input col={2} row={1} label="Фамилия*" type="text" min={2} max={30} onChange={handleChange} value={formState.sender.lastname} name="lastname" isRequired={true}/>
                <Input col={3} row={1} label="Отчество" type="text" min={2} max={30} onChange={handleChange} value={formState.sender.middlename} name="middlename" isRequired={false} />
                <Input col={4} row={1} label="Нет отчества" type="checkbox" onChange={handleChange} value={formState.sender.noMiddlename} name="noMiddlename" isRequired={false}/>
                <Input col={1} row={2} label="Дата рождения*" type="date" min={minDate} max={maxDate} onChange={handleChange} value={formState.sender.birthDate} name="birthDate" isRequired={true}/>
                <Input col={[2, 5]} row={2} label="Адрес проживания" type="text" min={10} max={50} onChange={handleChange} value={formState.sender.registrationAdress} name="registrationAdress" props={{ style: { width: 100 + '%' } }} isRequired={false}/>
            </div>

            <p className="form-unit-title">Персональные данные получателя</p><hr />
            <div className="form-elements" id="receiver">
                <Input col={1} row={1} label="Имя*" type="text" min={2} max={30} onChange={handleChange} value={formState.receiver.firstname} name="firstname" isRequired={true}/>
                <Input col={2} row={1} label="Фамилия*" type="text" min={2} max={30} onChange={handleChange} value={formState.receiver.lastname} name="lastname" isRequired={true}/>
                <Input col={3} row={1} label="Отчество" type="text" min={2} max={30} onChange={handleChange} value={formState.receiver.middlename} name="middlename" isRequired={false}/>
                <Input col={4} row={1} label="Нет отчества" type="checkbox" onChange={handleChange} value={formState.receiver.noMiddlename} name="noMiddlename" isRequired={false}/>
                <Input col={1} row={2} label="Дата рождения*" type="date" min={minDate} max={maxDate} onChange={handleChange} value={formState.receiver.birthDate} name="birthDate" isRequired={true}/>
                <Input col={[2, 5]} row="2" label="Адрес проживания" type="text" min={10} max={50} onChange={handleChange} value={formState.receiver.registrationAdress} name="registrationAdress" props={{ style: { width: 100 + '%' } }} isRequired={false}/>
            </div>
            <p className="form-unit-title">Адрес доставки </p><hr />
            <div className="form-elements" id="address">
                <Input col={1} row={1} label="Город*" type="text" min={2} max={50} onChange={handleChange} value={formState.address.city} name="city" isRequired={true}/>
                <Input col={2} row={1} label="Улица*" type="text" min={2} max={60} onChange={handleChange} value={formState.address.street} name="street" isRequired={true}/>
                <Input col={3} row={1} label="Дом*" type="text" min={1} max={10} onChange={handleChange} value={formState.address.house} name="house" isRequired={true}/>
                <Input col={4} row={1} label="Квартира*" type="text" min={1} max={10} onChange={handleChange} value={formState.address.apartment} name="apartment" isRequired={true}/>
                <Textarea col={[1, 5]} row={2} onChange={handleChange} value={formState.address.comment} name="comment" isRequired={false}/>
            </div>
            <p className="form-unit-title">Данные о посылке </p><hr />
            <div className="form-elements" id="package">
                <Select col={1} row={1} label="Тип посылки*" onChange={handleChange} value={formState.package.type} name="type" isRequired={true}>
                    <option>письмо</option>
                    <option>ценное письмо</option>
                    <option>бандероль</option>
                    <option>мелкий пакет</option>
                    <option>посылка</option>
                    <option>ценная посылка</option>
                </Select>
                <Input col={2} row={1} label="Примерный вес посылки*" type="number" min={0.1} max={20} onChange={handleChange} value={formState.package.weight} name="weight" props={{ step: "any" }} isRequired={true}/>
                <Textarea col={[1, 5]} row={2} onChange={handleChange} value={formState.package.comment} name="comment" isRequired={false}/>
            </div>
            <Button>Заказать доставку</Button>
        </form>
    )
}