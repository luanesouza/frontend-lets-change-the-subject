import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import CategoryPage from './components/CategoryPage';
import LoginForm from './components/LoginForm';
import { getCategories, getQuestions, getLoginData  } from './utils';
import './App.css';
import Homepage from './components/Homepage';

class App extends Component {

  state = {
    userInfo: {
      username: '',
      password: '',
      email: '',
      questions: {
        friendsQs: [],
        coworkersQs: [],
        partnerQs: [],
      },
    },
    isLoggedIn: false,
  }

  handleChange(event){
    const { name, value } = event.target

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(evt){
    evt.preventDefault()
  }

  getLoginInfo = async () => {
    this.props.history.push('/login');
    // const data = await getLoginData(3)
    // console.log(data);
  }

  getGuestQuestions = () => {
    this.props.history.push('/choose-your-adventure');

    this.setState({
      isLoggedIn: false
    })
  }



  isGuest = (evt, status) => {

    // create conditionals that will redirect user depending on status
    evt.preventDefault()
    console.log('clicked');
    if(status === 'guest') {
      this.getGuestQuestions()
      console.log('is a guest');
    } else if(status === 'login'){

      this.getLoginInfo()
    }

    // this.setState({
    //   guest: false
    // })

    // console.log(this.state.guest);
  }

  render() {
    return (

      <main className="App">
        <Route exact path='/choose-your-adventure'>
          <CategoryPage isLoggedIn={this.state.isLoggedIn} />
        </Route>

        <Route exact path='/'>
          <Homepage isGuest={this.isGuest} />
        </Route>

        <Route path='/login'>
          <LoginForm userInfo={this.state.userInfo} />
        </Route>

      </main>
    );
  }
}

export default withRouter(App);
