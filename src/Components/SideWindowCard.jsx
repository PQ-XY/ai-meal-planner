import { Checkbox } from '@mui/material'
import React from 'react'
import './SideWindowCard.css'

export default function SideWindowCard({meal}) {
  return (
    <div className='sideWindowCardContainer'>
      <div className='sideWindowCardImgBox'>
        <img className='sideWindowCardImg' src={meal.mealImg} alt="" />
      </div>
      <div className='sideWindowCardInfo'>
        <div className='sideWindowCardHeader'>
            <h3>{meal.meal}</h3>
            {/* <div><Checkbox></Checkbox></div> */}
        </div>
        <p className='sideWindowCardMealName'>
            {meal.mealName}
        </p>
      </div>
    </div>
  )
}
