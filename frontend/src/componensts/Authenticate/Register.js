import React from "react";
import Input from "../shared/FormElements/Input";
import Wrapper from '../shared/Layout/Wrapper'
import { useForm } from "../shared/hooks/useForm";
import './auth.scss'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/Validators";
const Register = () => {
  const { formState, inputHandler } = useForm({
    inputs: {
      Username: { value: "", isValid: false },
      Email: { value: "", isValid: false },
      Password: { value: "", isValid: false },
    },
    isValid: false,
  });
  return (
    <Wrapper>
    <form className="form">
      <Input
        type="text"
        id="Username"
        placeholder="enter your name"
        value=""
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
      />
      <Input
        type="email"
        id="Email"
        placeholder="enter your email address"
        value=""
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
      />
      <Input
        type="password"
        id="Password"
        placeholder="enter your password"
        value=""
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6), VALIDATOR_MAXLENGTH(9)]}
      />
      <button disabled={formState.isValid ? false : true}>Register</button>
    </form>
    </Wrapper>
  );
};

export default Register;
