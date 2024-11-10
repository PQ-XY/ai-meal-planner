import React from 'react'
import RecommendationCard from './RecommendationCard';
import './Meals.css'

export default function Meals() {

  // Function to get the dates for the current week (Sunday to Saturday)
  const getWeekDates = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek); // Set to the latest Sunday

    const dates = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      const dayString = day.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
      dates.push(dayString);
    }
    return dates;
  };

  // Get the current week's dates
  const weekDates = getWeekDates();

  return (
    <div>
      <div className='mealHeaderBox'>
        <div>
          <h1>Weekly Meals</h1>
          <h2>11/03-11/10</h2>
        </div>      
        <div>
          <h3>Breakfast</h3>
          <h3>Lunch</h3>
          <h3>Dinner</h3>
        </div>
        <div>
          <div>          
            <h1>420 Cal</h1>
            <h2>Low Calories</h2>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div>
        <ul>
          {weekDates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>
      <div className='mealCardBox'>
        <RecommendationCard></RecommendationCard>
        <RecommendationCard></RecommendationCard>
        <RecommendationCard></RecommendationCard>
      </div>
    </div>
  )
}
