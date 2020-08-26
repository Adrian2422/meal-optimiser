import React from 'react';
import '../css/ProductsList.css';
import Product from './Product';

const ProductsList = () => {
  return (
    <div className='productList'>
      <Product title='Tomato' mass='500g'/>
      <Product title='Apple' mass='200g'/>
      <Product title='Tomato' mass='300g'/>
      <Product title='Pineaple' mass='100g'/>
      <Product title='Onion' mass='500g'/>
      <Product title='Tomato' mass='400g'/>
      <Product title='Water' mass='200g'/>
      <Product title='Tomato' mass='300g'/>
      <Product title='Tomato' mass='100g'/>
      <Product title='Tomato' mass='600g'/>
    </div>
  );
}

export default ProductsList;
