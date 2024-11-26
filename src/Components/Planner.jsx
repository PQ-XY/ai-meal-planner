import React, { useState, useEffect } from 'react'
import {parseMealPlan} from './PlannerHelper'
import AddIngredient from './AddIngredient';
import AddIngredientButton from './AddIngredientButton'
import stward from '../assets/images/ai.svg'
import './Planner.css'
import SideWindow from './SideWindow';
import AIAssistantBar from './AIAssistantBar';
import RecommendationCard from './RecommendationCard';
import allDatas_planner from '../data/test_planner_data';

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
      details.calories = parseInt(caloriesMatch[1], 10);
  }

  return details;
}

export default function Planner() {
  // State for storing the prompt input and the analysis result
  const [prompt, setPrompt] = useState('');
  const [MealPlanResults, setMealPlanResults] = useState('');

  // Function to call the API and get the result
  const handleClick = async () => {
    const { available } = await window.ai.languageModel.capabilities();
    if (available !== 'no') {
      try {
        // Creating a session for the AI model
        const s = await window.ai.languageModel.create({
          systemPrompt:
            'You are an expert meal planner who can help people meal prep and design the meal plans',
          temperature: 1,
          topK: 3,
        });
        var user_info = {
          numMeals: "2", // number of meals required per day, e.g., 3 meals + 1 snack, or lunch + dinne
          numDays: "3", // number of days, e.g. 7 days
          allergies: "peanuts, peanut butter", // any allergies or restrictions, e.g., peanuts, gluten-free, lactose intolerance
          preference: "Chinese", // preferred cuisine type(s), e.g., Asian, Mediterranean, American, Italian
          kitchenware: "wok, fry pan, air fryer", // available kitchen equipment, e.g., wok, fry pan, air fryer, oven, blender, pressure cooker
          tasteRating: [2, 3, 4, 2] // rating for sweetness, sour, spicy, and salty preference, ranging from 1 to 5
        }
        const planTemplate = `**User Information:\n 
        - **Number of meals per day:** ${user_info["numMeal"]}\n 
        - **Number of days for the meal plan:** ${user_info["numDays"]}\n 
        - **Allergies and dietary restrictions:** ${user_info["allergies"]}\n
        - **Preferred cuisine(s):** ${user_info["preference"]}\n
        - **Available kitchenware:** ${user_info["kitchenware"]}\n
        **Task:** 
        Create a list of unique meals for each day based on the number of meals from the user information. The list should consider the user's cuisine preferences, taste ratings, and dietary restrictions.\n
        Please only provide the meal plan strictly following the output template\n
        **Output Template:**\n
        Day 1:\n
        Breakfast: Avocado Toast\n
        Lunch: Grilled Chicken Caesar Salad\n
        Day 2:\n
        Breakfast:...\n`

        // Run the AI analysis based on the prompt
        const promptRst = await s.prompt(planTemplate);
        setMealPlanResults(promptRst);
        let mealPlan = parseMealPlan(promptRst);
        for (const day in mealPlan) {
          const meals = mealPlan[day];
    
          // Iterate through each meal type (Breakfast, Lunch, Dinner)
          for (const mealType in meals) {
              const mealNames = meals[mealType];
    
              // Iterate through each meal name and fetch details
              for (let i = 0; i < mealNames.length; i++) {
                  const mealName = mealNames[i];

                  const mealTemplate = `Provide detailed information for the meal "${mealName}" in the following format:\n\n` +
                `Meal Name: [Meal Name]\nIngredients:\n- [Ingredient 1]\n- [Ingredient 2]\n...\n` +
                `Recipe:\nStep 1 [Instruction 1]\nStep 2 [Instruction 2]\n...\n` +
                `Total Calories: [Calories]`
    
                  // Fetch meal details from the API
                  const promptRst = await s.prompt(mealTemplate);

                  console.log(promptRst);

                  const mealDetails = parseMealDetails(promptRst);
    
                  // Add the meal details back to the meal plan
                  mealPlan[day][mealType][i] = {
                      name: mealName,
                      details: mealDetails, // Include ingredients, recipe, and calories
                  };
                  console.log(mealPlan);
              }
          }
      }
      console.log('success!');
      console.log(mealPlan);
      return mealPlan;
      } catch (error) {
        console.error('Error analyzing the prompt:', error);
        setMealPlanResults('An error occurred while analyzing the prompt.');
      }
    } else {
      console.error('Model not ready');
    }
  };

  const [storedIngredients, setStoredIngredients] = useState([]);

  const generateRecipes = () => {
    // Store the current values into the final ingredients list when the button is clicked
    const ingredientsToStore = ingredientArray.filter(item => item.name.trim() !== ''); // Exclude empty names
    setStoredIngredients(ingredientsToStore); // Save to state
    console.log('Ingredients to send:', ingredientsToStore); // Log to check the result
    // Send the ingredientsToStore to the backend here
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
  const planner_data = allDatas_planner()
  

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
          <div class='button-question-container'>
            <img className='planner-container-image' src={stward}></img>
            <div className='planner-container-title'>
              <p className='planner-container-title-big'>Stward</p>
              <p className='planner-container-title-small'>Based on the amount of ingredients and your habits, I recommend the following 2 dishes:</p>
              <div className='add-ingredient-container'>
                {planner_data.map((meal,index)=>(
                  <RecommendationCard key={index} meal={meal}/>
                ))}
                <button className='generate-button' onClick={generateRecipes}>Re-generate</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='aiAssistantBar-container'>
          <AIAssistantBar></AIAssistantBar>
        </div> */}
      </div>
      {/* Display the result */}
      {MealPlanResults && <p>Result: {MealPlanResults}</p>}
      <div className="planner-sideWindowLayoutWrapper">
        <div className='planner-sideWindowLayout'>
          <SideWindow></SideWindow>
        </div>
        {/* <div className='planner-sideWindow-extra'>
        </div> */}
      </div>
    </div>
  );
}