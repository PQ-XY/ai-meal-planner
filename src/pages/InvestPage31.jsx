import React from 'react'
import { useState, useEffect } from 'react'
import InvestNavigate from '../Components/InvestNavigate'
import TasteCard from '../Components/TasteCard'
import sourImage from '../assets/images/sour.svg'
import sweetImage from '../assets/images/sweet.svg'
import spicyImage from '../assets/images/spicy.svg'
import saltyImage from '../assets/images/salty.svg'
import './InvestPage31.css'

const InvestPage31 = () => {
  const [tasteArray, setGridArray5] = useState(() => {
    const savedTastes = localStorage.getItem('tasteArray');
    return savedTastes ? JSON.parse(savedTastes) : [{title:'Sour',level:3},{title:'Sweet',level:3},{title:'Spicy',level:3},{title:'Salty',level:3}];
  });

  // Update the state in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('tasteArray', JSON.stringify(tasteArray));
  }, [tasteArray]);
  return (
    <div>
      <InvestNavigate status='3'/>
      <div class='taste-grid-container'>
        <p className='invest-question'>Please choose your taste level.</p>
        <div className='taste-grid'>
          <TasteCard title='Sour' image={sourImage} array={tasteArray} setArray={setGridArray5} />
          <TasteCard title='Sweet' image={sweetImage} array={tasteArray} setArray={setGridArray5} />
          <TasteCard title='Spicy' image={spicyImage} array={tasteArray} setArray={setGridArray5} />
          <TasteCard title='Salty' image={saltyImage} array={tasteArray} setArray={setGridArray5} />
        </div>
      </div>
    </div>
  )
}

export default InvestPage31
