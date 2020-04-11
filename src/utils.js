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

const getLoginData = async (username, password) => {
  const data = {
    username: username, 
    password_digest: password,
    
  }
  const response = await axios.post(`${BASE_URL}/login`, data);
  if(response.failure){
    console.log('try again');
    return response.failure;
  } else {

    console.log(response);
    return response.data;
    }
  }

const createNewUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/users`, data);
  console.log(response);
  debugger;
  return response.data
}

export { getCategories, getQuestions, getLoginData, createNewUser }
