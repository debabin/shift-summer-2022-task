import React from 'react';
import { Toaster } from 'react-hot-toast';

import { OrderForm } from './components/OrderForm.js';
import { OrderDetails } from './components/OrderDetails.js';

import pigeon from './images/carrier-pigeon.png';
import './App.css';

export const App = () => {
  const [state, setState] = React.useState({ isLoading: "", showForm: true, data: "" });

  return (
    <div className="content">
      <Toaster />
      <div className="side-div">
        <img src={pigeon} width="80%" className="side-logo" alt="Голубиная почта онлйан" title="Carrier pigeon icons created by Nikita Golubev - Flaticon" />
        <h1>Голубиная почта онлайн</h1>
      </div>
      {state.showForm ?
        <OrderForm setState={setState} />
        :
        <OrderDetails data={state.data} setState={setState} />}
    </div>
  )
}