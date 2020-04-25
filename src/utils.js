const axios = require('axios')
const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://backend-change-the-subject.herokuapp.com/api/v1';
// const BASE_URL = 'http://localhost:3000/api/v1'

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
  const response = await axios.post(`${BASE_URL}/users`, data, {
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(data)
  })

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
