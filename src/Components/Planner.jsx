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

        // Run the AI analysis based on the prompt
        const meals = await s.prompt(prompt);
        setMealPlanResults(meals); // Set the result to state
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