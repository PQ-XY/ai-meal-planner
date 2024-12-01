import React from 'react'
import './Home.css'
import MyProfile from './MyProfile';
import Recommendation from './Recommendation';
import AIAssistantBar from './AIAssistantBar';
import SideWindow from './SideWindow';
import { useState } from 'react';
import allDatas_recommendation from '../data/test_recommendation_data';

export default function Home() {

  const today = new Date();
  const formattedDate = today.toLocaleDateString()

  const getMealTime = () => {
    const currentHour = new Date().getHours(); // Get the current hour (0-23)

    if (currentHour >= 5 && currentHour < 11) {
      return 'Breakfast Time';
    } else if (currentHour >= 11 && currentHour < 17) {
      return 'Lunch Time';
    } else if (currentHour >= 17 && currentHour < 22) {
      return 'Dinner Time';
    } else {
      return ''; // Late night or early morning snack
    }
  };

  //get recommendation data (recommendation api call)
  const data_recommendation = allDatas_recommendation()

  //get nick name
  const clientNickName = JSON.parse(localStorage.getItem('userName'))

  //state for data for re-render
  const[mealData, setMealData] = useState(()=> {
    const savedData = localStorage.getItem('mealPlanResult');
    return savedData ? JSON.parse(savedData) : {};
  });

  //replace meal function
  const handle_replaceMeal = (day, mealTime, meal) => {

    const updatedData = {...mealData};

    // Step 2: Check if the day exists
    if (!updatedData[day]) {
      updatedData[day] = {Breakfast: {}, Lunch: {}, Dinner: {} }; // Create the day if it doesn't exist
    };

      meal.meal = mealTime;
      updatedData[day][mealTime] = meal;

      const orderedData = {
        Breakfast: updatedData[day].Breakfast || {}, // Keep Breakfast
        Lunch: updatedData[day].Lunch || {},         // Keep Lunch
        Dinner: updatedData[day].Dinner || {}        // Keep Dinner
      }

      updatedData[day] = orderedData;

      setMealData(updatedData);
      localStorage.setItem("mealPlanResult", JSON.stringify(updatedData));
  
  };

  return (
    <div className='homePageLayout'>
      <div className='mainPage'>
        <div className='headerContainer'>
          <div className='header'>
            <h1>Hi, {clientNickName}</h1>
            <h2>{formattedDate}</h2>
          </div>
          <div className='subHeader'>
            <h3>Welcome Back!</h3>
            <h3>{getMealTime()}</h3>
          </div>
        </div>
        <div className='myProfile'>
          <MyProfile></MyProfile>
        </div>
        <div className='recommendation'>
          <Recommendation meals={data_recommendation} onReplaceMeal={handle_replaceMeal}></Recommendation>
        </div>
        {/* <div className='aiAssistantBar'>
          <AIAssistantBar></AIAssistantBar>
        </div> */}
      </div>
      <div className='sideWindowLayout'>
        <SideWindow></SideWindow>
      </div>
    </div>
  )
}
