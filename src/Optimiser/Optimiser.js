import React, { Component } from "react";
import Modal from "./ProductModal/ProductModal";
import TopBar from "./TopBar";
import ProductsList from "./ProductsList";
import styles from "../css/Optimiser.module.css";

class Optimiser extends Component {
  state = {
    products: [],
    addBtnClicked: false,
  };
  listButtonHandler = () => {
    this.setState({ addBtnClicked: !this.state.addBtnClicked });
  };
  okButtonHandler = async (input) => {
    console.log(input);
    this.setState({
      addBtnClicked: !this.state.addBtnClicked,
    });
    //const recipe = document.querySelector(".productPick__textarea").value;
    const body = {
      query: input,
    };
    const response = await fetch(
      "https://trackapi.nutritionix.com/v2/natural/nutrients",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-app-id": "2216a622",
          "x-app-key": "51f1cc35a6825eb86b554350da8f159b",
        },
        body: JSON.stringify(body),
      }
    );

    switch (response.status) {
      case 400:
        console.error(
          "Validation Error, Invalid input parameters, Invalid request"
        );
        break;
      case 401:
        console.error(
          "Unauthorized, Invalid auth keys, Usage limits exceeded, Missing tokens"
        );
        break;
      case 403:
        console.error("Forbidden, Disallowed entity");
        break;
      case 404:
        console.error("Resource not found");
        break;
      case 409:
        console.error("Resource conflict, Resource already exists");
        break;
      case 500:
        console.error("Base error, internal server error, request failed");
        break;
      default:
        break;
    }

    response.json().then((data) => {
      const newState = { ...this.state };
      for (const key in data.foods) {
        newState.products.push({
          name: data.foods[key]["food_name"],
          kcal: data.foods[key]["nf_calories"],
          weight: data.foods[key]["serving_weight_grams"],
          thumb: data.foods[key]["photo"]["thumb"],
        });

        this.setState(newState);
        document.querySelector(".productPick__textarea").value = "";
      }
    });
  };
  cancelButtonHandler = () => {
    this.setState({ addBtnClicked: !this.state.addBtnClicked });
  };

  render() {
    return (
      <div className={styles.optimiser}>
        <TopBar>

        </TopBar>
        <div className={styles.wrapper}>
          <div className={styles.list}>
            <button
              onClick={this.listButtonHandler}
              className={styles.list__button}
            >
              Add product
            </button>
            <ProductsList productList={this.state.products} />
          </div>
          <div className={styles.content}></div>
        </div>
        <Modal
          visible={this.state.addBtnClicked}
          okClickHandle={this.okButtonHandler}
          cancelClickHandle={this.cancelButtonHandler.bind(this)}
        />
      </div>
    );
  }
}

export default Optimiser;
