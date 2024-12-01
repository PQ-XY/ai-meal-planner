import React from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import './NextButton.css'; // Import the CSS file for custom styles

const NextButton = () => {
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // Hook to navigate programmatically

  const currentPage = location.pathname; // Get the current page's path
  const handleNextButtonClick = () => {
    if (currentPage === '/invest/1-1') {
      navigate('/invest/1-2'); // Navigate to /invest1
    } else if (currentPage === '/invest/1-2') {
      navigate('/invest/1-3'); // Navigate to /invest from /welcome
    }else if (currentPage === '/invest/1-3') {
      navigate('/invest/2-1'); // Navigate to /invest from /welcome
    } else if (currentPage === '/invest/2-1') {
      navigate('/invest/2-2'); // Navigate to /invest from /welcome
    } else if (currentPage === '/invest/2-2') {
      navigate('/invest/3-1'); // Navigate to /invest from /welcome
    } else if (currentPage === '/invest/3-1') {
      navigate('/loading'); // Navigate to /invest from /welcome
    }
    // Add more conditions based on your logic
  };

  const handlePrevButtonClick = () => {
    if (currentPage === '/invest/1-2') {
      navigate('/invest/1-1'); // Navigate to /invest1
    } else if (currentPage === '/invest/2-1') {
      navigate('/invest/1-3'); // Navigate to /invest from /welcome
    }else if (currentPage === '/invest/1-3') {
      navigate('/invest/1-2'); // Navigate to /invest from /welcome
    } else if (currentPage === '/invest/2-2') {
      navigate('/invest/2-1'); // Navigate to /invest from /welcome
    } else if (currentPage === '/invest/3-1') {
      navigate('/invest/2-2'); // Navigate to /invest from /welcome
    }
    // Add more conditions based on your logic
  };

  const handleSkipClick=()=>{
    navigate('/loading');
  }

  return (
    <div className="button-container">
      <div className='two-button'>
        <button onClick={handlePrevButtonClick} className={currentPage==='/invest/1-1'?"button-gray":"next-button"}>
          Previous <FiArrowLeft size={20} className={currentPage==='/invest/1-1'?"arrow-gray":"arrow-icon"} />
        </button>
        <button onClick={handleNextButtonClick} className={currentPage==='/invest/3-1'?"button-green":"next-button"}>
          {currentPage==='/invest/3-1'?'Finished':'Next'} {currentPage==='/invest/3-1'?'':<FiArrowRight size={20} className="arrow-green" />}
        </button>
      </div>
      <p className='skip-info'>This will take you about 3 minutes, <span className='skip-info-span' onClick={handleSkipClick} >skip now.</span></p>
    </div>
  );
};

export default NextButton;

