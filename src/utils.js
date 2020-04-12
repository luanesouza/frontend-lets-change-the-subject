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
    password: password,
  }
  debugger
  const response = await axios.post(`${BASE_URL}/login`, data);
  debugger
  if(response.failure){
    return response.failure;
  } else {
    return response.data;
    }
  }



const createNewUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/users`, data, {
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(data)
  })
   (response.data);

  setToken(response.data.token)
  // login(response.data.user_object.token, response.data.user_object.user.id)
  return response.data.user
}

const login = async (token, id) => {
  const response = await axios.post(`${BASE_URL}/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })

}
// login(localStorage.token, )

const setToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token))
}










export { getCategories, getQuestions, getLoginData, createNewUser }
