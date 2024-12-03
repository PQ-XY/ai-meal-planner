import React, { useState, useEffect } from 'react'
import {parseMealPlan} from './PlannerHelper'
import AddIngredient from './AddIngredient';
import AddIngredientButton from './AddIngredientButton'
import stward from '../assets/images/ai.svg'
import './Planner.css'
import SideWindow from './SideWindow';
import AIAssistantBar from './AIAssistantBar';
import RecommendationCard_IngredientBase from './RecommendationCard_IngredientBase';
import allDatas_planner from '../data/test_planner_data';
import { ingreToMeal } from './PlannerHelper';
import allDatas_planner2 from '../data/test_planner_data2';

// Function to parse the API response into structured details
function parseMealDetails(responseText) {
  const details = {
      name: "",
      ingredients: [],
      recipe: [],
      calories: 0,
  };

  // Extract the meal name
  const mealNameMatch = responseText.match(/Meal Name:\s*(.+)/);
  if (mealNameMatch) {
      details.name = mealNameMatch[1];
  }

  // Extract ingredients
  const ingredientsMatch = responseText.match(/Ingredients:\s*([\s\S]*?)Recipe:/);
  if (ingredientsMatch) {
      details.ingredients = ingredientsMatch[1]
          .trim()
          .split("\n")
          .map(item => item.replace(/^-/, "").trim());
  }

  // Extract recipe steps
  const recipeMatch = responseText.match(/Recipe:\s*([\s\S]*?)Total Calories:/);
  if (recipeMatch) {
      details.recipe = recipeMatch[1]
          .trim()
          .split("\n")
          .map(step => step.trim());
  }

  // Extract calories
  const caloriesMatch = responseText.match(/Total Calories:\s*(\d+)/);
  if (caloriesMatch) {
      details.calories = caloriesMatch[1];
  }

  return details;
}

export default function Planner() {
  // State for storing the prompt input and the analysis result
  const [prompt, setPrompt] = useState('');
  const [MealPlanResults, setMealPlanResults] = useState('');

  const [storedIngredients, setStoredIngredients] = useState([]);

  const [showCard, setShowCard] = useState(false);

  const handleShowCard = () => {
    setShowCard(!showCard)
  }

  const generateRecipes = async () => {
    // Store the current values into the final ingredients list when the button is clicked
    const ingredientsToStore = ingredientArray.filter(item => item.name.trim() !== ''); // Exclude empty names
    setStoredIngredients(ingredientsToStore); // Save to state
    console.log('Ingredients to send:', ingredientsToStore); // Log to check the result
    // Send the ingredientsToStore to the backend here
    const mealGenerated = await ingreToMeal(ingredientsToStore);
    console.log(mealGenerated);
    localStorage.setItem("IngreToMealResult", JSON.stringify(mealGenerated));
    handleShowCard();
    // Example: axios.post('/your-endpoint', { ingredients: ingredientsToStore });
  };

  const regenerateRecipes = async () => {
    // Store the current values into the final ingredients list when the button is clicked
    const ingredientsToStore = ingredientArray.filter(item => item.name.trim() !== ''); // Exclude empty names
    setStoredIngredients(ingredientsToStore); // Save to state
    console.log('Ingredients to send:', ingredientsToStore); // Log to check the result
    // Send the ingredientsToStore to the backend here
    const mealGenerated = await ingreToMeal(ingredientsToStore);
    console.log(mealGenerated);
    localStorage.setItem("IngreToMealResult", JSON.stringify(mealGenerated));
    // Example: axios.post('/your-endpoint', { ingredients: ingredientsToStore });
  };

  const [ingredientArray,setIngredient]=useState([{name:'',count:1}])
  
  // useEffect to track whenever the ingredientArray is updated
  useEffect(() => {
    console.log('ingredientArray updated:', ingredientArray);
  }, [ingredientArray]); // Runs whenever ingredientArray changes

  const addNewIngredient=()=>{
    setIngredient((prevArray)=>[...prevArray,{name:'', count:1}])
    console.log('added');
  };

  const handleNameChange = (index, newName) => {
    setIngredient(prevArray => {
      const updatedArray = [...prevArray];
      updatedArray[index].name = newName;
      return updatedArray;
    });
  };

  const handleCountChange = (index, newCount) => {
    setIngredient(prevArray => {
      const updatedArray = [...prevArray];
      updatedArray[index].count = newCount;
      return updatedArray;
    });
  };

  //test planner data
  const planner_data = JSON.parse(localStorage.getItem("IngreToMealResult"))
  const [meal_data, setMeal_data] = useState (Object.values(planner_data))

  //handle re-generate
  const handle_regenerate = () => {
    regenerateRecipes();
    setMeal_data(meal_data);
  }
  
  //state for data for re-render
  const[mealData, setMealData] = useState(()=> {
    const savedData = localStorage.getItem('mealPlanResult');
    return savedData ? JSON.parse(savedData) : {};
  });

  //replace meal function
  const handle_replaceMeal = (day, mealTime, meal) => {

    const updatedData = {...mealData};

    if (!updatedData[day]) {
      updatedData[day] ={};
    };

      meal.meal = mealTime;
      updatedData[day][mealTime] = meal;
      setMealData(updatedData);
      localStorage.setItem("mealPlanResult", JSON.stringify(updatedData));
  
  };

  return (
    <div className='planner-page-layout'>
      {/*
      <input
        type="text"
        placeholder="Enter your prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleClick}>Generate Meal Plan</button>
      */}
      <div className='planner-container'>
        <div className='planner-container-scrollable'>
          <div>
            <p className='big-title'>Ingredients Steward</p>
          </div>
          <div class='button-question-container'>
            <img className='planner-container-image' src={stward}></img>
            <div className='planner-container-title'>
              <p className='planner-container-title-big'>Stward</p>
              <p className='planner-container-title-small'>What ingredients are left in your fridge? Let me help you to generate recipes!</p>
              <div className='add-ingredient-container'>
                {ingredientArray.map((item,index)=>(
                  <AddIngredient key={index} name={item.name} count={item.count} onNameChange={(newName) => handleNameChange(index, newName)}  // Handle name change
                  onCountChange={(newCount) => handleCountChange(index, newCount)}/>
                ))}
                <AddIngredientButton onClick={addNewIngredient}/>
                <button className='generate-button' onClick={generateRecipes}>Generate recipes</button>
              </div>
            </div>
          </div>
          {showCard && (
              <div class='button-question-container'>
                <img className='planner-container-image' src={stward}></img>
                <div className='planner-container-title'>
                  <p className='planner-container-title-big'>Stward</p>
                  <p className='planner-container-title-small'>Based on the amount of ingredients and your habits, I recommend the following 2 dishes:</p>
                  <div className='add-ingredient-card-container'>
                    {(meal_data).map((meal,index)=>(
                      <RecommendationCard_IngredientBase key={index} meal={meal} onReplaceMeal={handle_replaceMeal}/>
                    ))}
                    <button className='generate-button' onClick={handle_regenerate}>Re-generate</button>
                  </div>
                </div>
            </div>
          )}
        </div>
        {/* <div className='aiAssistantBar-container'>
          <AIAssistantBar></AIAssistantBar>
        </div> */}
      </div>
      {/* Display the result */}
      {MealPlanResults && <p>Result: {MealPlanResults}</p>}
      <div className='planner-sideWindowLayout'>
        <SideWindow mealData={mealData}></SideWindow>
      </div>
    </div>
  );
}