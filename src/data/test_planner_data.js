const planner_data = [
    {
        // date: "any",
        meal: "any",
        mealName: "Sweet and Sour Chicken",
        mealImg: "https://www.recipetineats.com/tachyon/2015/10/Sweet-Sour-Chicken_600px1-Featured.jpg",
        ingredients: [
          "1/2 lb chicken breast, diced",
          "1/4 cup cornstarch",
          "1/4 cup diced bell peppers",
          "1/4 cup pineapple chunks",
          "2 tbsp sweet and sour sauce",
          "1 tbsp soy sauce",
          "1 tbsp cooking oil"
        ],
        cookTime: "25 minutes",
        steps: [
          "1. Coat chicken pieces with cornstarch.",
          "2. Heat oil in a pan and fry chicken until golden brown.",
          "3. Add bell peppers and pineapple chunks to the pan and stir-fry for 3 minutes.",
          "4. Mix in sweet and sour sauce and soy sauce, then simmer for 5 minutes.",
          "5. Serve with steamed rice."
        ],
        calories: 480,
        carbs: 45,
        protein: 25,
        fat: 18
      },
      {
        // date: "any",
        meal: "any",
        mealName: "Mapo Tofu",
        mealImg: "https://www.cookwithmanali.com/wp-content/uploads/2021/03/Vegan-Mapo-Tofu-500x500.jpg",
        ingredients: [
          "1 block of tofu (firm, cubed)",
          "1/2 cup ground pork",
          "2 tbsp chili bean paste (Doubanjiang)",
          "1 tbsp soy sauce",
          "1 tbsp Sichuan peppercorns",
          "1/4 cup chicken broth",
          "2 green onions (chopped)"
        ],
        cookTime: "20 minutes",
        steps: [
          "1. Heat a pan and dry toast Sichuan peppercorns, then grind them into powder.",
          "2. Cook ground pork in the pan until browned.",
          "3. Add chili bean paste, soy sauce, and chicken broth, stirring until combined.",
          "4. Gently mix in tofu cubes and simmer for 5 minutes.",
          "5. Sprinkle with ground Sichuan peppercorns and green onions before serving."
        ],
        calories: 400,
        carbs: 10,
        protein: 20,
        fat: 30
      }
      
]

export default function allDatas_planner () {
    return planner_data
  }