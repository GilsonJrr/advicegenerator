import React, { useEffect, useState } from "react";

import './App.css';

import Dice from '../src/img/icon-dice.svg'

import api from './services/api';

function App() {

  const [advice, setAdvice] = useState ([]);
  const [show, setShow] = useState (false);

  const refresh = () => {
    
    async function LoadAdvice (){
      await api
      .get("advice")
      .then((response) => setAdvice(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    }

    LoadAdvice();

  };
  
  useEffect(refresh, []);

  setTimeout(() => {
    setShow(true)
  }, 1000);

  return (
    <div className="App">
      <div className='Back'>

        { show &&
          <div className='Titles'>
            <p1>ADVICE #{advice.slip.id}</p1>
            <p2>" {advice.slip.advice} "</p2>
          </div>
        }

        <div className="Divider"/>

        <button onClick={refresh}>
          <img src={Dice} alt="diceLogo" />
        </button>
        
      </div>
    </div>
  );
}

export default App;