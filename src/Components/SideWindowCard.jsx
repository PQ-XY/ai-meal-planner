import { Checkbox } from '@mui/material'
import React from 'react'
import './SideWindowCard.css'

export default function SideWindowCard({title, name, src}) {
  return (
    <div className='sideWindowCardContainer'>
      <div className='sideWindowCardImgBox'>
        <img className='sideWindowCardImg' src={src} alt="" />
      </div>
      <div className='sideWindowCardInfo'>
        <div className='sideWindowCardHeader'>
            <h3>{title}</h3>
            {/* <div><Checkbox></Checkbox></div> */}
        </div>
        <p>
            {name}
        </p>
      </div>
    </div>
  )
}
