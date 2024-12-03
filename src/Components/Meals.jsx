import React from 'react'
import './Meals.css'
import RadialBarChart from './RadialBarChart';
import AIAssistantBar from './AIAssistantBar';
import BasicTabs from './BasicTabs';
import allDatas from '../data/test_data';
import { regenSingleMeal } from '../Components/PlannerHelper';

export default function Meals() {

  //state for data for re-render
  const[mealData, setMealData] = React.useState(()=> {
    const savedData = localStorage.getItem('mealPlanResult');
    return savedData ? JSON.parse(savedData) : {};
  });

  //delete the meal card 
  const handle_deleteMeal = (day, mealTime) => {

    const updatedData = {...mealData}

    if (updatedData[day] && updatedData[day][mealTime]) {
      delete updatedData[day][mealTime];
      console.log(updatedData[day]);
      setMealData(updatedData);
      localStorage.setItem("mealPlanResult", JSON.stringify(updatedData));
    }
  };

  //replace the meal card 
  const handel_regenerateMeal = async (day, mealTime, mealName) => {

    const updatedData = {...mealData}

    console.log(localStorage.getItem('mealsArray'));
    console.log(localStorage.getItem('dietArray'));
    console.log(localStorage.getItem('allergyArray'));
    console.log(localStorage.getItem('cuisineArray'));
    console.log(localStorage.getItem('kitArray'));
    console.log(localStorage.getItem('tasteArray'));
    const flavorArray = JSON.parse(localStorage.getItem('tasteArray'))
    const SaltyFlavor = flavorArray.find((flavor) => flavor.title === "Salty")['level'];
    const SourFlavor = flavorArray.find((flavor) => flavor.title === "Sour")['level'];
    const SweetFlavor = flavorArray.find((flavor) => flavor.title === "Sweet")['level'];
    const SpicyFlavor = flavorArray.find((flavor) => flavor.title === "Spicy")['level'];
    const tasteRatings = [SweetFlavor, SourFlavor, SpicyFlavor, SaltyFlavor];
    let userInfo = {
      mealTypes: localStorage.getItem('mealsArray'),
      numDays: "1", // number of days, e.g. 7 days
      allergies: localStorage.getItem('allergyArray'), // any allergies or restrictions, e.g., peanuts, gluten-free, lactose intolerance
      preference: localStorage.getItem('cuisineArray'), // preferred cuisine type(s), e.g., Asian, Mediterranean, American, Italian
      kitchenware: localStorage.getItem('kitArray'), // available kitchen equipment, e.g., wok, fry pan, air fryer, oven, blender, pressure cooker
      tasteRating: tasteRatings // rating for sweetness, sour, spicy, and salty preference, ranging from 1 to 5
    }

    //re-generate a new meal object(new api call)
    const newMealObject = await regenSingleMeal(mealName, userInfo)
    console.log(newMealObject) 

    if (updatedData[day] && updatedData[day][mealTime]) {
      console.log(mealTime);
      console.log(newMealObject)
      updatedData[day][mealTime] = Object.values(JSON.parse(JSON.stringify(newMealObject)))[0];
      setMealData(updatedData);
      localStorage.setItem("mealPlanResult", JSON.stringify(updatedData));
    }

  };

  function getCurrentWeekDates() {
    const today = new Date();
  
    // Find Sunday (start of the week)
    // const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  
    // Find Saturday (end of the week)
    // const lastDayOfWeek = new Date(firstDayOfWeek);
    // lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);

    // Find 7th day
    const lastDay = new Date(today);
    lastDay.setDate(today.getDate() + 6);
  
    // Format dates as MM/DD
    const formatDate = (date) => {
      const month = date.getMonth() + 1; // Months are 0-indexed
      const day = date.getDate();
      return `${month}/${day}`;
    };
  
    return `${formatDate(today)} - ${formatDate(lastDay)}`;
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
  const firstDayMeals = Object.entries(mealData['Day 1'])

  // const today = new Date();
  // const formattedDate = `${today.getMonth() + 1}/${today.getDate()}`;

  // const todayMeals = datas.filter(meal => meal.date === formattedDate)
  // console.log(todayMeals)

  const totalCalories = firstDayMeals.reduce((sum,meal)=> sum + meal[1].calories, 0)

  //total Carbs
  const totalCarbs = firstDayMeals.reduce((sum,meal)=> sum + meal[1].carbs, 0)
  const totalCarbsPercentage = Math.ceil(totalCarbs * 4 / totalCalories * 100)

  //total Protein
  const totalProtein = firstDayMeals.reduce((sum,meal)=> sum + meal[1].protein, 0)
  const totalProteinPercentage =Math.ceil(totalProtein * 4 / totalCalories * 100)

  //total fat
  const totalFat = firstDayMeals.reduce((sum,meal)=> sum + meal[1].fat, 0)
  const totalFatPercentage = Math.ceil(totalFat * 9/ totalCalories * 100)
  

  return (
    <div className='mealPageContainer'>
      <div className='mealHeaderBox'>
        <div className='mealHeaderWeek'>
          <h1>7-day Meals</h1>
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
              <RadialBarChart key={totalCarbsPercentage} percentage={totalCarbsPercentage}></RadialBarChart>
              <h5>Carbs</h5>
            </div>
            <div className='RadialBarChartBox'>
              <RadialBarChart key={totalProteinPercentage} percentage={totalProteinPercentage}></RadialBarChart>
              <h5>Protein</h5>
            </div>
            <div className='RadialBarChartBox'>
              <RadialBarChart key={totalFatPercentage} percentage={totalFatPercentage}></RadialBarChart>
              <h5>Fat</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='basicTabsBox'>
        <BasicTabs mealData={mealData} onDelete={handle_deleteMeal} onGenerate={handel_regenerateMeal}></BasicTabs>
      </div>
      {/* <div>
        <AIAssistantBar></AIAssistantBar>
      </div> */}
    </div>
  )
}
