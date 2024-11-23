import React from 'react'
import './WelcomePage.css'
import Header from '../Components/Header'
import FunctionCard from '../Components/FunctionCard'
import DemoButton from '../Components/DemoButton'
import recommendationImage from '../assets/images/recommendation.svg';
import ingredientImgae from '../assets/images/ingredient.svg'
import adjustmentImage from '../assets/images/adjustment.svg'

const WelcomePage = () => {
  return (
      <div className='home-container'>
        <Header message="Welcome to FreshFork"/>
        <div className='cards-container'>
          <FunctionCard title='Recommendations' description1='Customize your recipes based on your taste, cooking habits, etc.' description2='You will never worry about "what to eat today"' image={recommendationImage}/>
          <FunctionCard title='Meal Planner' description1='Enter ingredients to generate recipes for the next few days' description2='Get recipes directly based on your personal ideas' image={ingredientImgae}/>
          <FunctionCard title='Flexible Adjustment' description1='Quickly delete, modify, and replace existing recipes' description2="It's all up to your personal preference!" image={adjustmentImage}/>
        </div>
        <div className='demo-button-container'>
        <DemoButton />
        </div>
      </div>
  )
}

export default WelcomePage

