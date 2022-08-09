import React, { useReducer, useEffect } from "react";
import { validate } from "../../../utils/Validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        inputValue: action.value,
        isValid: validate(action.value, action.validators),
      };
    case "TOUCHED":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return {
        ...state,
        inputValue: "",
        isTouched: false,
      };
  }
};
const Input = ({
  type,
  id,
  onInput,
  placeholder,
  value,
  validators,
  errorMsg,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: value || "",
    isValid: false,
    isTouched: false,
  });

  const inputHandler = (e) => {
    dispatch({ type: "CHANGE", value: e.target.value, validators });
  };

  const blurHandler = (e) => {
    dispatch({ type: "TOUCHED" });
  };

  const { inputValue, isValid, isTouched } = inputState;

  useEffect(() => {
    onInput(inputValue, isValid, id);
  }, [inputValue, isValid, isTouched, id, onInput]);

  return (
    <div>
      <label>{id}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={inputHandler}
        onBlur={blurHandler}
        className={`${inputState.isValid ? "valid" : ""} ${(isTouched&&!isValid) ? 'error' : ''}`}
      
      />
      {(isTouched&&!isValid) && <span className="error-txt">{errorMsg}</span>}
    </div>
  );
};

export default Input;
