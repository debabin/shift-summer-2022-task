import  axios  from 'axios';
import { IOrder } from '../helpers/interfaces';

const mainURL = "http://localhost:3000/api/create/order";

export default function createOrder(data:IOrder) {
  return axios.post(mainURL, data, {headers: { "Content-Type": "application/json"}})
}
