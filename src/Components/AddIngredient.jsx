import React, { useState } from 'react';
import './AddIngredient.css'

const IngredientInput = () => {
  const [inputValue, setInputValue] = useState(1); // Initial value set to 1

  const handleValueChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0; // Make sure it's a number
    setInputValue(newValue);
  };

  const decrementValue = () => {
    if (inputValue > 1) {
      setInputValue(inputValue - 1);
    }
  };

  const incrementValue = () => {
    setInputValue(inputValue + 1);
  };

  return (
    <div className='ingredient-container'>
      <input
        className='ingredient-name-input'
        onChange={(e) => handleValueChange(e)}
        placeholder='Enter ingredient'
      />
      <div className="base-NumberInput-root">
        <button
          className={`base-NumberInput-decrementButton ${inputValue === 1 ? 'disabled' : ''}`}
          onClick={decrementValue}
          disabled={inputValue === 1} // Disable the button when value is 1
        >
          -
        </button>
        <input
          className="base-NumberInput-input"
          value={inputValue}
          onChange={(e) => handleValueChange(e)}
        />
        <button
          className="base-NumberInput-incrementButton"
          onClick={incrementValue}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default IngredientInput;
