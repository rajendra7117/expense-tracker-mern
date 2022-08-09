import React from "react";
import Input from "../shared/FormElements/Input";
import Wrapper from "../shared/Layout/Wrapper";
import "./ExpenseForm.scss";
const ExpenseForm = () => {
  const changeHandler = (e) => {};
  return (
    <Wrapper>
      <form className="expense-form">
        <Input
          id="Expense"
          type="text"
          placeholder="expense"
          onChange={changeHandler}
        />
        <Input
          id="Date"
          type="date"
          placeholder="expense"
          onChange={changeHandler}
        />
        <Input
          id="Amount"
          type="number"
          placeholder="amount"
          onChange={changeHandler}
        />
        <div className="type-div">
          <label>Type</label>
          <div className="types">
            <span>Food</span>
            <span>Travel</span>
            <span>Entertainment</span>
            <span>Shopping</span>
            <span>Others</span>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default ExpenseForm;
