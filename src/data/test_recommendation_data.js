const datas_recommendation = [
  {
    meal: "any",
    mealName: "Avocado Toast with Poached Eggs",
    mealImg:"https://data.thefeedfeed.com/static/2021/04/06/1617726496606c8c20a7a82.jpg",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tbsp olive oil",
      "Salt and pepper to taste",
      "Optional: chili flakes, lemon juice"
    ],
    cookTime: "10 minutes",
    steps: [
      "Toast the bread slices until golden brown.",
      "Mash the avocado with a fork, adding salt, pepper, and optional chili flakes or lemon juice.",
      "Poach the eggs in simmering water for about 3-4 minutes.",
      "Spread the mashed avocado on the toasted bread, top with the poached eggs, and drizzle with olive oil."
    ],
    calories: 350,
    carbs: 30,
    protein: 12,
    fat: 20
  },
  {
    meal: "any",
    mealName: "Vegan Buddha Bowl",
    mealImg:"https://simplyceecee.co/wp-content/uploads/2018/07/veganbuddhabowl-2.jpg",
    ingredients: [
      "1 cup cooked quinoa",
      "1/2 cup chickpeas, roasted",
      "1/2 cup cucumber, sliced",
      "1/4 cup shredded carrots",
      "1/4 cup cherry tomatoes, halved",
      "1/4 cup hummus",
      "2 tbsp tahini",
      "Lemon wedge for garnish"
    ],
    cookTime: "15 minutes",
    steps: [
      "Cook quinoa according to package instructions.",
      "Roast chickpeas in the oven at 400°F for 20 minutes.",
      "Assemble the bowl with quinoa, roasted chickpeas, cucumber, carrots, and cherry tomatoes.",
      "Add a dollop of hummus and drizzle with tahini sauce.",
      "Garnish with a lemon wedge."
    ],
    calories: 450,
    carbs: 55,
    protein: 15,
    fat: 18
  },
  {
    meal: "any",
    mealName: "Spaghetti Aglio e Olio",
    mealImg:"https://www.simplyrecipes.com/thmb/gjS-FSuYnqK3fclkE2fWhYl1VWQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-Aglio-e-Olio-LEAD-2-c8e7e8c6edb04a8691463c6ea8cd4ba1.jpg",
    ingredients: [
      "200g spaghetti",
      "4 cloves garlic, thinly sliced",
      "1/4 cup olive oil",
      "1 tsp red pepper flakes",
      "Salt to taste",
      "1/4 cup fresh parsley, chopped",
      "Grated Parmesan (optional)"
    ],
    cookTime: "20 minutes",
    steps: [
      "Cook spaghetti according to package instructions.",
      "While pasta is cooking, heat olive oil in a pan and sauté the garlic until golden brown.",
      "Add red pepper flakes, then drain pasta and add to the garlic oil mixture.",
      "Toss the pasta in the oil, then add parsley and toss again.",
      "Serve with grated Parmesan, if desired."
    ],
    calories: 400,
    carbs: 60,
    protein: 12,
    fat: 15
  }
];

  export default function allDatas_recommendation () {
    return datas_recommendation
  }