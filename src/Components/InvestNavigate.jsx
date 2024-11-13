import React from 'react'
import './InvestNavigate.css'

const InvestNavigate = ({status}) => {
  let title1='title';
  let title2='title';
  let title3='title';
  let underline1='underline';
  let underline2='underline';
  let underline3='underline';
  if(status=='1'){
    title1='title-active';
    underline1='underline-active'
  }else if(status=='2'){
    title2='title-active';
    underline2='underline-active'
  }else{
    title3='title-active';
    underline3='underline-active'
  }
  return (
    <div className='navigate-container'>
      <div className='navigate-part-container'>
        <p className={title1}>Dining Habits</p>
        <div className={underline1}></div>
      </div>
      <div className='navigate-part-container'>
        <p className={title2}>Cooking habits</p>
        <div className={underline2}></div>
      </div>
      <div className='navigate-part-container'>
        <p className={title3}>Taste</p>
        <div className={underline3}></div>
      </div>
    </div>
  )
}

export default InvestNavigate
