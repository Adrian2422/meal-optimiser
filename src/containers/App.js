import React from 'react';
import styles from './App.module.css';
//import Start from '../components/Start/Start';
import DrawAMeal from '../components/DrawAMeal/DrawAMeal';
//import Optimiser from '../components/Optimiser/Optimiser';

const App = () => {
  return (
    <div className={styles.App}>
      <DrawAMeal />
    </div>
  );
}

export default App;
