import React from 'react';
import axios from 'axios';

import { Input } from './Input.js';
import { Checkbox } from './Checkbox.js';
import { Textarea } from './Textarea.js';
import { Select } from './Select.js';
import { Button } from './Button.js';
import { OrderDetails } from './OrderDetails.js';
import { getMaxDate } from '../helpers/getMaxDate.js';

import toast, { Toaster } from 'react-hot-toast';

export const OrderForm = () => {
    const maxDate = getMaxDate();
    const minDate = '1900-01-01';
    const [formState, setFormState] = React.useState(
        {
            sender: { firstname: "", lastname: "", middlename: "", noMiddlename: "", birthDate: "", registrationAdress: "" },
            receiver: { firstname: "", lastname: "", middlename: "", noMiddlename: "", birthDate: "", registrationAdress: "" },
            address: { city: "", street: "", house: "", apartment: "", comment: "" },
            package: { type: "", weight: "", comment: "" }
        });

    const handleChange = (event) => {
        const { name, parentNode, value } = event.target;
        const block = parentNode.parentNode.id;
        setFormState({ ...formState, [block]: { ...formState[block], [name]: value } });
    };

    const handleChangeDate = (event) => {
        handleChange(event);
        validateDate(event.target);
    };

    const handleChangeCheckbox = (event) => {
        // если выбран чекбокс, предыдущий инпут (для ввода отчества) становится неактивным
        handleChange(event);
        const [label, input] = event.target.parentNode.previousElementSibling.children;
        if (event.target.checked) {
            input.disabled = true;
            label.style.color = "#858585";
        }
        else {
            input.disabled = false;
            label.style.color = "#000";
        }
        console.log(formState.sender.noMiddlename)
    };

    // валидация даты рождения
    const validateDate = (element) => {
        if (element.value > maxDate) {
            return element.setCustomValidity("Возраст должен быть не меньше 18.");
        }
        if (element.value < minDate) {
            return element.setCustomValidity("Дата рождения должна быть не ранее 01.01.1900.");
        }
        return element.setCustomValidity("");

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const localhost = "http://localhost:3000/";
        //const heroku = "https://shift-summer-2022-backend.herokuapp.com/";
        //const reqres = "https://reqres.in/";
        const url = localhost + "api/create/order";
        sendRequest(JSON.stringify({ order: formState }), url);
    };

    const sendRequest = (data, url) => {
        const instance = axios.create();
        const promise = instance.post(url, data, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        toast.promise(promise, {
            loading: 'loading',
            success: " Спасибо! Ваш заказ принят.",
            error: (err) => getErrorMessage(err)
        });
        promise.then(response => { getOrderDetails(response); })
    };

    const getErrorMessage = (err) => {
        console.log(err.response)
        if (err.response.data) {
            return (err.response.data.data.sender.firstname)
        }
        else {
            return "Упс! Кажется, что-то пошло не так. Приносим свои извинения."
        }
    };

    const getOrderDetails = (response) => {
        const data = response.data.data.order;
        return (toast(
            <OrderDetails data={data} />,
            {
                duration: 10000,
            }))
    };

    return (
        <form id="order-form" name="order_form" onSubmit={handleSubmit} onChange={handleChange}>
            <div><Toaster /></div>
            <h2 id="page-title">Заявка на доставку</h2>
            <p className="form-unit-title">Персональные данные отправителя </p><hr />
            <div className="form-elements" id="sender">
                <Input label="Имя" type="text" min={2} max={30} onChange={handleChange} value={formState.sender.firstname} name="firstname" isRequired={true} />
                <Input label="Фамилия" type="text" min={2} max={30} onChange={handleChange} value={formState.sender.lastname} name="lastname" isRequired={true} />
                <Input label="Отчество" type="text" min={2} max={30} onChange={handleChange} value={formState.sender.middlename} name="middlename" isRequired={false} />
                <Checkbox label="Нет отчества" value={formState.sender.noMiddlename} onChange={handleChangeCheckbox} name="noMiddlename" />
                <Input label="Дата рождения" type="date" min={minDate} max={maxDate} onChange={handleChangeDate} value={formState.sender.birthDate} name="birthDate" isRequired={true} />
                <Input label="Адрес проживания" type="text" min={10} max={50} onChange={handleChange} value={formState.sender.registrationAdress} name="registrationAdress" className="input-wrapper address" isRequired={false} />
            </div>
            <p className="form-unit-title">Персональные данные получателя</p><hr />
            <div className="form-elements" id="receiver">
                <Input label="Имя" type="text" min={2} max={30} onChange={handleChange} value={formState.receiver.firstname} name="firstname" isRequired={true} />
                <Input label="Фамилия" type="text" min={2} max={30} onChange={handleChange} value={formState.receiver.lastname} name="lastname" isRequired={true} />
                <Input label="Отчество" type="text" min={2} max={30} onChange={handleChange} value={formState.receiver.middlename} name="middlename" isRequired={false} />
                <Checkbox label="Нет отчества" value={formState.receiver.noMiddlename} onChange={handleChangeCheckbox} name="noMiddlename" isRequired={false} />
                <Input label="Дата рождения" type="date" min={minDate} max={maxDate} onChange={handleChangeDate} value={formState.receiver.birthDate} name="birthDate" isRequired={true} />
                <Input label="Адрес проживания" type="text" min={10} max={50} onChange={handleChange} value={formState.receiver.registrationAdress} name="registrationAdress" className="input-wrapper address" isRequired={false} />
            </div>
            <p className="form-unit-title">Адрес доставки </p><hr />
            <div className="form-elements" id="address">
                <Input label="Город" type="text" min={2} max={50} onChange={handleChange} value={formState.address.city} name="city" isRequired={true} />
                <Input label="Улица" type="text" min={2} max={60} onChange={handleChange} value={formState.address.street} name="street" isRequired={true} />
                <Input label="Дом" type="text" min={1} max={10} onChange={handleChange} value={formState.address.house} name="house" isRequired={true} />
                <Input label="Квартира" type="text" min={1} max={10} onChange={handleChange} value={formState.address.apartment} name="apartment" isRequired={true} />
                <Textarea onChange={handleChange} value={formState.address.comment} name="comment" isRequired={false} />
            </div>
            <p className="form-unit-title">Данные о посылке </p><hr />
            <div className="form-elements" id="package">
                <Select label="Тип посылки" onChange={handleChange} value={formState.package.type} name="type" isRequired={true}>
                    <option>письмо</option>
                    <option>ценное письмо</option>
                    <option>бандероль</option>
                    <option>мелкий пакет</option>
                    <option>посылка</option>
                    <option>ценная посылка</option>
                </Select>
                <Input label="Примерный вес посылки" type="number" min={0.1} max={20} onChange={handleChange} value={formState.package.weight} name="weight" props={{ step: "any" }} isRequired={true} />
                <Textarea onChange={handleChange} value={formState.package.comment} name="comment" isRequired={false} />
            </div>
            <Button type="submit">Заказать доставку</Button>
        </form>
    )
}