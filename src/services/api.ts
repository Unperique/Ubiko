import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000'; 

type Credentials = {
  email: string;
  password: string;
};

export const fetchBusinesses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/businesses`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error fetching businesses: ' + error.message);
    }
    throw new Error('Error fetching businesses: Unknown error');
  }
};

export const fetchBusinessById = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/businesses/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error fetching business: ' + error.message);
    }
    throw new Error('Error fetching business: Unknown error');
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error fetching categories: ' + error.message);
    }
    throw new Error('Error fetching categories: Unknown error');
  }
};

export const authenticateUser = async (credentials: Credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error authenticating user: ' + error.message);
    }
    throw new Error('Error authenticating user: Unknown error');
  }
};