import React, {useState} from "react";
import Input from "../shared/FormElements/Input";
import Wrapper from "../shared/Layout/Wrapper";
import "./ExpenseForm.scss";
import { VALIDATOR_REQUIRE } from "../../utils/Validators";
import { useForm } from "../shared/hooks/useForm";
import { types } from "../../utils/data";
const ExpenseForm = () => {
  const [selectedType, setSelectedType] = useState('')
  const {formState, inputHandler} = useForm({
    inputs: {
      Expense: { value: "", isValid: false },
      Date: { value: "", isValid: false },
      Amount: { value: "", isValid: false },
    },
    isValid: false
  });


const submitHandler = e => {
  e.preventDefault()
  console.log(formState)
}
console.log(selectedType)
  return (
    <Wrapper>
      <form className="expense-form" onSubmit={submitHandler}>
        <Input
          id="Expense"
          type="text"
          placeholder="expense"
          onInput={inputHandler}
          value=""
          validators={[VALIDATOR_REQUIRE()]}
          errorMsg={'Expense should not be empty'}
        />
        <Input
          id="Date"
          type="date"
          placeholder="expense"
          onInput={inputHandler}
          value=""
          validators={[VALIDATOR_REQUIRE()]}
          errorMsg={"Please select a date"}
        />
        <Input
          id="Amount"
          type="number"
          placeholder="amount"
          onInput={inputHandler}
          value={"0"}
          validators={[VALIDATOR_REQUIRE()]}
          errorMsg={'Please enter the amount'}
        />
        <div className="type-div">
          <label>Type</label>
          <div className="types">
            {types.map((type) => <span key={type.id} className={`${selectedType===type.type ? 'selected' : ''}`} onClick={() => setSelectedType(type.type)}>{type.type}</span>)}
          </div>
        </div>
        <button disabled={(formState.isValid && selectedType!=='') ? false : true}>Submit</button>
      </form>
    </Wrapper>
  );
};

export default ExpenseForm;
