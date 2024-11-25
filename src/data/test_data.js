let datas = [
    // Monday
    {
      day: "Monday",
      meal: "Breakfast",
      mealName: "Oatmeal with Fresh Berries",
      mealImg:"https://www.pcrm.org/sites/default/files/Oatmeal%20and%20Berries.jpg",
      ingredients: ["1/2 cup oats", "1 cup almond milk", "1/4 cup fresh berries", "1 tbsp honey"],
      cookTime: "10 minutes",
      steps: [
        "Heat almond milk in a pot.",
        "Add oats and cook for 5-7 minutes.",
        "Top with fresh berries and honey."
      ],
      calories: 250,
      carbs: 45,
      protein: 6,
      fat: 4
    },
    {
      day: "Monday",
      meal: "Lunch",
      mealName: "Grilled Chicken Salad",
      mealImg:"https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-salad-index-6628169554c88.jpg?crop=0.6667863339915036xw:1xh;center,top&resize=1200:*",
      ingredients: [
        "1 chicken breast",
        "2 cups mixed greens",
        "1/2 avocado",
        "1 tbsp olive oil",
        "1 tbsp balsamic vinegar"
      ],
      cookTime: "20 minutes",
      steps: [
        "Grill the chicken breast for 15 minutes.",
        "Slice avocado and toss with greens.",
        "Top with chicken and drizzle with olive oil and balsamic vinegar."
      ],
      calories: 400,
      carbs: 10,
      protein: 35,
      fat: 20
    },
    {
      day: "Monday",
      meal: "Dinner",
      mealName: "Baked Salmon with Quinoa and Steamed Veggies",
      mealImg:"https://cdn.prod.website-files.com/65ea1d4b982c267288ce4bca/668455aa31b7768a8f964bf7_matthuesart_Grilled_Salmon_with_Quinoa_and_Steamed_Broccoli_c690c998-0991-468a-aadc-aa6b48f297ec.png",
      ingredients: [
        "1 salmon fillet",
        "1/2 cup quinoa",
        "1 cup broccoli",
        "1 tbsp olive oil",
        "Lemon juice"
      ],
      cookTime: "30 minutes",
      steps: [
        "Preheat oven to 375°F.",
        "Bake salmon for 20 minutes.",
        "Cook quinoa as per package instructions.",
        "Steam broccoli and serve everything together."
      ],
      calories: 450,
      carbs: 30,
      protein: 40,
      fat: 18
    },
  
    // Tuesday
    {
      day: "Tuesday",
      meal: "Breakfast",
      mealName: "Greek Yogurt with Granola and Honey",
      mealImg:"https://images.squarespace-cdn.com/content/v1/57b72830be65946ef827cd7b/1540402764288-KDU93BNXXB8X4KV8QWX1/IMG_9013.JPG",
      ingredients: [
        "1 cup Greek yogurt",
        "1/4 cup granola",
        "1 tbsp honey",
        "1 tbsp chia seeds"
      ],
      cookTime: "5 minutes",
      steps: [
        "Scoop yogurt into a bowl.",
        "Top with granola, chia seeds, and drizzle with honey."
      ],
      calories: 300,
      carbs: 35,
      protein: 15,
      fat: 8
    },
    {
      day: "Tuesday",
      meal: "Lunch",
      mealName: "Turkey and Avocado Wrap",
      mealImg:"https://www.tasteofhome.com/wp-content/uploads/2018/01/Turkey-Guacamole-Wraps_EXPS_SDAM18_27746_B12_07_1b.jpg",
      ingredients: [
        "1 whole-grain tortilla",
        "4 slices turkey breast",
        "1/2 avocado",
        "1/4 cup spinach",
        "1 tbsp hummus"
      ],
      cookTime: "10 minutes",
      steps: [
        "Spread hummus on the tortilla.",
        "Layer turkey, avocado slices, and spinach.",
        "Roll the tortilla tightly and cut in half."
      ],
      calories: 350,
      carbs: 30,
      protein: 25,
      fat: 15
    },
    {
      day: "Tuesday",
      meal: "Dinner",
      mealName: "Stir-Fried Tofu with Vegetables and Rice",
      mealImg:"https://www.simplyrecipes.com/thmb/eSjn6vsdKpQIdrD4msJcO41Wm84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Spicy-Tofu-Stirfry-LEAD-3-3da17681605c41688be8742e045f71f5.jpg",
      ingredients: [
        "1/2 block firm tofu",
        "1 cup mixed vegetables (carrots, bell peppers, snap peas)",
        "1 tbsp soy sauce",
        "1 tsp sesame oil",
        "1/2 cup cooked brown rice"
      ],
      cookTime: "25 minutes",
      steps: [
        "Press and cube the tofu.",
        "Heat sesame oil in a pan and stir-fry tofu until golden.",
        "Add vegetables and soy sauce, cooking for 10 minutes.",
        "Serve with brown rice."
      ],
      calories: 400,
      carbs: 50,
      protein: 15,
      fat: 10
    },
  
    // Wednesday
    {
      day: "Wednesday",
      meal: "Breakfast",
      mealName: "Smoothie Bowl",
      mealImg:"https://images.themodernproper.com/billowy-turkey/production/posts/2021/Smoothie-Bowl-8.jpeg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1641225383&s=139a98620a1c262e385ffe030a55cbc2",
      ingredients: [
        "1 frozen banana",
        "1/2 cup frozen berries",
        "1/2 cup almond milk",
        "1 tbsp peanut butter",
        "1 tbsp granola"
      ],
      cookTime: "5 minutes",
      steps: [
        "Blend frozen banana, berries, almond milk, and peanut butter.",
        "Pour into a bowl and top with granola."
      ],
      calories: 300,
      carbs: 40,
      protein: 8,
      fat: 8
    },
    {
      day: "Wednesday",
      meal: "Lunch",
      mealName: "Quinoa Salad with Chickpeas",
      mealImg:"https://www.wellplated.com/wp-content/uploads/2021/04/Chickpea-Quinoa-Salad.jpg",
      ingredients: [
        "1/2 cup cooked quinoa",
        "1/2 cup chickpeas",
        "1/4 cup diced cucumber",
        "1/4 cup cherry tomatoes",
        "1 tbsp olive oil",
        "1 tbsp lemon juice"
      ],
      cookTime: "15 minutes",
      steps: [
        "Mix quinoa, chickpeas, cucumber, and cherry tomatoes.",
        "Drizzle with olive oil and lemon juice, and toss well."
      ],
      calories: 350,
      carbs: 45,
      protein: 12,
      fat: 10
    },
    {
      day: "Wednesday",
      meal: "Dinner",
      mealName: "Grilled Shrimp with Zucchini Noodles",
      mealImg:"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/01/Zucchini-Noodles-Pasta-with-Shrimp-1.jpg",
      ingredients: [
        "1/2 pound shrimp",
        "1 zucchini (spiralized)",
        "1 tbsp olive oil",
        "1 garlic clove",
        "1/2 lemon"
      ],
      cookTime: "20 minutes",
      steps: [
        "Heat olive oil in a pan and sauté garlic.",
        "Cook shrimp until pink.",
        "Add zucchini noodles and toss for 2 minutes.",
        "Serve with a squeeze of lemon."
      ],
      calories: 300,
      carbs: 10,
      protein: 35,
      fat: 12
    },
  
    // Thursday
    {
        day: "Thursday",
        meal: "Breakfast",
        mealName: "Avocado Toast with Egg",
        mealImg:"https://www.inspiredtaste.net/wp-content/uploads/2018/08/Avocado-Toast-Recipe-1200.jpg",
        ingredients: [
        "1 slice whole-grain bread",
        "1/2 avocado",
        "1 egg",
        "Salt and pepper"
        ],
        cookTime: "10 minutes",
        steps: [
        "Toast the bread.",
        "Mash the avocado onto the toast.",
        "Cook the egg to your preference (fried or boiled) and place on top.",
        "Season with salt and pepper."
        ],
        calories: 300,
        carbs: 20,
        protein: 10,
        fat: 20
    },
    {
        day: "Thursday",
        meal: "Lunch",
        mealName: "Veggie Wrap",
        mealImg:"https://tastesbetterfromscratch.com/wp-content/uploads/2014/04/Veggie-Wrap-2.jpg",
        ingredients: [
        "1 whole-grain tortilla",
        "1/4 cup hummus",
        "1/4 cup shredded carrots",
        "1/4 cup diced bell peppers",
        "1/4 cup spinach leaves"
        ],
        cookTime: "10 minutes",
        steps: [
        "Spread hummus on the tortilla.",
        "Add carrots, bell peppers, and spinach.",
        "Roll up the tortilla and slice in half."
        ],
        calories: 350,
        carbs: 40,
        protein: 8,
        fat: 15
    },
    {
        day: "Thursday",
        meal: "Dinner",
        mealName: "Chicken Stir-Fry with Rice",
        mealImg:"https://www.saltandlavender.com/wp-content/uploads/2020/07/teriyaki-chicken-stir-fry-11.jpg",
        ingredients: [
        "1 chicken breast",
        "1 cup mixed vegetables (broccoli, carrots, bell peppers)",
        "1 tbsp soy sauce",
        "1 tsp sesame oil",
        "1/2 cup cooked rice"
        ],
        cookTime: "25 minutes",
        steps: [
        "Cook the chicken breast in a pan until browned.",
        "Add vegetables and soy sauce and stir-fry for 10 minutes.",
        "Serve over cooked rice."
        ],
        calories: 450,
        carbs: 40,
        protein: 35,
        fat: 12
    },
    
    // Friday
    {
        day: "Friday",
        meal: "Breakfast",
        mealName: "Banana Pancakes",
        mealImg:"https://www.allrecipes.com/thmb/6x0Lw9L4MEU8INHnK4tXGRV9XWI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20334-banana-pancakes-i-DDMFS-4x3-9f291f03044247d48c9ec26917952402.jpg",
        ingredients: [
        "1 ripe banana",
        "2 eggs",
        "1/4 cup oats",
        "1 tbsp maple syrup"
        ],
        cookTime: "15 minutes",
        steps: [
        "Mash the banana and mix with eggs and oats to form a batter.",
        "Cook small pancakes in a nonstick pan until golden.",
        "Top with maple syrup."
        ],
        calories: 300,
        carbs: 40,
        protein: 10,
        fat: 8
    },
    {
        day: "Friday",
        meal: "Lunch",
        mealName: "Grilled Cheese and Tomato Soup",
        mealImg:"https://grilledcheesesocial.com/wp-content/uploads/2024/01/grilled-cheese-tomato-soup-grilled-cheese-social-18.jpg",
        ingredients: [
        "2 slices whole-grain bread",
        "1 slice cheddar cheese",
        "1 cup tomato soup"
        ],
        cookTime: "20 minutes",
        steps: [
        "Make a grilled cheese sandwich by toasting the bread with cheese in a pan.",
        "Heat the tomato soup and serve alongside the sandwich."
        ],
        calories: 400,
        carbs: 45,
        protein: 15,
        fat: 18
    },
    {
        day: "Friday",
        meal: "Dinner",
        mealName: "Beef Tacos",
        mealImg:"https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
        ingredients: [
        "1/2 pound ground beef",
        "2 small corn tortillas",
        "1/4 cup shredded lettuce",
        "1/4 cup diced tomatoes",
        "1 tbsp taco seasoning"
        ],
        cookTime: "20 minutes",
        steps: [
        "Cook the ground beef with taco seasoning in a skillet.",
        "Warm the tortillas and fill with beef, lettuce, and tomatoes."
        ],
        calories: 450,
        carbs: 35,
        protein: 25,
        fat: 20
    },
    
    // Saturday
    {
        day: "Saturday",
        meal: "Breakfast",
        mealName: "Smoothie with Peanut Butter",
        mealImg:"https://www.simplyrecipes.com/thmb/z2BhuKnd7RCHViYFg1E4J_IGkS0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Peanut-Butter-Banana-Smoothie-LEAD-4_RECIRC-af849a5c756143aa88c80b727a44cbaf.jpg",
        ingredients: [
        "1 cup almond milk",
        "1 banana",
        "1 tbsp peanut butter",
        "1/4 cup spinach"
        ],
        cookTime: "5 minutes",
        steps: [
        "Blend all ingredients until smooth.",
        "Pour into a glass and serve."
        ],
        calories: 250,
        carbs: 30,
        protein: 8,
        fat: 10
    },
    {
        day: "Saturday",
        meal: "Lunch",
        mealName: "Caprese Sandwich",
        mealImg:"https://www.sweetteaandthyme.com/wp-content/uploads/2022/08/Chicken-Caprese-Sandwich-forefront.jpg",
        ingredients: [
        "1 ciabatta roll",
        "2 slices mozzarella",
        "2 slices tomato",
        "1 tbsp pesto",
        "1 handful fresh basil"
        ],
        cookTime: "10 minutes",
        steps: [
        "Slice the roll and spread pesto on one side.",
        "Layer mozzarella, tomato, and basil.",
        "Close the sandwich and enjoy."
        ],
        calories: 400,
        carbs: 35,
        protein: 12,
        fat: 20
    },
    {
        day: "Saturday",
        meal: "Dinner",
        mealName: "Spaghetti with Marinara Sauce",
        mealImg:"https://katesbestrecipes.com/wp-content/uploads/2022/09/marinara-sauce.jpg",
        ingredients: [
        "1/2 cup whole-grain spaghetti",
        "1/2 cup marinara sauce",
        "1/4 cup grated parmesan cheese",
        "1 tbsp olive oil"
        ],
        cookTime: "25 minutes",
        steps: [
        "Cook spaghetti according to package instructions.",
        "Heat marinara sauce in a pan.",
        "Combine spaghetti and sauce, and top with parmesan."
        ],
        calories: 400,
        carbs: 50,
        protein: 12,
        fat: 15
    },
    
    // Sunday
    {
        day: "Sunday",
        meal: "Breakfast",
        mealName: "French Toast",
        mealImg:"https://cdn.loveandlemons.com/wp-content/uploads/2024/08/french-toast-recipe.jpg",
        ingredients: [
        "1 slice whole-grain bread",
        "1 egg",
        "1/4 cup almond milk",
        "1 tbsp maple syrup"
        ],
        cookTime: "15 minutes",
        steps: [
        "Whisk egg and almond milk together.",
        "Dip bread into the mixture and cook in a nonstick pan until golden.",
        "Top with maple syrup."
        ],
        calories: 300,
        carbs: 35,
        protein: 10,
        fat: 10
    },
    {
        day: "Sunday",
        meal: "Lunch",
        mealName: "Avocado and Tuna Salad",
        mealImg:"https://www.eatingwell.com/thmb/D1iahUFGe68dfoITIQQ9Fu_dtCo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avocado-tuna-salad-8c192192175c4e9bb6d55300dd842fbe.jpg",
        ingredients: [
        "1/2 avocado",
        "1 can tuna (in water)",
        "1/4 cup diced celery",
        "1 tbsp mayonnaise"
        ],
        cookTime: "10 minutes",
        steps: [
        "Mix tuna, celery, and mayonnaise.",
        "Scoop into avocado halves and serve."
        ],
        calories: 350,
        carbs: 10,
        protein: 25,
        fat: 20
    },
    {
        day: "Sunday",
        meal: "Dinner",
        mealName: "Roast Chicken with Mashed Potatoes",
        mealImg:"https://media.blueapron.com/culinary/recipe/4233/square_image/65d4ac7d7173c4ef1464b2ed51b5b2f7.jpg?format=pjpg&quality=80&width=1300",
        ingredients: [
        "1 chicken thigh",
        "1 cup mashed potatoes",
        "1/2 cup steamed green beans",
        "1 tbsp olive oil"
        ],
        cookTime: "40 minutes",
        steps: [
        "Roast chicken in the oven at 375°F for 30 minutes.",
        "Prepare mashed potatoes and green beans.",
        "Serve together with a drizzle of olive oil."
        ],
        calories: 500,
        carbs: 40,
        protein: 35,
        fat: 20
    }

  ];

  export default function allDatas () {
    return datas
  }
  