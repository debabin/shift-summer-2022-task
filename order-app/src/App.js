import './App.css';
import React from "react";
import { useForm } from 'react-hook-form';
import { FormPage } from './pages/form/form';

function App() {
  return  <FormPage />;
 /* document.body.style.backgroundColor = "black";
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const validateDate = (value) => {
    const selected = new Date(value).getFullYear();
    const now = new Date().getFullYear();
    console.log( now - selected >= 18)
    return now - selected >= 18;
  };
  const onSubmit = (d) => {
    console.log(d)
  }
  return (
    <div>
      <div className="title">
        <h2>
          Заявка на доставку
        </h2>
      </div>
      <form className="form-box" style={{backgroundColor: '#cecece'}} onSubmit={handleSubmit(onSubmit)}>


        <h2>Персональные данные получателя</h2>

        <label>Имя</label>
        <input {...register("firstName1", { required: true, 
          minLength: { value: 2, message: 'Ваше имя должно содержать более 2 букв'},
          maxLength: { value: 30, message: 'Ваше имя должно содержать не более 30 букв'}} )}/>
        <p>{errors.firstName1?.message}</p>

        <label>Фамилия</label>
        <input {...register("secondName1", { required: true, 
          minLength: { value: 2, message: 'Ваша фамилия должна содержать более 2 букв'},
          maxLength: { value: 30, message: 'Ваша фамилия должна содержать не более 30 букв'}} )}/>
        <p>{errors.secondName1?.message}</p>

        <label>Отчество</label>
        <input type="checkbox" name="checkPatronymic1" />        
        <input {...register("patronymic1", { required: true, 
          minLength: { value: 2, message: 'Ваше отчество должно содержать более 2 букв'},
          maxLength: { value: 30, message: 'Ваше отчество должно содержать не более 30 букв'}} )}/>
        <p>{errors.patronymic1?.message}</p>

        <label>Дата рождения</label>
        <input {...register("dateOfBirth1", {
          required: true,
          validate: validateDate})}
          type="date"
          min="1900-01-01"
        />
        <p>{errors.dateOfBirth1?.message}</p>

        <label>Адрес проживания</label>
        <input {...register("adress1", { required: true, 
          minLength: { value: 10, message: 'Поле должно содержать более 10 символов'},
          maxLength: { value: 50, message: 'Поле должно содержать не более 50 символов'}} )}/>
        <p>{errors.adress1?.message}</p>


        <h2>Персональные данные отправителя</h2>

        <label>Имя</label>
        <input {...register("firstName2", { required: true, 
          minLength: { value: 2, message: 'Ваше имя должно содержать более 2 букв'},
          maxLength: { value: 30, message: 'Ваше имя должно содержать не более 30 букв'}} )}/>
        <p>{errors.firstName2?.message}</p>

        <label>Фамилия</label>
        <input {...register("secondName2", { required: true, 
          minLength: { value: 2, message: 'Ваша фамилия должна содержать более 2 букв'},
          maxLength: { value: 30, message: 'Ваша фамилия должна содержать не более 30 букв'}} )}/>
        <p>{errors.secondName2?.message}</p>

        <label>Отчество</label>
        <input type="checkbox" name="checkPatronymic2" />        
        <input {...register("patronymic2", { required: true, 
          minLength: { value: 2, message: 'Ваше отчество должно содержать более 2 букв'},
          maxLength: { value: 30, message: 'Ваше отчество должно содержать не более 30 букв'}} )}/>
        <p>{errors.patronymic2?.message}</p>

        <label>Дата рождения</label>
        <input type="date" name="dateOfBirth2"  />

        <label>Адрес проживания</label>
        <input {...register("adress2", { required: true, 
          minLength: { value: 10, message: 'Поле должно содержать более 10 символов'},
          maxLength: { value: 50, message: 'Поле должно содержать не более 50 символов'}} )}/>
        <p>{errors.adress2?.message}</p>


        <h2>Адрес доставки</h2>

        <label>Город</label>
        <input {...register("city", { required: true, 
          minLength: { value: 2, message: 'Поле должно содержать более 2 символов'},
          maxLength: { value: 50, message: 'Поле должно содержать не более 50 символов'}} )}/>
        <p>{errors.city?.message}</p>

        <label>Улица</label>
        <input {...register("numberOfStreet", { required: true, 
          minLength: { value: 2, message: 'Поле должно содержать более 2 символов'},
          maxLength: { value: 60, message: 'Поле должно содержать не более 60 символов'}} )}/>
        <p>{errors.numberOfStreet?.message}</p>

        <label>Дом</label>
        <input {...register("numberOfBuilding", { required: true, 
          minLength: { value: 1, message: 'Поле должно содержать более 1 символов'},
          maxLength: { value: 10, message: 'Поле должно содержать не более 10 символов'}} )}/>
        <p>{errors.numberOfBuilding?.message}</p>

        <label>Квартира</label>
        <input {...register("numberOfFlat", { required: true, 
          minLength: { value: 1, message: 'Поле должно содержать более 1 символов'},
          maxLength: { value: 10, message: 'Поле должно содержать не более 10 символов'}} )}/>
        <p>{errors.numberOfFlat?.message}</p>

        <label>Заметка для курьера</label>
        <input type="textarea" {...register("notes1")} />


        <h2>Данные о посылке</h2>

        <label>Тип посылки</label>
        <select {...register("type", { required: true })}>
          <option value="letter">Письмо</option>
          <option value="valuableLetter">Ценное письмо</option>
          <option value="package1">Бандероль</option>
          <option value="package2">Мелкий пакет</option>
          <option value="package3">Посылка</option>
          <option value="valuablePackage">Ценная посылка</option>
        </select>

        <label>Примерный вес посылки</label>
        <input {...register("weight")} />

        <label>Заметка для курьера</label>
        <input type="textarea" {...register("numberOfFlat")} />

        <input type="submit" value="Отправить" />
      </form>
    </div>
  ); */
}

export default App;
