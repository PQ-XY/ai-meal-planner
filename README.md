### **Testing Instructions for FreshFork Application**

### **Getting Started**

1. In the project directory, you can run:
    
    **`npm run build`**
    
    Builds the app for production to the `build` folder.
    
    It correctly bundles React in production mode and optimizes the build for the best performance.
    
    The build is minified and the filenames include the hashes.
    
2. **Fill Out the Questionnaire**:
    - Start by filling out the "Investments" questionnaire
    - **Note**: For the best results, complete all fields instead of clicking "Skip Now."
3. **Submit the Questionnaire**: Once the form is complete, click **Finished** to proceed.

---

### **Using the Meal Planner**

1. **Wait for Meal Plan Generation**:
    - The app will process your inputs and interact with Google Gemini’s Prompt API to generate a personalized meal plan.
    - **Important**: This may take a few minutes. Please wait patiently for the API to return the results.
2. **Review the Generated Meal Plan**:
    - Check the details provided in each meal card, including meal names, required ingredients, cooking instructions, and nutritional information (calories, protein, carbs, and fats).
    - **Note**: Occasionally, some meal cards may have missing or inconsistent details due to limitations in the Gemini API’s response.
3. **Regenerate a Meal**:
    - If any meal is not to your liking, select the "Regenerate" option on the respective meal card.

---

### **Using the Recommendation**

1. **Recommendation Section**:
    - The recommendation section on the Home page will generate (3) trending meals.
2. **Add any recommended meal to your daily meals**:
    - When you like any meal, you can replace it with any of your daily meals.
3. **Re-generate**:
    - If you don't like any of the recommendations, you can hit the re-generate button to give you more options. This will take about 20 seconds. 

---

### **Using the AI Planner**

1. **Access the AI Planner**:
    - Navigate to the AI Planner feature in the app.
    - Provide a list of available ingredients from your kitchen.
2. **Generate Recipes**:
    - The AI Planner will generate recipes using the provided ingredients.
    - Review the recipes for preparation instructions, ingredients, and nutritional details.
3. **Test Regenerate Options**:
    - If a generated recipe doesn’t suit your preferences, test the regenerate feature to receive alternative suggestions.

---

### **Image Generation Notice**

Recraft API Usage Limitations: The API used for image generation has a limited number of free units available per month. If the API is unavailable or the usage limit has been exceeded, the application will automatically display a default placeholder image in place of the generated food images.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
