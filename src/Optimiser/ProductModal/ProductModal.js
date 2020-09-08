import React, { Component } from "react";
import styles from "../../css/ProductModal.module.css";

class Modal extends Component {
  state = {
    query: "",
  };

  passInput = (e) => {
    this.props.okClickHandle(this.state.query);
  };
  render() {
    return (
      <div
        className={
          this.props.visible ? styles["modal--shown"] : styles["modal--hidden"]
        }
      >
        <div className={styles.container}>
          <div className={styles.productPick}>
            <h2 className={styles.productPick__title}>
              Enter your recipe (e.g 1 cup rice, 5 apples)
            </h2>
            <textarea
              className={styles.productPick__textarea}
              name="recipe"
              rows="8"
              cols="40"
              onChange={(e) => this.setState({ query: e.target.value })}
            ></textarea>
          </div>
          <div className={styles.buttonBox}>
            <input
              type="submit"
              value="OK"
              onClick={this.passInput}
              className={styles["button--ok"]}
            ></input>
            <button
              onClick={this.props.cancelClickHandle}
              className={styles["button--cancel"]}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
