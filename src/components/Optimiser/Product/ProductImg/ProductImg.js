import React from "react";
import styles from "../../../../css/Optimiser/ProductImg.module.css";

const productsImg = (props) => {
  return (
    <img
      className={styles.product__image}
      alt="product thumbnail"
      src={props.thumb}
    ></img>
  );
};

export default productsImg;
