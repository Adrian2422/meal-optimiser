import React from "react";
import MealImg from "./MealImg/MealImg";
import MealLink from "./MealLink/MealLink";
import styles from "../../../css/DrawAMeal/MealRecipe.module.css";

const mealRecipe = (props) => {
  const generateIngredients = () =>
    props.ingredients.map((ingredient) => {
      return ingredient.name ? (
        <li key={ingredient.id}>
          {ingredient.value} {ingredient.name}
        </li>
      ) : null;
    });

  return (
    <div className={styles.MealRecipe}>
      <h2 className={styles.MealRecipe__name}><a className={styles.MealRecipe__mealLink} href={props.mealLink}>{props.name}</a></h2>
      <p className={styles.MealRecipe__tags}>{props.tags}</p>
      <div className={styles.MealRecipe__wrapper}>
        <div className={styles.MealRecipe__container}>
          <MealImg thumb={props.thumb}></MealImg>
          <ul className={styles.MealRecipe__ingredients}>
            {generateIngredients()}
          </ul>
        </div>
        <div className={styles.Instructions}>
          <MealLink link={props.ytLink} text={"Youtube"}></MealLink>
          <p className={styles.Instructions__text}>{props.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default mealRecipe;
