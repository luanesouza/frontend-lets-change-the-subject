const axios = require('axios')
const BASE_URL = `http://localhost:3000/api/v1`

const getCategories = async () => {
  const response = await axios(`${BASE_URL}/categories`);
  return response.data;
}

const getQuestions = async (category) => {
  const response = await axios(`${BASE_URL}/categories/${category}`);
  return response.data;
}

const getLoginData = async (user_id) => {
  const response = await axios(`${BASE_URL}/users/${user_id}`);
  return response.data;
}

const createNewUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/users`, data);
  return response.data
}

export { getCategories, getQuestions, getLoginData, createNewUser }
