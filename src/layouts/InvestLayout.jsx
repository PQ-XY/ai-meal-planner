import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import NextButton from '../components/NextButton'
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
