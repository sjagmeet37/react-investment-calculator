import logo from './../assets/investment-calculator-logo.png';
import CalculatorTable from './CalculationTable';
import CalculatorForm from './CalculatorForm';


function Calculator () {

    const calculateHandler = (userInput) => {
       
    
        const yearlyData = []; 

        let currentSavings = +userInput['currentSavings']; 
        const yearlyContribution = +userInput['yearlySavings']; 
        const expectedReturn = +userInput['expectedInterest'] / 100;
        const duration = +userInput['duration'];
    
        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlyContribution;
          yearlyData.push({
            // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
          });
        }
    
        // do something with yearlyData ...
      };
      return (
        <div>
          <header className="header">
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
          </header>
    
            <CalculatorForm />
    
          {/* Todo: Show below table conditionally (only once result data is available) */}
          {/* Show fallback text if no data is available */}
    
            <CalculatorTable />
        </div>
      );    

}

export default Calculator;