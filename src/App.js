import React, { useEffect, useState } from "react";

import './App.css';

import Blogo from '../src/img/Blogo.png'

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
  }, 500);

  return (
    <div className="App">
      <div className='Back'>

        { show &&
          <div className='Titles'>
            <p1>ADVICE #{advice.slip.id}</p1>
            <p2>" {advice.slip.advice} "</p2>
          </div>
        }

        <div className='Lines'>
          <div className='line'/>
          <div className='Cotes'/>
          <div className='Cotes'/>
          <div className='line'/>
        </div>

        <button onClick={refresh}>
          <img src={Blogo} alt="diceLogo" />
        </button>
        
      </div>
    </div>
  );
}

export default App;
