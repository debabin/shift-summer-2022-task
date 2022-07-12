import  axios  from 'axios';
import { IOrder } from './../helpers/app.interface';

const mainURL = "https://shift-summer-2022-backend.herokuapp.com/api/create/order";

export default function createOrder(data:IOrder) {
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // };
  // fetch(
  //   "https://shift-summer-2022-backend.herokuapp.com/api/create/order",
  //   requestOptions
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log("recieved: ", data));
  return axios.post(mainURL, data, {headers: { "Content-Type": "application/json"}})
}
