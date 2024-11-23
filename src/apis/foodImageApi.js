const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const RECRAFT_API_TOKEN = process.env.RECRAFT_API_TOKEN;
const API_BASE_URL = process.env.API_BASE_URL;

// Check if the environment variables are loaded
if (!RECRAFT_API_TOKEN || !API_BASE_URL) {
  console.error('Error: Missing RECRAFT_API_TOKEN or API_BASE_URL in .env file.');
  process.exit(1); // Exit the script if variables are not loaded
}

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

// Function to generate a food image
const generateFoodImage = async (prompt, style = 'realistic_image') => {
  try {
    const response = await apiClient.post('/images/generations', {
      prompt, // Image description
      style,  // Default style: 'realistic_image'
    });
    const imageUrl = response.data.data[0].url;
    console.log('Generated Image URL:', imageUrl);
    return imageUrl; // Return the image URL
  } catch (error) {
    console.error('Error generating food image:', error.response?.data || error.message);
    throw new Error('Failed to generate food image. Please try again.');
  }
};

module.exports = {
  generateFoodImage,
  apiClient,
};

// // Test the function
// generateFoodImage('Eggplant casserole')
//   .then((url) => {
//     console.log('Successfully generated image URL:', url);
//   })
//   .catch((err) => {
//     console.error('Error during image generation:', err.message);
//   });
