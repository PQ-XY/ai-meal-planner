import { Checkbox } from '@mui/material'
import React from 'react'
import './SideWindowCard.css'

export default function SideWindowCard({title}) {
  return (
    <div className='sideWindowCardContainer'>
      <div className='sideWindowCardImgBox'>
        <img className='sideWindowCardImg' src="https://www.simplyrecipes.com/thmb/5KEzbHplXxqFntM-jqrI0QdExR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Egg-Salad-Sandwich-LEAD-22-8ecbb89abda34a84b649ff4c44bab525.JPG" alt="" />
      </div>
      <div className='sideWindowCardInfo'>
        <div className='sideWindowCardHeader'>
            <h3>{title}</h3>
            <Checkbox></Checkbox>
        </div>
        <p>
            Egg Sandwich
        </p>
      </div>
    </div>
  )
}
