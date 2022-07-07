import pigeon from './carrier-pigeon.png';
import './App.css';
import axios from 'axios';
import {Input} './components/input.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    var maxDate = (today.getFullYear()-18)+'-'+today.getMonth()+'-'+today.getDate();
    this.state = {sender:{},receiver:{},address:{},package:{}};
    this.maxDate = maxDate;
    this.minDate = '1900-01-01'
    this.disablePrev  = this.disablePrev.bind(this);
    this.validateDate = this.validateDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.addState = this.addState.bind(this);
  }
  handleKeyPress(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    }
  }

  handleChange(event) {}
    

  addState (element) {
    var block = element.parentNode.parentNode.id;
    var name = element.name;
    if (name!=='no_middlename'&element.value!=="") {
  this.setState(previousState => {return {[block]: {...previousState[block], [name]: element.value}}})
    ;}
    else if (name ==='weight'){
      this.setState(previousState => {return {[block]: {...previousState[block], [name]: 0}}});}
   else if (name!=='no_middlename'){
    this.setState(previousState => {return {[block]: {...previousState[block], [name]: ""}}});
  };
    }

  disablePrev(event) {
  var input = event.target.parentNode.previousElementSibling.children[1];
  if (event.target.checked) {
      input.disabled = true; 
  }
  else {
      input.disabled = false; 
  }
 }
 validateDate(event) {
  if (event.target.value>this.maxDate){
    event.target.setCustomValidity("Возраст должен быть больше 18.");
    event.target.reportValidity();
  }
 }

handleSubmit(event){
  event.preventDefault();
  const blocks = document.getElementsByClassName("form-elements");
  for (let i=0; i<blocks.length; i++) {
    const spans = blocks[i].children;
    for (let j=0; j<spans.length; j++) {
    this.addState(spans[j].children[1]);
  }};
  const data = this.state;
  axios.post('http://localhost:3000/api/create/order',data)
      .then(response => this.setState({ orderId: response.data.id }))
      .catch(function (error) {console.log(error)})
}

componentDidMount(event) {
  const data = this.state;
  axios.get('http://localhost:3000/api/create/order')
      .then(response => this.setState({ orderId: response.data.id }))
      .catch(function (error) {console.log(error)})
  }



  render() {
    return (
      <div id="content">
      <div id="side-div">
        <img src={pigeon} width="80%" id="side-logo" alt="Голубиная почта онлйан" title="Pigeon icons created by Nueng_wana - Flaticon" />
        <h1>Голубиная почта онлайн</h1>
      </div>
      
      <form id="order-form" name="order_form" onSubmit={this.handleSubmit} onKeyPress={this.handleKeyPress} onChange={this.handleChange}>
        <h2 id="page-title">Заявка на доставку</h2>
        <p className="form-unit-title">Персональные данные отправителя </p><hr/>
          <div className="form-elements" id="sender">
              <span style={{gridColumn: 1, gridRow: 1}}><label>Имя*</label><input type="text" minLength="2" maxLength="30" value={this.state.sender_firstname} name="firstname" className="required"/></span>
              <span style={{gridColumn: 2, gridRow: 1}}><label>Фамилия*</label><input type="text" minLength="2" maxLength="30" value={this.state.sender_lastname} name="lastname" className="required"/></span>
              <span style={{gridColumn: 3, gridRow: 1}}><label>Отчество</label><input type="text" minLength="2" maxLength="30" value={this.state.sender_middlename} name="middlename"/></span>
              <span style={{gridColumn: 4, gridRow: 1}}><label>Нет отчества</label><input type="checkbox" onChange={this.disablePrev}  name="no_middlename"/></span>
              <span style={{gridColumn: 1, gridRow: 2}}><label>Дата рождения*</label><input type="date" min="1900-01-01" max={this.maxDate} onBlur={this.validateDate} value={this.state.sender_birthDate} name="birthDate" className="required"/></span>
              <span style={{gridColumn: 2+'/'+5, gridRow: 2}}><label>Адрес проживания</label><input type="text" minLength="10" maxLength="50" style={{width:100+'%'}} value={this.state.sender_registrationAdress} name="registrationAdress"/></span>
          </div>

          <p className="form-unit-title">Персональные данные получателя</p><hr/>
          <div className="form-elements" id="receiver">
              <span style={{gridColumn: 1, gridRow: 1}}><label>Имя*</label><input type="text" minLength="2" maxLength="30" value={this.state.receiver_firstname} name="firstname" className="required"/></span>
              <span style={{gridColumn: 2, gridRow: 1}}><label>Фамилия*</label><input type="text" minLength="2" maxLength="30" value={this.state.receiver_lastname} name="lastname" className="required"/></span>
              <span style={{gridColumn: 3, gridRow: 1}}><label>Отчество</label><input type="text" minLength="2" maxLength="30" value={this.state.receiver_middlename} name="middlename"/></span>
              <span style={{gridColumn: 4, gridRow: 1}}><label>Нет отчества</label><input type="checkbox" onChange={this.disablePrev} name="no_middlename"/></span>
              <span style={{gridColumn: 1, gridRow: 2}}><label>Дата рождения*</label><input type="date" min="1900-01-01" max={this.maxDate} onBlur={this.validateDate} value={this.state.receiver_birthDate} name="birthDate" className="required"/></span>
              <span style={{gridColumn: 2+'/'+5, gridRow: 2}}><label>Адрес проживания</label><input type="text" minLength="10" maxLength="50" style={{width:100+'%'}} value={this.state.receiver_registrationAdress} name="registrationAdress"/></span>
          </div>
          <p className="form-unit-title">Адрес доставки </p><hr/>
          <div className="form-elements" id="address">
              <span style={{gridColumn: 1, gridRow: 1}}><label>Город*</label><input type="text" minLength="2" maxLength="50" value={this.state.city} name="city" className="required"/></span>
              <span style={{gridColumn: 2, gridRow: 1}}><label>Улица*</label><input type="text" minLength="2" maxLength="60" value={this.state.street} name="street" className="required"/></span>
              <span style={{gridColumn: 3, gridRow: 1}}><label>Дом*</label><input type="text" minLength="1" maxLength="10" value={this.state.house} name="house" className="required"/></span>
              <span style={{gridColumn: 4, gridRow: 1}}><label>Квартира*</label><input type="text" minLength="1" maxLength="10" value={this.state.apartment} name="apartment" className="required"/></span>
              <span style={{gridColumn: 1+'/'+5, gridRow: 2}}><label>Заметка для курьера</label><textarea placeholder="курлык-курлык" value={this.state.address_comment} name="comment"></textarea></span>
          </div>
          <p className="form-unit-title">Данные о посылке </p><hr/>
          <div className="form-elements" id="package">
              <span style={{gridColumn: 1, gridRow: 1}}><label>Тип посылки*</label><select value={this.state.type} name="type" className="required">
                  <option>письмо</option>
                  <option>ценное письмо</option>
                  <option>бандероль</option>
                  <option>мелкий пакет</option>
                  <option>посылка</option>
                  <option>ценная посылка</option>
              </select></span>
              <span style={{gridColumn: 2, gridRow: 1}}><label>Примерный вес посылки*</label><input type="number" step="any" min="0.1" max="20" value={this.state.weight} name="weight" className="required"/></span>
              <span style={{gridColumn: 1+'/'+5, gridRow: 2}}><label>Заметка для курьера</label><textarea placeholder="курлык-курлык" value={this.state.package_comment} name="comment"></textarea></span>
          </div>
          <input type="submit" value="Заказать доставку"/>
          </form>
          </div>


    );
  }
}

export default App;
