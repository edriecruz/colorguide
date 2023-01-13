import React from 'react'
import './index.scss'
import logo from '../../Assets/Images/logo.png' 

const Header = () => {
  return (
        <div className='logo-area'>
            <img src={logo} className='logo'/>
            <h1 className='logo-title'>colors</h1>
        </div>
  )
}

export default Header