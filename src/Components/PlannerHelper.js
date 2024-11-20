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