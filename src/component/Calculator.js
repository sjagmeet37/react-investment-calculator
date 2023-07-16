import { useState } from "react";
import logo from "./../assets/investment-calculator-logo.png";
import CalculatorTable from "./CalculationTable";
import CalculatorForm from "./CalculatorForm";

function Calculator() {
  const [yearlyData, setYearlyData] = useState([]);

  const onFormReset = () => {
    setYearlyData([]);
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
   
  

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["currentSavings"];
    const yearlyContribution = +userInput["yearlySavings"];
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: formatter.format(yearlyInterest),
        savingsEndOfYear: formatter.format(currentSavings),
        yearlyContribution: yearlyContribution,
        id: Math.random().toString(),
      });
    }

    console.log(yearlyData);

    setYearlyData(yearlyData);
    // do something with yearlyData ...
  };
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <CalculatorForm
        calculateEarnings={calculateHandler}
        onFormReset={onFormReset}
      />

      {yearlyData.length > 0 ? (
        <CalculatorTable yearlyData={yearlyData} />
      ) : (
        <h1>Please Fill Investment form for Calculations</h1>
      )}
    </div>
  );
}

export default Calculator;
