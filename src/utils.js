const axios = require('axios')
const BASE_URL = `http://localhost:3000/api/v1`

const getCategories = async () => {
  const response = await axios(`${BASE_URL}/categories`);
  console.log(response);
  return response.data;
}

const getQuestions = async (category) => {
  const response = await axios(`${BASE_URL}/categories/${category}`);
  return response.data;
}

const getLoginData = async (username, password) => {
  const response = await axios(`${BASE_URL}/users/2`);
  if(response.failure){
    console.log('try again');
    return response.failure;
  } else {
    console.log(response);
    return response.data;
    }
  }



const createNewUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/signup`, data, {
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(data)
  })
  console.log(response.data);
  // setToken(response.data.user_object.token)
  // login(response.data.user_object.token, response.data.user_object.user.id)
  return response.data
}

const login = async (token, id) => {
  console.log(id);
  const response = await axios.post(`${BASE_URL}/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })

    console.log(response);
}
// login(localStorage.token, )

const setToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token))
}










export { getCategories, getQuestions, getLoginData, createNewUser }
