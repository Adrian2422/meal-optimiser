import React from 'react';
import Aux from '../hoc/Auxilliary';
import Button from '../components/UI/Button/Button';
import styles from '../css/ShoppingList.module.css';

const recipe = (props) => {

  return (
    <Aux>
    <div className={styles.ShoppingList}>
      <h2 className={styles.ShoppingList__title}>Shopping list</h2>
      <hr></hr>
      {props.children}
    </div>
    <Button 
      click={null}
      class={styles.ShoppingList__printButton}
      name={"Print"}
    />
    </Aux>
  );
}
 
export default recipe;