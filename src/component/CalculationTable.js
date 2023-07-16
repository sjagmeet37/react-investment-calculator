
import styles from "./CalculationTable.module.css"

function CalculatorTable(props) {
  const rowData = props.yearlyData;

  const rowJsx = rowData.map((row) => (
    <tr id={row.id}>
      <td>{row.year}</td>
      <td>{row.yearlyInterest}</td>
      <td>{row.year}</td>
      <td>{row.savingsEndOfYear}</td>
      <td>{row.yearlyContribution}</td>
    </tr>));

  return (
    <table className={styles["result"]}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {rowJsx}
      </tbody>
    </table>
  );
}

export default CalculatorTable;
