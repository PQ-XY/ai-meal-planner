import React from 'react'
import './Meals.css'
import RadialBarChart from './RadialBarChart';
import AIAssistantBar from './AIAssistantBar';
import BasicTabs from './BasicTabs';
import allDatas from '../data/test_data';

export default function Meals() {

  function getCurrentWeekDates() {
    const today = new Date();
  
    // Find Sunday (start of the week)
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  
    // Find Saturday (end of the week)
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
  
    // Format dates as MM/DD
    const formatDate = (date) => {
      const month = date.getMonth() + 1; // Months are 0-indexed
      const day = date.getDate();
      return `${month}/${day}`;
    };
  
    return `${formatDate(firstDayOfWeek)} - ${formatDate(lastDayOfWeek)}`;
  }

  // Get the current week's dates
  const weekDates = getCurrentWeekDates();


  const getMealTime = () => {
    const currentHour = new Date().getHours(); // Get the current hour (0-23)

    if (currentHour >= 5 && currentHour < 11) {
      return 'Breakfast';
    } else if (currentHour >= 11 && currentHour < 17) {
      return 'Lunch';
    } else if (currentHour >= 17 && currentHour < 22) {
      return 'Dinner';
    } else {
      return ''; // Late night or early morning snack
    }
  };
  const currentMeal = getMealTime()

  //get the current weekday today
  const getDayofWeek = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
  
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayOfWeek]
  }
  const currentDay = getDayofWeek();

  //get meal data
  const datas = allDatas()

  const todayMeals = datas.filter(meal => meal.day === currentDay)
  console.log(todayMeals)
  const totalCalories = todayMeals.reduce((sum,meal)=> sum + meal.calories, 0)

  //total Carbs
  const totalCarbs = todayMeals.reduce((sum,meal)=> sum + meal.carbs, 0)
  const totalCarbsPercentage = Math.ceil(totalCarbs / 225 * 100)

  //total Protein
  const totalProtein = todayMeals.reduce((sum,meal)=> sum + meal.protein, 0)
  const totalProteinPercentage =Math.ceil(totalProtein / 56  * 100)

  //total fat
  const totalFat = todayMeals.reduce((sum,meal)=> sum + meal.fat, 0)
  const totalFatPercentage = Math.ceil(totalFat / 60  * 100)

  return (
    <div className='mealPageContainer'>
      <div className='mealHeaderBox'>
        <div className='mealHeaderWeek'>
          <h1>Weekly Meals</h1>
          <h2>{weekDates}</h2>
        </div>      
        <div className='mealHeaderMeals'>
          <h3 style={{ fontWeight: currentMeal === 'Breakfast' ? 'bold' : 'normal' }}>Breakfast</h3>
          <h3 style={{ fontWeight: currentMeal === 'Lunch' ? 'bold' : 'normal' }}>Lunch</h3>
          <h3 style={{ fontWeight: currentMeal === 'Dinner' ? 'bold' : 'normal' }}>Dinner</h3>
        </div>
        <div className='mealCaloriesInfoContainer'>
          <div className='totalCaloriesBox'>          
            <h1>{totalCalories} Cal</h1>
            <h2>{currentDay} Total Calories</h2>
          </div>
          <div className='caloriesRadialBarChartBox'>
            <div className='RadialBarChartBox'>
              <RadialBarChart percentage={totalCarbsPercentage}></RadialBarChart>
              <h5>Carbs</h5>
            </div>
            <div className='RadialBarChartBox'>
              <RadialBarChart percentage={totalProteinPercentage}></RadialBarChart>
              <h5>Protein</h5>
            </div>
            <div className='RadialBarChartBox'>
              <RadialBarChart percentage={totalFatPercentage}></RadialBarChart>
              <h5>Fat</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='basicTabsBox'>
        <BasicTabs></BasicTabs>
      </div>
      {/* <div>
        <AIAssistantBar></AIAssistantBar>
      </div> */}
    </div>
  )
}
