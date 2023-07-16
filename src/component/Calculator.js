import { useState } from 'react';
import logo from './../assets/investment-calculator-logo.png';
import CalculatorTable from './CalculationTable';
import CalculatorForm from './CalculatorForm';


function Calculator () {

    const [yearlyData, setYearlyData] = useState([]);

    const calculateHandler = (userInput) => {
       
        
        const yearlyData = []; 

        let currentSavings = +userInput['currentSavings']; 
        const yearlyContribution = +userInput['yearlySavings']; 
        const expectedReturn = +userInput['expectedInterest'] / 100;
        const duration = +userInput['duration'];
    
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlyContribution;
          yearlyData.push({
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
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
    
            <CalculatorForm calculateEarnings={calculateHandler}/>
    
          {/* Todo: Show below table conditionally (only once result data is available) */}
          {/* Show fallback text if no data is available */}
    
            <CalculatorTable yearlyData={yearlyData}/>
        </div>
      );    

}

export default Calculator;