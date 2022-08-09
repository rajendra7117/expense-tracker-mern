import React from 'react'
import './ExpenseItem.scss'
import { icons } from '../../utils/icons'
const ExpenseItem = ({id, type, expense, amount}) => {
  return (
    <div className='expense-item'>
        <img src={icons[type]} alt="icon"/>
        <h2>{type}</h2>
        <h3>{expense}</h3>
        <h5>{amount}</h5>
        <button>edit</button>
        <button>Delete</button>
    </div>
  )
}

export default ExpenseItem