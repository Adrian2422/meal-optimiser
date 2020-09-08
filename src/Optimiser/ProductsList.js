import React from 'react';
import styles from '../css/ProductsList.module.css';
import Product from './Product';

const ProductsList = (props) => {
  const generateProducts = props.productList.map((product) => 
    <Product title={product.name} mass={product.weight + 'g'} thumb={product.thumb}></Product>
  );

  return (
    <div className={styles.productList}>
      {generateProducts}
      <Product title='onion' mass='500g'></Product>
    </div>
  );
}

export default ProductsList;
