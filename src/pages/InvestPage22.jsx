import React from 'react'
import InvestNavigate from '../components/InvestNavigate'
import LabelCard from '../components/LabelCard'
import AddButton from '../components/AddButton'
import { useState, useEffect } from 'react'
import './InvestPage21.css'

const InvestPage22 = () => {
  const [allKitsArray, setAllKits] = useState(() => {
    const savedAll = localStorage.getItem('allKitsArray');
    return savedAll ? JSON.parse(savedAll) : [
      'Wok','Stew pan', 'Rice cooker','Microwave oven', 'Oven', 'Air fryer','Blender',
      'Toaster oven','Bread maker','Coffee maker'
    ];
  });

  const [kitArray, setGridArray4] = useState(() => {
    const savedKits = localStorage.getItem('kitArray');
    return savedKits ? JSON.parse(savedKits) : [];
  });

  const addNewCard2 = (newItem) => {
    if (newItem && !allKitsArray.includes(newItem)) {
      setAllKits((prevArray) => {
        const updatedArray = [...prevArray, newItem];
        // Update localStorage with the new allCuisinesArray
        localStorage.setItem('allKitsArray', JSON.stringify(updatedArray));
        return updatedArray;
      });
      setGridArray4((prevArray) => [...prevArray, newItem]);
    }
  };

  // Update the state in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('kitArray', JSON.stringify(kitArray));
  }, [kitArray]);

  return (
    <div>
      <InvestNavigate status='2'/>
      <p className='invest-question'>What cuisine do you like?</p>
      <div class='page21-container'>
      <div className="label-grid">
          {allKitsArray.map((item, index) => (
            <LabelCard key={index} title={item} array={kitArray} setArray={setGridArray4} />
          ))}
          <AddButton addNewCard={addNewCard2} />
        </div>
      </div>
    </div>
  )
}

export default InvestPage22
