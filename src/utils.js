const axios = require('axios')
const BASE_URL = `http://localhost:3000/api/v1`
// http://localhost:3000/api/v1/categories/friends

const getCategories = async () => {
  const response = await axios(`${BASE_URL}/categories`);

  return response.data;
}

const getQuestions = async (category) => {
  const response = await axios(`${BASE_URL}/categories/${category}`);
  console.log(response.data);
  return response.data;
}
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

export { getCategories, getQuestions }
