import React from 'react'
import MonthlyBarChart from './MonthlyBarChart'
import './MonthlyExpenses.scss'
const MonthlyExpenses = () => {
  return (
    <div className='monthly'>
      <div><h2>Monthly Expenses</h2></div>
      <MonthlyBarChart />
    </div>
  )
}

export default MonthlyExpenses