import { useState, useEffect } from 'react'
import React from 'react'
import './AddButton.css'


const AddButton = ({addNewCard}) => {
  const [addClicked, setAddClicked]=useState(false);
  const [newItem, setNewItem]=useState();
  React.useEffect(()=>{
    if(newItem){
      console.log(newItem);
    }
  },[newItem]);
  const addbuttonClicked=()=>{
    setAddClicked(!addClicked);
  }
  const keyDown=(event)=>{
    if(event.key==='Enter'){
      setAddClicked(false);
      setNewItem(event.target.value);
    }
  }
  useEffect(()=>{
    addNewCard(newItem)
  },[newItem]);

  return (
    <div className='add-more-button-container'>
      <button onClick={addbuttonClicked} className='add-more-button'>+</button>
      {addClicked ? <input className='add-more-input' onKeyDown={keyDown}></input> : ''}
    </div>
  )
}

export default AddButton
