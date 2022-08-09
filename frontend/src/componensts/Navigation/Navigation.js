import React from 'react'
import { NavLink } from 'react-router-dom'
import {RiDashboardLine} from 'react-icons/ri';
import {MdAddBox} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {FaSignInAlt} from 'react-icons/fa'
 

const Navigation = () => {
  return (
   
        <nav className='nav-bar'>
            <NavLink to="/dashboard"><RiDashboardLine /> <h4>Dashboard</h4> </NavLink>
            <NavLink to="/expense">  <MdAddBox /> <h4>Add Expense</h4></NavLink>
            <NavLink to="/profile"><CgProfile /> <h4>Profile</h4></NavLink>
            <NavLink to="/auth"><FaSignInAlt /> <h4>Autheticate</h4></NavLink>
           
        </nav>

  )
}

export default Navigation