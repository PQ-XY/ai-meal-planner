import React from 'react'
import logo from '../assets/images/logo.png'
import './LoadingPage.css'

const LoadingPage = () => {
  return (
    <div className='loading-container'>
      <div className='loading-container-inner'>
        <img src={logo}></img>
        <p className='loading-text'>Loading ...</p>
      </div>
      <div>
        <p class='info-text'>
          Your meal plan will be ready soon!
        </p>
      </div>
    </div>
  )
}

export default LoadingPage
