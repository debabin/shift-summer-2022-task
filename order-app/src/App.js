import pic from './findName.png';
import './App.css';

function App() {
  document.body.style.backgroundColor = "black";
  const onSubmit = (d) => {
    alert(JSON.stringify())
  }
  return (
    <div>
      <div className="title">
        <h2>
          Заявка на доставку
        </h2>
      </div>
      <form className="form-box" style={{backgroundColor: '#cecece'}} onSubmit={onSubmit}>

        <h2>Персональные данные получателя</h2>
        <label>Имя</label>
        <input name="firstName" />
        <label>Фамилия</label>
        <input name="secondName" />
        <label>Отчество</label>
        <input type="checkbox" name="checkPatronymic" />        
        <input name="patronymic" />
        <label>Дата рождения</label>
        <input type="date" name="dateOfBirth" />
        <label>Адрес доставки</label>
        <input type="text" name="adress" />

        <h2>Персональные данные отправителя</h2>
        <label>Имя</label>
        <input name="firstName" />
        <label>Фамилия</label>
        <input name="secondName" />
        <label>Отчество</label>
        <input type="checkbox" name="checkPatronymic" />        
        <input name="patronymic" />
        <label>Дата рождения</label>
        <input type="date" name="dateOfBirth" />
        <label>Адрес доставки</label>
        <input type="text" name="adress" />

        <h2>Адрес доставки</h2>
        <label>Город</label>
        <input name="city" />
        <label>Улица</label>
        <input name="numberOfStreet" />
        <label>Дом</label>
        <input name="numberOfBuilding" />
        <label>Квартира</label>
        <input name="numberOfFlat" />

        <h2>Данные о посылке</h2>
        <label>Тип посылки</label>
        <input type="select" name="type" />
        <label>Примерный вес посылки</label>
        <input name="weight" />
        <label>Заметка для курьера</label>
        <input type="textarea" name="numberOfFlat" />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
