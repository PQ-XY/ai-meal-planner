const planner_data = [
    {
        date: "any",
        meal: "any",
        mealName: "Sweet and Sour Chicken",
        mealImg: "https://www.dinneratthezoo.com/wp-content/uploads/2020/02/sweet-and-sour-chicken-2.jpg",
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
          "Coat chicken pieces with cornstarch.",
          "Heat oil in a pan and fry chicken until golden brown.",
          "Add bell peppers and pineapple chunks to the pan and stir-fry for 3 minutes.",
          "Mix in sweet and sour sauce and soy sauce, then simmer for 5 minutes.",
          "Serve with steamed rice."
        ],
        calories: 480,
        carbs: 45,
        protein: 25,
        fat: 18
      },
      {
        date: "any",
        meal: "any",
        mealName: "Mapo Tofu",
        mealImg: "https://omnivorescookbook.com/wp-content/uploads/2017/04/1702_Mapo-Tofu_001.jpg",
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
          "Heat a pan and dry toast Sichuan peppercorns, then grind them into powder.",
          "Cook ground pork in the pan until browned.",
          "Add chili bean paste, soy sauce, and chicken broth, stirring until combined.",
          "Gently mix in tofu cubes and simmer for 5 minutes.",
          "Sprinkle with ground Sichuan peppercorns and green onions before serving."
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