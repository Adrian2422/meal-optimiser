import React from 'react';
import styles from './App.module.css';
import Start from '../components/Start/Start';
import Optimiser from '../components/Optimiser/Optimiser';

const App = () => {
  return (
    <div className={styles.App}>
      <Optimiser />
    </div>
  );
}

export default App;
