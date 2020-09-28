import React from "react";
import styles from "../../css/Optimiser/TopBar.module.css";
import Button from "../UI/Button/Button";

const topBar = (props) => {
    return (
      <div className={styles.TopBar}>
        <Button click={()=>{alert('back')}} class={styles.TopBar__backBtn} name={"<"}></Button>
        <Button
          click={props.addBtnHandle}
          class={styles.TopBar__addButton}
          name={"Add products to list"}
        />
        {props.printVisible ? (<Button
          click={props.printClicked}
          class={styles.TopBar__addButton}
          name={"Generate Shopping List"}
        />) : null}
        
      </div>
    );
}

export default topBar;
