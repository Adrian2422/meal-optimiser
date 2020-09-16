import React, { Component } from "react";
import styles from "../../css/Product.module.css";
import ProductImg from "../Optimiser/ProductImg";

class Product extends Component {
  deleted = false;

  deleteProduct = (event) => {
    this.deleted = true;
    const eventTarget = event.target;
    eventTarget.closest('.Product').classList.add(`${styles["product--deleted"]}`);
  }
  render() {
    const productClasses = ['Product', styles.product];
    return (
      <div className={productClasses.join(' ')} id={this.props.id}>
        <div className={styles.product__wrapper}>
          <div className={styles.product__container}>
            <ProductImg thumb={this.props.thumb}></ProductImg>
            <div className={styles.product__details}>
              <h2 className={styles.product__title}>{this.props.title}</h2>
              <p className={styles.product__mass}>
                {this.props.quantity} {this.props.unit} ({this.props.mass})
              </p>
            </div>
            <button
              onClick={(event) => {
                this.deleteProduct(event);
                this.props.deleteBtnHandler(event);
              }
            }
              className={styles.product__deleteBtn}
            ></button>
          </div>
        </div>
      </div>
    );
  }
};

export default Product;
 