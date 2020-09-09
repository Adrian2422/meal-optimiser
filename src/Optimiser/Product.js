import React from 'react';
import styles from '../css/Product.module.css';
import ProductImg from './ProductImg';

const Product = props => {

  const deleteBtnHandler = event => {
    const eventTarget = event.target;
    eventTarget.parentNode.classList.add(`${styles['product--deleted']}`);
    setTimeout(() => {
      eventTarget.parentNode.remove();
    }, 500);
  }
  return (
    <div className={styles.product}>
      <ProductImg thumb={props.thumb}></ProductImg>
      <div className={styles.product__container}>
        <h2 className={styles.product__title}>{props.title}</h2>
        <p className={styles.product__mass}>{props.quantity} {props.unit} ({props.mass})</p>
      </div>
      <button
        onClick={deleteBtnHandler}
        className={styles.product__deleteBtn}>
      </button>
    </div>
  );
}

export default Product;
