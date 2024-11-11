import React from 'react'
import './Meals.css'
import RadialBarChart from './RadialBarChart';
import AIAssistantBar from './AIAssistantBar';
import BasicTabs from './BasicTabs';

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
    <div className='mealPageContainer'>
      <div className='mealHeaderBox'>
        <div className='mealHeaderWeek'>
          <h1>Weekly Meals</h1>
          <h2>11/03-11/10</h2>
        </div>      
        <div className='mealHeaderMeals'>
          <h3>Breakfast</h3>
          <h3>Lunch</h3>
          <h3>Dinner</h3>
        </div>
        <div className='mealCaloriesInfoContainer'>
          <div className='totalCaloriesBox'>          
            <h1>420 Cal</h1>
            <h2>Low Calories</h2>
          </div>
          <div className='caloriesRadialBarChartBox'>
            <div className='RadialBarChartBox'>
              <RadialBarChart></RadialBarChart>
              <h5>Carbs</h5>
            </div>
            <div className='RadialBarChartBox'>
              <RadialBarChart></RadialBarChart>
              <h5>Protein</h5>
            </div>
            <div className='RadialBarChartBox'>
              <RadialBarChart></RadialBarChart>
              <h5>Fat</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='basicTabsBox'>
        <BasicTabs></BasicTabs>
      </div>
      <div>
        <AIAssistantBar></AIAssistantBar>
      </div>
    </div>
  )
}
