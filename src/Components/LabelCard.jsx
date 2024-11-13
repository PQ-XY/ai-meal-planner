import React from 'react'
import { useState } from 'react';
import './LabelCard.css'

const LabelCard = ({title,array,setArray}) => {
  // State to track if the div has been clicked
  let clicked=array.includes(title);

  // Handler for the click event
  const handleClick = () => {
    !clicked; // Toggle the clicked state
    setArray((prevArray) => {
      if (prevArray.includes(title)) {
        // Remove the title if it exists in the array
        return prevArray.filter(item => item !== title && item!='No allergy');
      } else {
        // Add the title if it doesn't exist
        return [...prevArray, title];
      }
    }); // Add the title to the array when clicked
  };

  return (
    <div className={`label-card-container ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      <p className={`label-card-title ${clicked ? 'clicked' : ''}`}>{title}</p>
    </div>
  )
}

export default LabelCard
