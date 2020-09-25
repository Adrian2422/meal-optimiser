import React from 'react';
import Button from '../../UI/Button/Button';
import PersonalSurvey from './PersonalSurvey/PersonalSurvey';
import styles from '../../../css/PersonalKcalNeed.module.css';

const personalKcalNeed = (props) => (
  <div className={styles.PersonalKcalNeed}>
    <div className={styles.PersonalKcalNeed__survey}>
      <p>Let's count your calorie needs!</p>
      <PersonalSurvey />
    </div>
    <Button 
    click={()=>{alert('calculate')}} 
    class={styles.PersonalKcalNeed__button} 
    name={"Calculate"}
    />
  </div>
);
 
export default personalKcalNeed;