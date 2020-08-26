import React from 'react';
import '../css/Start.css';

function Start() {

  const taskClickHandle = event => {
    alert(event.target.innerText);
  }
  return (
    <div className='start'>
      <div className='start__title'>
        <h1>Meal Optimiser</h1>
      </div>
      <div className='columns'>
      <div onClick={taskClickHandle} className='columns__left'>
        <p>Oblicz kalorie</p>
      </div>
      <div onClick={taskClickHandle} className='columns__right'>
        <p>Ułóż danie</p>
      </div>
      </div>
    </div>
  );
}

export default Start;
