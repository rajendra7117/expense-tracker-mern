import React from 'react'
import './Header.scss'
import rupee from '../../images/rupee.png'
const Header = () => {
  return (
    <div className='header'>
        <div className='logo-div'>
        <img src={rupee} alt="logo" />
        </div>
        <div className='message-div'>
            <h3>Welcome!!</h3>
        </div>
    </div>
  )
}

export default Header