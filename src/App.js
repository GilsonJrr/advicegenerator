import React, { useEffect, useState } from "react";

import './App.css';
import Blogo from '../src/img/Blogo.png'

import api from './services/api';

function App() {

  const [advice, setAdvice] = useState ([]);

  const refresh = () => {
    api
      .get("advice")
      .then((response) => setAdvice(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };
  
  useEffect(refresh, []);

  return (
    <div className="App">
      <div className='Back'>

        <p1>ADVICE #{advice.slip.id}</p1>
        <p2>" {advice.slip.advice} "</p2>

        <div className='Lines'>
          <div className='line'/>
          <div className='Cotes'/>
          <div className='Cotes'/>
          <div className='line'/>
        </div>

        <button onClick={refresh}>
          <img src={Blogo}/>
        </button>
        
      </div>
    </div>
  );
}

export default App;
