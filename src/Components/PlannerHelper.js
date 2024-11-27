export function parseMealPlan(mealPlanText) {
    // To store the final meal plans
    const mealPlan = {};
    // Find all expressions matching "Day X:"
    const mealRegex = /Day (\d+):\s*(.*?)\s*(?=Day \d+:|$)/gs;
    const matches = mealPlanText.matchAll(mealRegex);

    for (const match of matches) {
        const dayIndex = parseInt(match[1]);// Extract day number
        const mealsText = match[2];// Extract all meal text for the specific day
        const meals = mealsText.trim().split('\n');
        const dayMeals = {};

        meals.forEach(meal => {
            // Split meals into mealType and mealName
            const [mealType, mealName] = meal.split(':').map(part => part.trim());
            // Only include meals with a valid name
            if (mealName && ["Breakfast", "Lunch", "Dinner"].includes(mealType)) {
                // If this meal type doesn't exist yet, initialize it as an empty array
                if (!dayMeals[mealType]) {
                    dayMeals[mealType] = [];
                }
                // Add the meal name to the array for this meal type
                dayMeals[mealType].push(mealName);
            }
        });

        if (Object.keys(dayMeals).length > 0) {
            if (!mealPlan[`Day ${dayIndex}`]) {
                mealPlan[`Day ${dayIndex}`] = dayMeals;
            } else {
                // Merge meals if the day already exists
                Object.keys(dayMeals).forEach(mealType => {
                    if (!mealPlan[`Day ${dayIndex}`][mealType]) {
                        mealPlan[`Day ${dayIndex}`][mealType] = [];
                    }
                    mealPlan[`Day ${dayIndex}`][mealType].push(...dayMeals[mealType]);
                });
            }
        }
    }

    // Sort the meal plan by day index
    const sortedMealPlan = Object.keys(mealPlan).sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0])).reduce((acc, key) => {
        acc[key] = mealPlan[key];

        // Sort the meal types
        const sortedMeals = {};
        ["Breakfast", "Lunch", "Dinner"].forEach(mealType => {
            if (mealPlan[key][mealType]) {
                sortedMeals[mealType] = mealPlan[key][mealType];
            }
        });
        acc[key] = sortedMeals;

        return acc;
    }, {});

    return sortedMealPlan;
}

// Function to parse the API response into structured details
export function parseMealDetails(responseText) {
    const details = {
        name: "",
        ingredients: [],
        recipe: [],
        calories: 0,
        carbs: 0,
        protein: 0,
        fat: 0
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

export async function mealPlanGenerator(userInfo){
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
          numMeals: "3", // number of meals required per day, e.g., 3 meals + 1 snack, or lunch + dinne
          numDays: "7", // number of days, e.g. 7 days
          allergies: "peanuts, peanut butter", // any allergies or restrictions, e.g., peanuts, gluten-free, lactose intolerance
          preference: "Chinese", // preferred cuisine type(s), e.g., Asian, Mediterranean, American, Italian
          kitchenware: "wok, fry pan, air fryer", // available kitchen equipment, e.g., wok, fry pan, air fryer, oven, blender, pressure cooker
          tasteRating: [2, 3, 4, 2] // rating for sweetness, sour, spicy, and salty preference, ranging from 1 to 5
        }
        const planTemplate = `**User Information:\n 
- **Number of meals per day:** ${userInfo["mealTypes"]}\n 
- **Number of days for the meal plan:** ${userInfo["numDays"]}\n 
- **Allergies and dietary restrictions:** ${userInfo["allergies"]}\n
- **Preferred cuisine(s):** ${userInfo["preference"]}\n
- **Available kitchenware:** ${userInfo["kitchenware"]}\n
- **Taste preference:**${userInfo['tasteRating']} // users' sweetness, sour, spicy, and salty preference, ranging from 1 to 5\n
**Task:** 
Create a list of unique meals for each day based on the number of meals from the user information. The list should consider the user's cuisine preferences, taste ratings, and dietary restrictions.\n
Please only provide the meal plan strictly following the output template (change the format based on the user's mealtypes)\n
**Output Template:**\n
Day 1:\n
Breakfast: Avocado Toast\n
Lunch: Grilled Chicken Caesar Salad\n
Dinner: Mapo Tofu\n
Day 2:\n
Breakfast:...\n`

        console.log(planTemplate);
        // Run the AI analysis based on the prompt
        const promptRst = await s.prompt(planTemplate);
        console.log(promptRst);
        let mealPlan = parseMealPlan(promptRst);
        for (const day in mealPlan) {
            const meals = mealPlan[day];
      
            // Iterate through each meal type (Breakfast, Lunch, Dinner)
            for (const mealType in meals) {
                console.log(`${s.tokensSoFar}/${s.maxTokens} (${s.tokensLeft} left)`);

                const mealNames = meals[mealType];
      
                // Iterate through each meal name and fetch details
                for (let i = 0; i < mealNames.length; i++) {
                    const mealName = mealNames[i];
  
                    const mealTemplate = `Provide detailed information for the meal "${mealName}" strictly following the format below:\n**Output Template:**\nMeal Name: Tuna Salad Sandwiches on Whole Wheat Bread\n
Ingredients:\n
- 3 cans (5oz each) tuna in water, drained\n
- 1/2 cup mayonnaise\n
- Tomato slices (optional)\n
...\n
Recipe:\n
Step 1: Drain the tuna and set aside\n
Step 2: In a medium bowl, whisk together mayonnaise, lemon juice, garlic, salt, and pepper.\n
Step 3:...\n
Total Calories: 300\n
carbs: 45,\n
protein: 25,\n
fat: 18\n\n
Please always return english and not code. Also don't return any text back with accents`
      
                    // Fetch meal details from the API
                    console.log(mealTemplate);
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
        return mealPlan;
      } catch (error) {
        console.error('Error analyzing the prompt:', error);
      }
    } else {
      console.error('Model not ready');
    }
};

export async function mealDetailGenerator(mealPlan){
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
        for (const day in mealPlan) {
          const meals = mealPlan[day];
    
          // Iterate through each meal type (Breakfast, Lunch, Dinner)
          for (const mealType in meals) {
              const mealNames = meals[mealType];
    
              // Iterate through each meal name and fetch details
              for (let i = 0; i < mealNames.length; i++) {
                  const mealName = mealNames[i];

                  const mealTemplate = `Provide detailed information for the meal "${mealName}" strictly following the format below:\n` +
                `Meal Name: Tuna Salad Sandwiches on Whole Wheat Bread\n
                Ingredients:\n
                - 3 cans (5oz each) tuna in water, drained\n
                - 1/2 cup mayonnaise\n
                - Tomato slices (optional)\n
                ...\n
                Recipe:\n
                Step 1: Drain the tuna and set aside\n
                Step 2: In a medium bowl, whisk together mayonnaise, lemon juice, garlic, salt, and pepper.\n
                Step 3:...\n
                Total Calories: 300\n
                carbs: 45,\n
                protein: 25,\n
                fat: 18
                `
    
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
        return mealPlan;
      } catch (error) {
        console.error('Error analyzing the prompt when generating details:', error);
      }
    } else {
      console.error('Model not ready');
    }
};