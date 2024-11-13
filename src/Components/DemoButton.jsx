import React from 'react'
import './DemoButton.css'
import { useNavigate } from 'react-router-dom'

const DemoButton = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/invest/1-1'); // Navigate to /invest
  };

  return (
    <div>
      <button onClick={handleClick} className='button-demo'>Demo</button>
    </div>
  )
}

export default DemoButton
