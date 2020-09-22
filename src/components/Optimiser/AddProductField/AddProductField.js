import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import AddProductFieldContext from "../../context/AddProducField-context";
import styles from "../../../css/AddProductField.module.css";

class addProductField extends Component {
  state = {
    query: "",
  };
  passInput = (e) => {
    this.props.okClickHandle(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.productPick}>
          <h2 className={styles.productPick__title}>
            Enter your recipe (e.g 1 cup of rice, 5 apples)
          </h2>
          <textarea
            className={styles.productPick__textarea}
            name="recipe"
            rows="10"
            cols="30"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          ></textarea>
        </div>
        <AddProductFieldContext.Consumer>
          {(context) => (
            <div className={styles.buttonBox}>
              <Button
                click={() => {
                  context.okClickHandle(this.state.query);
                  this.setState({ query: "" });
                }}
                class={styles["button--ok"]}
                name={"OK"}
              ></Button>
              <Button
                click={context.cancelClickHandle}
                class={styles["button--cancel"]}
                name={"Cancel"}
              ></Button>
            </div>
          )}
        </AddProductFieldContext.Consumer>
      </div>
    );
  }
}

export default addProductField;
