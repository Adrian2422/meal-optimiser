import React from 'react';

const ProductsImg = (props) => {

  return (
    <img className='product__image' alt='product thumbnail' src={props.thumb}></img>
  );
}

export default ProductsImg;
