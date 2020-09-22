import React, { Component } from "react";
import { idGenerator } from "../modules/IdGenerator";
import Modal from "../UI/Modal/Modal";
import AddProductField from "./AddProductField/AddProductField";
import TopBar from "./TopBar";
import Product from "./Product/Product";
import ProductDetails from "./ProductDetails/ProductDetails";
import NutrientTable from "./NutrientTable/NutrientTable";
import AddProductFieldContext from "../context/AddProducField-context";
import styles from "../../css/Optimiser.module.css";

class Optimiser extends Component {
  iterator = 0;
  state = {
    products: [],
    nutrients: [
      {
        name: "Kcal",
        value: 0,
        key: 0,
      },
      {
        name: "Fat",
        value: 0,
        key: 1,
      },
      {
        name: "Saturated fat",
        value: 0,
        key: 2,
      },
      {
        name: "Cholesterol",
        value: 0,
        key: 3,
      },
      {
        name: "Sodium",
        value: 0,
        key: 4,
      },
      {
        name: "Carbohydrate",
        value: 0,
        key: 5,
      },
      {
        name: "Dietary fiber",
        value: 0,
        key: 6,
      },
      {
        name: "Sugar",
        value: 0,
        key: 7,
      },
      {
        name: "Protein",
        value: 0,
        key: 8,
      },
      {
        name: "Potassium",
        value: 0,
        key: 9,
      },
      {
        name: "Phosphorus",
        value: 0,
        key: 10,
      },
    ],
    dataLoaded: null,
    modalShown: false,
    typeOfModal: '',
    productClicked: [],
  };
  INITIAL_SHORT_NUTRIENTS = [
    {
      name: "Kcal",
      value: 0,
      suffix: "",
      key: 0,
    },
    {
      name: "Fat",
      value: 0,
      suffix: "g",
      key: 1,
    },
    {
      name: "Saturated fat",
      value: 0,
      suffix: "g",
      key: 2,
    },
    {
      name: "Cholesterol",
      value: 0,
      suffix: "mg",
      key: 3,
    },
    {
      name: "Carbohydrate",
      value: 0,
      suffix: "g",
      key: 5,
    },
    {
      name: "Dietary fiber",
      value: 0,
      suffix: "g",
      key: 6,
    },
    {
      name: "Sugar",
      value: 0,
      suffix: "g",
      key: 7,
    },
    {
      name: "Protein",
      value: 0,
      suffix: "g",
      key: 8,
    },
    {
      name: "Sodium",
      value: 0,
      suffix: "mg",
      key: 4,
    },
    {
      name: "Potassium",
      value: 0,
      suffix: "mg",
      key: 9,
    },
    {
      name: "Phosphorus",
      value: 0,
      suffix: "mg",
      key: 10,
    },
  ];

