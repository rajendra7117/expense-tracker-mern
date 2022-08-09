import React from 'react'
import { useNavigate } from 'react-router-dom'
import Wrapper from '../shared/Layout/Wrapper'
import { VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../utils/Validators'
import Input from '../shared/FormElements/Input'
import './auth.scss'
import { useForm } from '../shared/hooks/useForm'
const Login = () => {

  const navigate = useNavigate()
  const {formState, inputHandler} = useForm({inputs: {
    "Email": {value: "", isValid: false},
    "Password": {value: "", isValid: false}
  }})

  const submitHandler = e => {
    e.preventDefault()
    console.log(formState)
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={submitHandler}>
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
          validators={[
            VALIDATOR_REQUIRE(),
            VALIDATOR_MINLENGTH(6),
            VALIDATOR_MAXLENGTH(9),
          ]}
        />
        <div className='form-buttons'>
          <button disabled={formState.isValid ? false : true}>Login</button>
          <button onClick={() => navigate('/auth')}>Register</button>

        </div>
      </form>
    </Wrapper>
  )
}

export default Login