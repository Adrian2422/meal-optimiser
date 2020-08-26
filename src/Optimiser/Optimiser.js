import React from 'react';
import Modal from './AddProductModal/AddProduckModal';
import '../css/Optimiser.css';

function Optimiser() {

  const listButtonHandler = () => {
    document.querySelector('.modal').classList.toggle('modal--shown');
    document.querySelector('.modal').classList.toggle('modal--hidden');
  }
  return (
    <div className='optimiser'>
      <div className='list'>
        <button 
        onClick={listButtonHandler}
        className='list__button'>
          Add product
        </button>
      </div>
      <div className='content'></div>
      <Modal />
    </div>
  );
}

export default Optimiser;