  listButtonHandler = () => {
    this.setState({ modalShown: !this.state.modalShown,
    typeOfModal: 'AddProductField'});
  };
  okButtonHandler = async (input) => {
    this.setState({
      dataLoaded: false,
      modalShown: !this.state.modalShown,
    });
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
    response
      .json()
      .then((data) => {
        const newProductsState = [...this.state.products];
        for (const key in data.foods) {
          newProductsState.push({
            key: this.iterator,
            id: idGenerator("prod_", 6),
            name: data.foods[key]["food_name"],
            weight: data.foods[key]["serving_weight_grams"],
            quantity: data.foods[key]["serving_qty"],
            unit: data.foods[key]["serving_unit"],
            thumb: data.foods[key]["photo"]["thumb"],
            short_nutrients: [
              {
                name: "_calories",
                value: data.foods[key]["nf_calories"],
              },
              {
                name: "_total_fat",
                value: data.foods[key]["nf_total_fat"],
              },
              {
                name: "_saturated_fat",
                value: data.foods[key]["nf_saturated_fat"],
              },
              {
                name: "_cholesterol",
                value: data.foods[key]["nf_cholesterol"],
              },
              { name: "_sodium", value: data.foods[key]["nf_sodium"] },
              {
                name: "_total_carbohydrate",
                value: data.foods[key]["nf_total_carbohydrate"],
              },
              {
                name: "_dietary_fiber",
                value: data.foods[key]["nf_dietary_fiber"],
              },
              { name: "_sugars", value: data.foods[key]["nf_sugars"] },
              { name: "_protein", value: data.foods[key]["nf_protein"] },
              { name: "_potassium", value: data.foods[key]["nf_potassium"] },
              { name: "_p", value: data.foods[key]["nf_p"] },
            ],
            full_nutrients: data.foods[key]["full_nutrients"],
          });
          this.iterator++;
          this.setState({ products: newProductsState });
        }
      })
      .then(() => {
        this.sumNutrients(this.INITIAL_SHORT_NUTRIENTS, this.state.products);
      })
      .then(() => {
        this.setState({ dataLoaded: true });
      });
  };
  cancelButtonHandler = () => {
    this.setState({ modalShown: !this.state.modalShown });
  };
  deleteBtnHandler = (event) => {
    const targetId = event.target.closest(".Product").id;
    const oldStateProducts = [...this.state.products];
    const index = oldStateProducts.findIndex((item) => item.id === targetId);
    oldStateProducts.splice(index, 1);
    setTimeout(() => {
      this.setState({ products: oldStateProducts }, () => {
        this.sumNutrients(this.INITIAL_SHORT_NUTRIENTS, this.state.products);
      });
    }, 500);
  };
  showProductDetails = (event) => {
    this.setState({
      modalShown: !this.state.modalShown, 
      typeOfModal: 'ProductDetails'
    });
    let iterator = 0;
    const targetId = event.target.closest(".Product").id;
    const idx = this.state.products.findIndex((item) => item.id === targetId);
    const targetNutrients = [...this.state.products[idx].full_nutrients];
    const necessaryIds = [
      208,
      205,
      269,
      539,
      601,
      204,
      606,
      605,
      203,
      291,
      213,
      209,
      301,
      306,
      307,
      303,
      312,
      313,
      304,
      315,
      305,
      317,
      309,
      318,
      418,
      415,
      401,
      328,
      430,
      573,
    ];
    const necessaryNames = [
      "Calories",
      "Carbohydrate",
      "Sugars in total",
      "Sugars added",
      "Cholesterol",
      "Fat in total",
      "Fatty acids saturated",
      "Fatty acids trans",
      "Protein",
      "Fiber",
      "Lactose",
      "Starch",
      "Calcium Ca",
      "Potassium K",
      "Sodium Na",
      "Iron De",
      "Copper Cu",
      "Fluoride F",
      "Magnesium Mg",
      "Manganese Mn",
      "Phosporus P",
      "Selenium Se",
      "Zinc",
      "Vitamin A",
      "Vitamin B-12",
      "Vitamin B-6",
      "Vitamin C",
      "Vitamin D",
      "Vitamin K",
      "Vitamin E",
    ];
    const necessarySuffix = [
      "kcal",
      "g",
      "g",
      "g",
      "mg",
      "g",
      "g",
      "g",
      "g",
      "g",
      "g",
      "g",
      "mg",
      "mg",
      "mg",
      "mg",
      "mg",
      "Âµg",
      "mg",
      "mg",
      "mg",
      "Âµg",
      "mg",
      "Âµg",
      "Âµg",
      "mg",
      "mg",
      "Âµg",
      "Âµg",
      "mg",
    ];
    const nutrientArray = [];
    targetNutrients.forEach((item, index) => {
      if (necessaryIds.includes(item["attr_id"])) {
        nutrientArray.push({
          name: necessaryNames[index],
          value: item["value"],
          suffix: necessarySuffix[index],
          key: iterator,
        });
        iterator++;
      }
    });
    this.setState({productClicked: nutrientArray});
  };
  generateList = () =>
    this.state.products.map((product) => (
      <Product
        key={product.key}
        id={product.id}
        title={product.name}
        mass={product.weight + "g"}
        quantity={product.quantity}
        unit={product.unit}
        thumb={product.thumb}
        productClicked={this.showProductDetails}
        deleteBtnHandler={this.deleteBtnHandler}
      ></Product>
    ));

  sumNutrients = (obj1, obj2) => {
    const oldNutrients = JSON.parse(JSON.stringify(obj1));
    for (let i = 0; i < obj2.length; i++) {
      for (let j = 0; j < obj2[i].short_nutrients.length; j++) {
        oldNutrients[j].value += obj2[i].short_nutrients[j].value;
      }
    }
    this.setState({ nutrients: [...oldNutrients] });
  };

  render() {
    const listContent = !this.state.dataLoaded ? null : this.generateList();
    const nutrientTable = !this.state.products.length ? (
      <p className={styles.nutrientTablePlaceholder}>
        Start adding products to the list!
      </p>
    ) : (
      <NutrientTable nutrients={this.state.nutrients} />
    );
    let modalContent;
    switch(this.state.typeOfModal){
      case 'AddProductField':
        modalContent = (
          <AddProductFieldContext.Provider
            value={{
              okClickHandle: this.okButtonHandler,
              cancelClickHandle: this.cancelButtonHandler.bind(this),
            }}
          >
            <AddProductField />
          </AddProductFieldContext.Provider>
        );
        break;
      case 'ProductDetails':
        modalContent = (
          <ProductDetails nutrients={this.state.productClicked}/>
        );
        break;
      default:
        modalContent = null;
    }

    return (
      <div className={styles.optimiser}>
        <TopBar addBtnHandle={this.listButtonHandler.bind(this)} />
        <div className={styles.wrapper}>
          <div className={styles.list}>
            <Product
              key={5674567}
              id={"prod_test00"}
              title={"test"}
              mass={999 + "g"}
              quantity={1}
              unit={"cup"}
              productClicked={this.showProductDetails}
              deleteBtnHandler={this.deleteBtnHandler}
            />
            {listContent}
          </div>
          <div className={styles.content}>{nutrientTable}</div>
        </div>
        <Modal visible={this.state.modalShown}>
          {modalContent}
        </Modal>
      </div>
    );
  }
}

export default Optimiser;
