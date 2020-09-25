import React, { Component } from "react";
import Button from "../../../UI/Button/Button";
import styles from "../../../../css/PersonalSurvey.module.css";

class PersonalSurvey extends Component {
  state = {
    gender: null,
    age: null,
    height: null,
    weight: null,
    activity: null,
  };

  inputHandler = (e) => {
    if (e.target.value.length > 3) {
      e.target.value = e.target.value.slice(0, 3);
    }
  };
  passToParentHandler = () => {
    if(!Object.values({...this.state}).some(x => x === null || x === '')){
      this.props.values(this.state);
    }
  };

  render() {
    return (
      <div className={styles.PersonalSurvey}>
        <div className={styles.PersonalSurvey__wrapper}>
          <div className={styles.PersonalSurvey__leftCol}>
            <input
              type="radio"
              id="man"
              onChange={(e) => {
                this.setState({ gender: e.target.value });
              }}
              className={styles.PersonalSurvey__radio}
              value="man"
              name="gender"
            />
            <label htmlFor="man">Man</label>
            <input
              type="radio"
              id="woman"
              onChange={(e) => {
                this.setState({ gender: e.target.value });
              }}
              className={styles.PersonalSurvey__radio}
              value="woman"
              name="gender"
            />
            <label htmlFor="woman">Woman</label>
          </div>
          <div className={styles.PersonalSurvey__rightCol}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className={styles.PersonalSurvey__input}
              onChange={(e) => {
                this.inputHandler(e);
                this.setState({ age: e.target.value });
              }}
              id="age"
            />
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              className={styles.PersonalSurvey__input}
              onChange={(e) => {
                this.inputHandler(e);
                this.setState({ height: e.target.value });
              }}
              id="height"
            />
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              className={styles.PersonalSurvey__input}
              onChange={(e) => {
                this.inputHandler(e);
                this.setState({ weight: e.target.value });
              }}
              id="weight"
            />
            <label htmlFor="activity">Activity</label>
            <select
              id="activity"
              className={styles.PersonalSurvey__select}
              onChange={(e) => {
                this.setState({ activity: e.target.value });
              }}
            >
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
        <Button
          click={this.passToParentHandler}
          class={styles.PersonalSurvey__button}
          name={"Calculate"}
        />
      </div>
    );
  }
}

export default PersonalSurvey;
