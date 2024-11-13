import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import NextButton from '../Components/NextButton'
import './InvestLayout.css'

const InvestLayout = () => {
  return (
    <>
    <div className="layout-container">
      <Header message="Let's customize your meal"/>
      <Outlet/>
      <NextButton/>
    </div>
    </>
  )
}

export default InvestLayout
