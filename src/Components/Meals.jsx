import React, { useState } from 'react'
import './Meals.css'
import RadialBarChart from './RadialBarChart';
import AIAssistantBar from './AIAssistantBar';
import BasicTabs from './BasicTabs';
import allDatas from '../data/test_data';
import { regenSingleMeal } from '../Components/PlannerHelper';
import { generateFoodImage } from '../apis/foodImageApi';


export default function Meals() {

  //state for data for re-render
  const[mealData, setMealData] = React.useState(()=> {
    const savedData = localStorage.getItem('mealPlanResult');
    return savedData ? JSON.parse(savedData) : {};
  });
  const [loading, setLoading] = useState(false); // Track loading state

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
  const handel_regenerateMeal = (day, mealTime, mealName) => {

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
    // //re-generate a new meal object(new api call)
    // const newMealObject = {
    //   meal:mealTime,
    //   mealName: "Grilled Salmon",
    //   calories: 500,
    //   carbs:20,
    //   fat: 12,
    //   protein:10,
    //   cookTime:"",
    //   ingredients: ["Salmon", "Garlic", "Butter"],
    //   steps:["step 1: Pat the salmon fillet dry with paper towels.",
    //         "step 2: For a more intense flavor, marinate the salmon in the olive oil, lemon juice, herbs, garlic powder, salt, and pepper for at least 30 minutes or up to overnight in the refrigerator.",
    //         "step 3: Heat a grill to medium-high heat. ",
    //         "step 4: Place the marinated salmon fillet skin-side down on the hot grill.",
    //         "step 5: Grill for 5-7 minutes per side, or until cooked through and flakes easily with a fork.",
    //         "step 6: Use a meat thermometer to ensure the salmon reaches an internal temperature of 145°F (63°C) for safety.",
    //         "step 7: emove the salmon from the grill and let it rest for 2-3 minutes before serving.",
    //         "step 8: Flake the cooked salmon and serve on a plate with your favorite sides.",
    //   ]
    // };

    const mealName = (updatedData[day] && updatedData[day][mealTime] && updatedData[day][mealTime].mealName) || newMealObject.mealName

    getMealImg(day, mealTime, mealName)
      .then((mealImg) => {
        newMealObject.mealImg = mealImg

        if (updatedData[day] && updatedData[day][mealTime]) {
          updatedData[day][mealTime] = {...newMealObject, ...updatedData[day][mealTime]};
          setMealData(updatedData);
          localStorage.setItem("mealPlanResult", JSON.stringify(updatedData));
        }
      })

  };

  const getMealImg = async (day, mealTime, mealName) => {
    let cachedImage = localStorage.getItem(`meal-img-${day}-${mealTime}`); // Check if the image is cached

    console.log(cachedImage)
    if (!cachedImage) {
      // Otherwise, fetch the image from the API
      try {
        let res = await generateFoodImage(mealName)
        console.log(res)
        if (res && typeof res === 'string') {
          cachedImage = res; // Update image source with the API result
          localStorage.setItem(`meal-img-${day}-${mealTime}`, res); // Cache the image in localStorage
        }
      } catch(e) {
        console.error('Failed to generate food image');
      }
    }

    return cachedImage
  }

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
