import React from 'react'

const Input = ({type, id, onInput, placeholder, }) => {
  return (
    <div>
        <label>{id}</label>
        <input type={type} placeholder={placeholder} onChange={onInput}/>
    </div>
  )
}

export default Input