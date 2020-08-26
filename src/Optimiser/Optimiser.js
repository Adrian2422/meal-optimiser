import React from 'react';
import Modal from './ProductModal/ProductModal';
import ProductsList from './ProductsList';
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
        <ProductsList />
      </div>
      <div className='content'></div>
      <Modal />
    </div>
  );
}

export default Optimiser;
