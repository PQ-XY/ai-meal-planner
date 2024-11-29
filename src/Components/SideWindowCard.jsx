import { Checkbox } from '@mui/material'
import React from 'react'
import './SideWindowCard.css'
import baseImg5 from '../assets/foodImgs/img_5.jpg'

export default function SideWindowCard({meal}) {
  const AimUrl = baseImg5; 

  const mealTime = meal[0]
  const mealDetails = meal[1]

  return (
    <div className='sideWindowCardContainer'>
      <div className='sideWindowCardImgBox'>
        <img className='sideWindowCardImg' src={AimUrl} alt="" />
      </div>
      <div className='sideWindowCardInfo'>
        <div className='sideWindowCardHeader'>
            <h3>{mealDetails.meal}</h3>
            {/* <div><Checkbox></Checkbox></div> */}
        </div>
        <p className='sideWindowCardMealName'>
            {mealDetails.mealName}
        </p>
      </div>
    </div>
  )
}
