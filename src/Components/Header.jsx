import React from 'react'
import logo from '../assets/images/logo.png'
import './Header.css'

const Header = ({message}) => {
  return (
    <>
    <div className='container'>
      <img className='logo' src={logo}></img>
      <p className='welcome-message'>{message}</p>
    </div>
    </>
  )
}

export default Header
