import React, { useState, useEffect } from 'react';
import InvestNavigate from '../Components/InvestNavigate';
import LabelCard from '../Components/LabelCard';
import AddButton from '../Components/AddButton';
import './InvestPage21.css';

const InvestPage21 = () => {
  // Load allCuisinesArray from localStorage or use default list
  const [allCuisinesArray, setAll] = useState(() => {
    const savedCuisines = localStorage.getItem('allCuisinesArray');
    return savedCuisines ? JSON.parse(savedCuisines) : [
      'Asian cuisine', 'American cuisine', 'Italian cuisine', 'Spanish cuisine',
      'Indian cuisine', 'Chinese cuisine', 'Japanese cuisine', 'Mexican cuisine',
      'Thai cuisine', 'Korean cuisine', 'Caribbean cuisine','Turkish cuisine', 'Brazilian cuisine'
    ];
  });

  // State to store selected cuisines
  const [cuisineArray, setGridArray3] = useState(() => {
    const savedCuisines = localStorage.getItem('cuisineArray');
    return savedCuisines ? JSON.parse(savedCuisines) : [];
  });

  // Function to add a new selected cuisine to the array
  const addNewCard = (newItem) => {
    if (newItem && !allCuisinesArray.includes(newItem)) {
      setAll((prevArray) => {
        const updatedArray = [...prevArray, newItem];
        // Update localStorage with the new allCuisinesArray
        localStorage.setItem('allCuisinesArray', JSON.stringify(updatedArray));
        return updatedArray;
      });
      setGridArray3((prevArray) => [...prevArray, newItem]);
    }
  };

  // Sync cuisineArray with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cuisineArray', JSON.stringify(cuisineArray));
  }, [cuisineArray]);

  return (
    <div>
      <InvestNavigate status="2" />
      <div className="page21-container">
         <p className="invest-question">What cuisine do you like?</p>
        <div className="label-grid">
          {allCuisinesArray.map((item, index) => (
            <LabelCard key={index} title={item} array={cuisineArray} setArray={setGridArray3} />
          ))}
          <AddButton addNewCard={addNewCard} />
        </div>
      </div>
    </div>
  );
};

export default InvestPage21;
