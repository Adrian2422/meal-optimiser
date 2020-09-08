import React, { Component } from "react";
import styles from "../css/TopBar.module.css";

class TopBar extends Component {
  render() {
    return (
      <div className={styles.TopBar}>
        <button className={styles.TopBar__backBtn}></button>
        
      </div>
    )
  }
}

export default TopBar;
