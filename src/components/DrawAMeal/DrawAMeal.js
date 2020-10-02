import React, { Component } from "react";
import axios from "axios";
import MealRecipe from "./MealRecipe/MealRecipe";
import Button from "../UI/Button/Button";
import styles from "../../css/DrawAMeal/DrawAMeal.module.css";

class DrawAMeal extends Component {
  state = {
    loaded: false,
    meal: null,
    ingredients: [],
  };

  filteredKeys = (obj, filter) => {
    let key,
      keys = [];
    for (key in obj)
      if (obj.hasOwnProperty(key) && filter.test(key)) keys.push(key);
    return keys;
  };
  generateMeal = () => {
    const newState = [];
    this.setState({ loaded: false });
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => {
        this.setState({ meal: response.data.meals[0] });
      })
      .then(() => {
        const ingredients = this.filteredKeys(this.state.meal, /strIngredient/);
        const amount = this.filteredKeys(this.state.meal, /strMeasure/);
        for (let i = 0; i < ingredients.length; i++) {
          newState.push({
            id: i,
            name: this.state.meal[ingredients[i]],
            value: this.state.meal[amount[i]],
          });
        }
      })
      .then(() => {
        this.setState((prevState) => {
          return { ingredients: newState, loaded: !prevState.drawClick };
        });
      });
  };

  render() {
    let recipe = this.state.loaded ? (
      <MealRecipe
        ingredients={this.state.ingredients}
        name={this.state.meal.strMeal}
        thumb={this.state.meal.strMealThumb}
        instructions={this.state.meal.strInstructions}
        mealLink={this.state.meal.strSource}
        ytLink={this.state.meal.strYoutube}
        tags={{ ...this.state }.meal.strTags.split(",").join(", ")}
      ></MealRecipe>
    ) : null;

    return (
      <div className={styles.DrawAMeal}>
        <Button
          click={this.generateMeal}
          class={styles.DrawAMeal__drawButton}
          name={"Draw a meal!"}
        />
        {recipe}
      </div>
    );
  }
}

export default DrawAMeal;
