import React from "react";
import styles from "../../../css/Modal.module.css";

const modal = (props) => {
  return (
    <div className={props.visible ? 
      styles["modal--shown"] : styles["modal--hidden"]}>
      {props.children}
    </div>
  );
};

export default modal;
