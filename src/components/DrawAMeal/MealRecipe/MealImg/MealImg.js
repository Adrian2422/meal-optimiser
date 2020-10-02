import React from "react";
import styles from '../../../../css/DrawAMeal/MealRecipe.module.css';

const productsImg = (props) => {
  return (
    <img
      className={styles.MealRecipe__image}
      alt="meal thumbnail"
      src={props.thumb}
    ></img>
  );
};

export default productsImg;
