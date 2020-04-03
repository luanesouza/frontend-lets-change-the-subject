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
    },
    userQuestions: {
      friendsQs: [],
      coworkersQs: [],
      partnerQs: [],
    },
    isLoggedIn: false,
    error: ''
  }

  handleChange(event){
    const { name, value } = event.target
    console.log(name, value);
    this.setState(() => ({
      userInfo: {
        ...this.state.userInfo,
        [name]: value
      }
    }));
  }

  async handleSubmit(evt){
    evt.preventDefault()
    this.getLoginInfo()
  }

  getLoginInfo = async () => {
    const {username, password, email} = this.state.userInfo

    if(username && password && email) {
      localStorage.clear()
      const data = await getLoginData(3)
      localStorage.setItem('guest?', JSON.stringify(false))
      localStorage.setItem('friends', JSON.stringify(data.remainingFriendsQs) )
      localStorage.setItem('coworkers', JSON.stringify(data.remainingCoworkersQs) )
      localStorage.setItem('partners', JSON.stringify(data.remainingPartnersQs) )
    } else {
      this.setState({
        error: 'please fill out the inputs'
      })
    }
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

    if(status === 'guest') {
      localStorage.clear()
      this.getGuestQuestions()

    } else if(status === 'login'){
      this.props.history.push('/login');
    }
  }

  render() {
    return (

      <main className="App">
        <Route exact path='/choose-your-adventure'>
          <CategoryPage  isLoggedIn={this.state.isLoggedIn} />
        </Route>

        <Route exact path='/'>
          <Homepage isGuest={this.isGuest} />
        </Route>

        <Route path='/login'>
          <LoginForm handleSubmit={(evt) => this.handleSubmit(evt)} handleChange={(evt) => this.handleChange(evt)} userInfo={this.state.userInfo} />
        </Route>

      </main>
    );
  }
}

export default withRouter(App);
