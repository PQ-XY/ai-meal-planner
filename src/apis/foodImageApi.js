import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const RECRAFT_API_TOKEN = process.env.RECRAFT_API_TOKEN;
const API_BASE_URL = process.env.API_BASE_URL;

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

// Function to generate a food image
export const generateFoodImage = async (prompt, style = 'realistic_image') => {
  try {
    const response = await apiClient.post('/images/generations', {
      prompt, // Image description
      style,  // Default style: 'realistic_image'
    });
    return response.data.data[0].url; // Return the image URL
  } catch (error) {
    console.error('Error generating food image:', error.response?.data || error.message);
    throw new Error('Failed to generate food image. Please try again.');
  }
};

export default apiClient;
