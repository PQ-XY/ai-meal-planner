import axios from 'axios';

// Use React's built-in process.env to access variables
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;


console.log('API Base URL:', API_BASE_URL);
console.log('API Token:', API_TOKEN);

// Create an Axios instance with the environment variables
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

// Function to call the API (e.g., generate food image)
export const generateFoodImage = async (prompt, style = 'realistic_image') => {
  try {
    console.log('Requesting image generation for prompt:', prompt);
    const response = await apiClient.post('/images/generations', {
      prompt,
      style,
    });
    console.log('API Response:', response.data); // Log full API response
    return response.data.data[0]?.url; // Extract and return the image URL
  } catch (error) {
    console.error('Error generating food image:', error.response?.data || error.message);
    throw new Error('Failed to generate food image.');
  }
};


export default apiClient;


