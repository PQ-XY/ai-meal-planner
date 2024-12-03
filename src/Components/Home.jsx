import React from 'react'
import './Home.css'
import MyProfile from './MyProfile';
import Recommendation from './Recommendation';
import SideWindow from './SideWindow';
import { useState } from 'react';
import allDatas_recommendation from '../data/test_recommendation_data';
import allDatas_recommendation2 from '../data/test_recommendation_data2'
import { regenRecommendation } from '../Components/PlannerHelper';  

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
  const [recommendedMealData, setRecommendedMealData] = useState(() => {
    const savedRecommendedMealData = localStorage.getItem('recommendedMealPlanResult');
    return savedRecommendedMealData ? JSON.parse(savedRecommendedMealData) : {};
  });

  console.log(localStorage.getItem('recommendedMealPlanResult'));
  console.log(recommendedMealData);

  const generateRecommendedMealPlan = async () =>{
    try {
      const recommendedMealPlan = await regenRecommendation();
      console.log('Recommended Meal plan generated:', recommendedMealPlan);
      return JSON.stringify(recommendedMealPlan);
    } catch(error) {
      console.error('Error generating recommended meal plan:', error);
    }
  };

  //handle regenerate recommended meals
  const handle_regenerate = async () => {
    const updated_data = await generateRecommendedMealPlan();
    console.log(updated_data);
    setRecommendedMealData(Object.values(JSON.parse(updated_data)));
    localStorage.setItem('recommendedMealPlanResult', JSON.stringify(updated_data))
  }

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
    console.log(updatedData);
    

    // Step 1: Check if the day exists
    if (!updatedData[day]) {
      updatedData[day] = {}; // Create the day if it doesn't exist
    };

    console.log(day);
    console.log(mealTime);
    console.log(meal);
    console.log(updatedData[day][mealTime]);
    
    // Step 2: Replace or add the meal
    updatedData[day][mealTime] = { ...meal, meal: mealTime}; // Avoid directly mutating the `meal` object

    // Step 3: Enforce the correct order of meals
    updatedData[day] = {
      Breakfast: updatedData[day].Breakfast || {}, // Always maintain Breakfast
      Lunch: updatedData[day].Lunch || {},         // Always maintain Lunch
      Dinner: updatedData[day].Dinner || {}        // Always maintain Dinner
    }

    setMealData(updatedData);
    localStorage.setItem("mealPlanResult", JSON.stringify(updatedData));
  
  };

  console.log(mealData)

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
          <Recommendation meals={recommendedMealData} onReplaceMeal={handle_replaceMeal} onRegenerate={handle_regenerate}></Recommendation>
        </div>
        {/* <div className='aiAssistantBar'>
          <AIAssistantBar></AIAssistantBar>
        </div> */}
      </div>
      <div className='sideWindowLayout'>
        <SideWindow mealData={mealData}></SideWindow>
      </div>
    </div>
  )
}
