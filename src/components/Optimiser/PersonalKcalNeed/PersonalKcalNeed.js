import React, { Component } from "react";
import PersonalSurvey from "./PersonalSurvey/PersonalSurvey";
import PersonalKcalInfo from "./PersonalKcalInfo/PersonalKcalInfo";
import styles from "../../../css/PersonalKcalNeed.module.css";

class PersonalKcalNeed extends Component {
  state = {
    personalData: null,
  };

  surveyDataHandler = (values) => {
    this.setState({personalData: {...values}});
  };

  calculateKcalNeed = () => {
    if (this.state.personalData) {
      const { gender, age, height, weight, activity } = this.state.personalData;
      const activityTab = [1, 1.1, 1.15, 1.2];
      let kcalNeed = 0;
      if (gender === "man") {
        kcalNeed =
          (9.99 * weight + 6.25 * height - 4.92 * age + 5) *
          activityTab[activity];
      } else {
        kcalNeed =
          (9.99 * weight + 6.25 * height - 4.92 * age - 161) *
          activityTab[activity];
      }
      return <PersonalKcalInfo kcal={kcalNeed.toFixed(2)} />;
    } else {
      return <p>Let's count your calorie needs!</p>;
    }
  };
  render() {
    return (
      <div className={styles.PersonalKcalNeed}>
        <div className={styles.PersonalKcalNeed__survey}>
          {this.calculateKcalNeed()}
          <PersonalSurvey values={this.surveyDataHandler} />
        </div>
      </div>
    );
  }
}

export default PersonalKcalNeed;
