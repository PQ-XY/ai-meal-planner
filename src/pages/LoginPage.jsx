import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import logo from '../assets/images/logo.png'; // Update with the correct logo path
import './LoginPage.css'; // Assuming you have a CSS file for styling

const LoginPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const loginClicked = () => {
    if (nickname.trim()) {
      // Save the nickname to localStorage
      localStorage.setItem('userName', JSON.stringify(nickname));
      console.log('Stored UserName:', localStorage.getItem('userName'));
      // Navigate to the next page
      navigate('/invest/1-1');
    } else {
      alert('Please enter a nickname');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-header'>
        <img src={logo} alt="Logo" />
        <p>Freshfork</p>
      </div>
      <div className='login-input'>
        <p>Welcome!</p>
        <input
          placeholder='Input your nickname'
          type='text'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)} // Update nickname state
        />
        <button onClick={loginClicked}>
          Get Started <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
