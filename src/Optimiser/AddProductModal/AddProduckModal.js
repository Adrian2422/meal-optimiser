import React from 'react';
import '../../css/AddProductModal.css';

function Modal() {

  const okButtonHandler = () => {
    document.querySelector('.modal').classList.toggle('modal--shown');
    document.querySelector('.modal').classList.toggle('modal--hidden');
  }
  const cancelButtonHandler = () => {
    document.querySelector('.modal').classList.toggle('modal--shown');
    document.querySelector('.modal').classList.toggle('modal--hidden');
  }
  const optionPickHandler = (event) => {
    alert(event.target.options[event.target.selectedIndex].innerText);

  }
  return (
    <div className='modal modal--hidden'>
      <div className='container'>
        <div className='productPick'>
          <select
          onChange={optionPickHandler}
          className='productPick__select--1'>
            <option disabled>---Choose type---</option>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Meat</option>
            <option>Drinks</option>
            <option>Fast-foods</option>
            <option>Desserts</option>
          </select>
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
