import React from 'react';
import '../../css/Select.css';

const Select = () => {

  const optionPickHandler = (event) => {
    alert(event.target.options[event.target.selectedIndex].innerText);
  }
  return (
    <div className='select'>
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
  )
}

export default Select;
