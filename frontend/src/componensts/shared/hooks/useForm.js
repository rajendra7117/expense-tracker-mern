import { useReducer, useCallback } from "react";
const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      let formIsvalid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.id) {
          formIsvalid = formIsvalid && action.isValid;
        } else {
          formIsvalid = formIsvalid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.id]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsvalid,
      };
    default:{
        return{
            ...state,
            isValid:false
        }
    }
  }
};
export const useForm = (inputs) => {
  const [formState, dispatch] = useReducer(formReducer, inputs);

  const inputHandler = useCallback(
    (inputValue, isValid, id) => {
     
      dispatch({ type: "CHANGE", value:inputValue, isValid, id });
    },
    [dispatch]
  );

  return {
    formState,
    inputHandler,
  };
};
