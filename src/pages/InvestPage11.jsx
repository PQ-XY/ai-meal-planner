import React from 'react'
import { useState, useEffect } from 'react';
import InvestNavigate from '../Components/InvestNavigate'
import AnswerCard from '../Components/AnswerCard'
import breakfastImage from '../assets/images/breakfast.svg';
import launchImage from '../assets/images/launch.png';
import dinnerImage from '../assets/images/dinner.png';
import './InvestPage11.css'

const InvestPage11 = () => {
  // Retrieve the stored clicked state from localStorage, or use an empty array as default
  const [mealsArray, setGridArray1] = useState(() => {
    const savedMeals = localStorage.getItem('mealsArray');
    return savedMeals ? JSON.parse(savedMeals) : [];
  });

  // Update the state in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('mealsArray', JSON.stringify(mealsArray));
  }, [mealsArray]);

  return (
    <div>
      <InvestNavigate status='1'/>
      <p className='invest-question'>How many meals do you eat a day?</p>
      <div className='answer-grid'>
        <AnswerCard title='Breakfast' image={breakfastImage} array={mealsArray} setArray={setGridArray1}/>
        <AnswerCard title='Launch' image={launchImage} array={mealsArray} setArray={setGridArray1}/>
        <AnswerCard title='Dinner' image={dinnerImage} array={mealsArray} setArray={setGridArray1}/>
      </div>
    </div>
  )
}

export default InvestPage11
