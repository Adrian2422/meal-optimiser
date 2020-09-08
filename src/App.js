import React from 'react';
import styles from './App.module.css';
import Start from './Start/Start';
import Optimiser from './Optimiser/Optimiser';

function App() {
  return (
    <div className={styles.App}>
      <Optimiser />
    </div>
  );
}

export default App;
