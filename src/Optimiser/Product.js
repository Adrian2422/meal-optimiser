import React from 'react';
import '../css/Product.css';

const Product = props => {
  const deleteBtnHandler = event => {
    const eventTarget = event.target;
    eventTarget.closest('.product').classList.add('product--deleted');
    setTimeout(() => {
      eventTarget.closest('.product').remove();
    }, 1000);
  }
  return (
    <div className='product'>
      <div className='product__container'>
  <h2 className='product__title'>{props.title}</h2>
  <p className='product__mass'>{props.mass}</p>
      </div>
      <button
        onClick={deleteBtnHandler}
        className='product__deleteBtn'>
      </button>
    </div>
  );
}

export default Product;
