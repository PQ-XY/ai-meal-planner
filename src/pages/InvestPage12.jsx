import React from 'react'
import { useState, useEffect } from 'react';
import InvestNavigate from '../Components/InvestNavigate'
import AnswerCard from '../Components/AnswerCard'
import fitnessImage from '../assets/images/fitness.png';
import slimImage from '../assets/images/slim.png';
import fastAndEasyImage from '../assets/images/fastAndEasy.png';
import dietTherapyImage from '../assets/images/dietTherapy.png';
import allergicImage from '../assets/images/allergic.png';
import newTrendImage from '../assets/images/newTrend.png';
import './InvestPage11.css'

const InvestPage12 = () => {
  const [dietArray, setGridArray2] = useState(() => {
    const savedDiets = localStorage.getItem('dietArray');
    return savedDiets ? JSON.parse(savedDiets) : [];
  });

  // Update the state in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dietArray', JSON.stringify(dietArray));
  }, [dietArray]);

  return (
    <div>
      <InvestNavigate status='1'/>
      <div className='grid-container'>
        <p className='invest-question'>What does your diet focus on?</p>
        <div className='answer-grid'>
          <AnswerCard title='Fitness' image={fitnessImage} array={dietArray} setArray={setGridArray2}/>
          <AnswerCard title='Slim' image={slimImage} array={dietArray} setArray={setGridArray2}/>
          <AnswerCard title='Fast & Easy' image={fastAndEasyImage} array={dietArray} setArray={setGridArray2}/>
          <AnswerCard title='Diet Therapy' image={dietTherapyImage} array={dietArray} setArray={setGridArray2}/>
          <AnswerCard title='New Trend' image={newTrendImage} array={dietArray} setArray={setGridArray2}/>
        </div>
      </div>
    </div>
  )
}

export default InvestPage12
