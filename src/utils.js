const axios = require('axios')
const BASE_URL = `http://localhost:3000/api/v1`
// http://localhost:3000/api/v1/categories/friends

const getCategories = async () => {
  const response = await axios(`${BASE_URL}/categories`);
    console.log(response);
  return response.data;
}

const getQuestions = async (category) => {
  const response = await axios(`${BASE_URL}/categories/${category}`);
  console.log(response);
  return response.data;
}

const getLoginData = async (user_id) => {
  const response = await axios(`${BASE_URL}/users/${user_id}`);
  console.log(response);
  return response.data;
}

const createNewUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/users`, data);
  console.log(response);
  return response.data
}

let user = {
  username: 'louise',
  email: 'louise@email.com'
}

// createNewUser(user)

// const getUserQuestion = async (user_id) => {
//   const response = await axios()
// }

// getLoginData(3)
// getCategories()

// getQuestions('friends')
//
// const getCategories = async () => {
//   const response = await axios(`${BASE_URL}/categories`);
//   console.log(response.data);
// }
//
// const getCategories = async () => {
//   const response = await axios(`${BASE_URL}/categories`);
//   console.log(response.data);
// }
//
// const getCategories = async () => {
//   const response = await axios(`${BASE_URL}/categories`);
//   console.log(response.data);
// }

export { getCategories, getQuestions, getLoginData, createNewUser }
