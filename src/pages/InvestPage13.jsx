import React, { useState, useEffect } from 'react';
import InvestNavigate from '../Components/InvestNavigate';
import LabelCard from '../Components/LabelCard';
import AddButton from '../Components/AddButton';
import './InvestPage21.css';

const InvestPage13 = () => {
  // Load allCuisinesArray from localStorage or use default list
  const [allAllergyArray, setAll] = useState(() => {
    const savedAllergy = localStorage.getItem('allAllergyArray');
    return savedAllergy ? JSON.parse(savedAllergy) : [
      'No allergy', 'Milk', 'Wheat', 'Egg',
      'Shellfish', 'Peanut', 'Soy bean'
    ];
  });

  // State to store selected cuisines
  const [allergyArray, setGridArray6] = useState(() => {
    const savedAllergy = localStorage.getItem('allergyArray');
    return savedAllergy ? JSON.parse(savedAllergy) : [];
  });

  // Function to add a new selected cuisine to the array
  const addNewCard = (newItem) => {
    if (newItem && !allAllergyArray.includes(newItem)) {
      setAll((prevArray) => {
        const updatedArray = [...prevArray, newItem];
        // Update localStorage with the new allCuisinesArray
        localStorage.setItem('allAllergyArray', JSON.stringify(updatedArray));
        return updatedArray;
      });
      setGridArray6((prevArray) => [...prevArray, newItem]);
    }
  };

  // Sync cuisineArray with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('allergyArray', JSON.stringify(allergyArray));
  }, [allergyArray]);

  return (
    <div>
      <InvestNavigate status="1" />
      <p className="invest-question">What food are you allergic to?</p>
      <div className="page21-container">
        <div className="label-grid">
          {allAllergyArray.map((item, index) => (
            <LabelCard key={index} title={item} array={allergyArray} setArray={setGridArray6} />
          ))}
          <AddButton addNewCard={addNewCard} />
        </div>
      </div>
    </div>
  );
};

export default InvestPage13;
