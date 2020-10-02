import React from "react";
import styles from "../../../../css/DrawAMeal/MealRecipe.module.css";

const mealLink = (props) => (
  <a href={props.link} className={styles.Instructions__ytLink}>
    {props.text}
  </a>
);

export default mealLink;
