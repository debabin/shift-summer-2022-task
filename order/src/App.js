import React from 'react';

import { OrderForm } from './components/OrderForm.js';

import pigeon from './carrier-pigeon.png';
import './App.css';

export const App = () => {
  return (
    <div className="content">
      <div className="side-div">
        <img src={pigeon} width="80%" className="side-logo" alt="Голубиная почта онлйан" title="Carrier pigeon icons created by Nikita Golubev - Flaticon" />
        <h1>Голубиная почта онлайн</h1>
      </div>
      <OrderForm />
    </div>
  )
}