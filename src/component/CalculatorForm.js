import { useState } from "react";

import styles from "./CalculatorForm.module.css"

function CalculatorForm(props) {

    const [currentSavings, setCurrentSavings] = useState('');
    const [yearlySavings, setYearlySavings] = useState('');
    const [expectedInterest, setExpectedInterest] = useState('');
    const [duration, setDuration] = useState('');

    const CalculatorFormSubmitHandler = (event) => {
        event.preventDefault();

        let userInput = {
            currentSavings : currentSavings,
            yearlySavings : yearlySavings,
            expectedInterest : expectedInterest,
            duration : duration
        }

        props.calculateEarnings(userInput);

    }

    const yearlySavingsHandler = (event) => {
        setYearlySavings(event.target.value);
    }

    const expectedInterestHandler = (event) => {
        setExpectedInterest(event.target.value);
    }

    const currentSavingsHandler = (event) => {
        setCurrentSavings(event.target.value);
    }

    const durationHandler = (event) => {
        setDuration(event.target.value);
    }

    const formResetHandler = (event) => {
        setYearlySavings('');
        setExpectedInterest('');
        setCurrentSavings('');
        setDuration('');
        props.onFormReset();
    }


  return (
    <form className={styles.form} onSubmit={CalculatorFormSubmitHandler}>
      <div className={styles["input-group"]} >
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" value={currentSavings} onChange={currentSavingsHandler} id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" value={yearlySavings} onChange={yearlySavingsHandler} id="yearly-contribution" />
        </p>
      </div>
      <div  className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" value={expectedInterest} onChange={expectedInterestHandler} id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" value={duration} onChange={durationHandler} id="duration" />
        </p>
      </div>
      <p  className={styles.actions}>
        <button type="reset" onClick={formResetHandler} className={styles["buttonAlt"]}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default CalculatorForm;
