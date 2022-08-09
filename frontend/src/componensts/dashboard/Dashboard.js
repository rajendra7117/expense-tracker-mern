import React from 'react'
import Wrapper from '../shared/Layout/Wrapper'
import AllExpenses from './AllExpenses'
import './Dashboard.scss'
import IndividualExpenses from './IndividualExpenses'
import MonthlyExpenses from './MonthlyExpenses'
const Dashboard = () => {
  return (
    <Wrapper>
    <div className='dashboard'>
        <AllExpenses />
        <MonthlyExpenses />
        <IndividualExpenses />
    </div>
    </Wrapper>
  )
}

export default Dashboard