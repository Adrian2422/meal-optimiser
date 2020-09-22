import React from "react";
import styles from "../../css/TopBar.module.css";
import Button from "../UI/Button/Button";

const topBar = (props) => {
    return (
      <div className={styles.TopBar}>
        <Button click={()=>{alert('back')}} class={styles.TopBar__backBtn} name={"<"}></Button>
        <Button
          click={props.addBtnHandle}
          class={styles.TopBar__addButton}
          name={"Add products to list"}
        ></Button>
      </div>
    );
}

export default topBar;
