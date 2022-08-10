import React from 'react'
import './Header.scss'
import rupee from '../../images/rupee.png'
import profileImg from "../../images/mental-health.png"
const Header = () => {
  return (
    <div className='header'>
        <div className='logo-div'>
        <img src={rupee} alt="logo" />
        </div>
        <div className='message-div'>
            <h3>Welcome, Raj</h3>
        </div>
        <div className='profile-img-div'>
            <img src={profileImg}/>
        </div>
    </div>
  )
}

export default Header