import React from "react";
import { expenses } from "../../utils/data";
import ExpenseItem from "./ExpenseItem";
import './IndividualExpenses.scss'
const IndividualExpenses = () => {
  let data = expenses.years["2020"]["All"];
  console.log(data);
  return (
    <div>
      <h1>Expenses</h1>
      <div className="expenses-div">
      {data.map((item) => (
        <ExpenseItem
          key={item.id}
          id={item.id}
          amount={item.amount}
          expense={item.expense}
          type={item.type}
        />
      ))}
      </div>
     
    </div>
  );
};

export default IndividualExpenses;
