import React from "react";
import "./AllExpenses.scss";
import ColorInfo from "./ColorInfo";
import ExpenseCircleChart from "./ExpenseCircleChart";

const AllExpenses = () => {
  let colorArray = [
    { id: 1, color: "rgb(250,194,49)", item: "Food" },
    { id: 2, color: "rgb(145,255,247)", item: "Travel" },
    { id: 3, color: "rgb(255,255,255)", item: "Entertainment" },
    { id: 4, color: "rgb(19,21,23)", item: "Shopping" },
    { id: 5, color: "rgb(80,218,126)", item: "Others" },
  ];
  return (
    <div className="all-expenses">
      <div className="level-1">
        <h1>All Expenses</h1>
        <h4>Date</h4>
      </div>
      <div className="level-2">
        <div className="total">
            <h6>Total</h6>
            <h3>Rs.2000</h3>
        </div>
        <div className="expense-circle-div">
          <ExpenseCircleChart />
        </div>
        <div className="expense-info">
          {colorArray.map((color) => (
            <ColorInfo key={color.id} color={color.color} item={color.item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllExpenses;
