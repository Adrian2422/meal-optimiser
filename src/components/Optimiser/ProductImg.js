import React from "react";
import styles from "../../css/ProductImg.module.css";

const ProductsImg = (props) => {
  return (
    <img
      className={styles.product__image}
      alt="product thumbnail"
      src={props.thumb}
    ></img>
  );
};

export default ProductsImg;
