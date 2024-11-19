import React, { useState } from 'react'

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
          preference: "Asian", // preferred cuisine type(s), e.g., Asian, Mediterranean, American, Italian
          kitchenware: "wok, fry pan, air fryer", // available kitchen equipment, e.g., wok, fry pan, air fryer, oven, blender, pressure cooker
          tasteRating: [2, 3, 4, 2] // rating for sweetness, sour, spicy, and salty preference, ranging from 1 to 5
        }
        const template = `**User Information:\n 
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
        const meals = s.promptStreaming(template);
        for await (const chunk of meals) {
          setMealPlanResults(chunk);
        }
         // Set the result to state
      } catch (error) {
        console.error('Error analyzing the prompt:', error);
        setMealPlanResults('An error occurred while analyzing the prompt.');
      }
    } else {
      console.error('Model not ready');
    }
  };

  return (
    <div>
      <h1>AI Planner</h1>
      <input
        type="text"
        placeholder="Enter your prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleClick}>Generate Meal Plan</button>
      {/* Display the result */}
      {MealPlanResults && <p>Result: {MealPlanResults}</p>}
    </div>
  );
}