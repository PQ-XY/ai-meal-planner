import './AddIngredientButton.css'
import React from 'react'
import './AddIngredientButton.css'


const AddIngredientButton = ({onClick}) => {
  return (
    <div className='add-ingredient-button-container'>
      <button className='add-ingredient-button' onClick={onClick}>
        <p className='add-ingredient-add1'>
          +
        </p>
        <p className='add-ingredient-Add'>Add</p>
      </button>
    </div>
  )
}

export default AddIngredientButton
