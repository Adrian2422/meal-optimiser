import React from 'react';
import styles from '../../css/Start.module.css';

const Start = () => {

  const taskClickHandle = event => {
    alert(event.target.innerText);
  }
  return (
    <div className={styles.start}>
      <div className={styles.start__title}>
        <h1>Meal Optimiser</h1>
      </div>
      <div className={styles.columns}>
      <div onClick={taskClickHandle} className={styles.columns__left}>
        <p>Oblicz kalorie</p>
      </div>
      <div onClick={taskClickHandle} className={styles.columns__right}>
        <p>Ułóż danie</p>
      </div>
      </div>
    </div>
  );
}

export default Start;
