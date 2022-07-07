import React from 'react';
import pigeon from './carrier-pigeon.png';
import './App.css';
import { Form } from './components/form';




export const App = () => {
  return (
    <div id="content">
      <div id="side-div">
        <img src={pigeon} width="80%" id="side-logo" alt="Голубиная почта онлйан" title="Pigeon icons created by Nueng_wana - Flaticon" />
        <h1>Голубиная почта онлайн</h1>
      </div>
      <Form></Form>
    </div>
  )
}