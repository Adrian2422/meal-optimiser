import React from 'react';
import '../../css/ProductModal.css';
import Select from './Select';

const Modal = () => {

  const okButtonHandler = () => {
    document.querySelector('.modal').classList.toggle('modal--shown');
    document.querySelector('.modal').classList.toggle('modal--hidden');
  }
  const cancelButtonHandler = () => {
    document.querySelector('.modal').classList.toggle('modal--shown');
    document.querySelector('.modal').classList.toggle('modal--hidden');
  }
  return (
    <div className='modal modal--hidden'>
      <div className='container'>
        <div className='productPick'>
          <Select />
        </div>
        <div className='buttonBox'>
        <button 
        onClick={okButtonHandler}
        className='button--ok'>
          OK
        </button>
        <button
        onClick={cancelButtonHandler}
        className='button--cancel'>
          Cancel
        </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;
