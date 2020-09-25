import React from "react";
import styles from '../../../../css/PersonalSurvey.module.css';

const personalSurvey = (props) => (
  <div className={styles.PersonalSurvey}>
    <div className={styles.PersonalSurvey__leftCol}>
      <input
        type="radio"
        id="man"
        className={styles.PersonalSurvey__radio}
        value="man"
        name="gender"
        checked
      />
      <label for="man">Man</label>
      <input 
        type="radio" 
        id="woman" 
        className={styles.PersonalSurvey__radio}
        value="woman" 
        name="gender" />
      <label for="woman">Woman</label>
    </div>
    <div className={styles.PersonalSurvey__rightCol}>
      <label for="age">Age</label>
      <input
        type="number"
        className={styles.PersonalSurvey__input}
        maxlength="2"
        onInput//={this.value = this.value.slice(0, this.maxLength)}
        id="age"
      />
      <label for="height">Height (cm)</label>
      <input
        type="number"
        className={styles.PersonalSurvey__input}
        maxlength="3"
        onInput//={this.value = this.value.slice(0, this.maxLength)}
        id="height"
      />
      <label for="weight">Weight (kg)</label>
      <input
        type="number"
        className={styles.PersonalSurvey__input}
        maxlength="3"
        onInput//={this.value = this.value.slice(0, this.maxLength)}
        id="weight"
      />
      <label for="activity">Activity</label>
      <select id="activity" className={styles.PersonalSurvey__select}>
        <option name="activity" value="0" disabled selected hidden>
        Select the type of activity
        </option>
        <option name="activity" value="1">
          Low activity (sedentary lifestyle, little amount of exercise)
        </option>
        <option name="activity" value="2">
          Average activity (walking, running, exercising 3-5 times a week)
        </option>
        <option name="activity" value="3">
          High activity (heavy workouts, daily exercise)
        </option>
      </select>
    </div>
  </div>
);

export default personalSurvey;
