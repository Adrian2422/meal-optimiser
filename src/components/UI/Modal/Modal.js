import React from "react";
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilliary';
import styles from "../../../css/Optimiser/Modal.module.css";

const modal = (props) => {
  return (
    <Aux>
      <div className={props.visible ? 
      styles["modal--shown"] : styles["modal--hidden"]}>
      {props.children}
    </div>
    <Backdrop show={props.visible} clicked={props.modalClosed}></Backdrop>
    </Aux>
  );
};

export default modal;
