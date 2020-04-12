import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import CategoryPage from './components/CategoryPage';
import CardContainer from './components/CardContainer';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import GameOver from './components/GameOver';
import Profile from './components/Profile';
import { getLoginData, createNewUser } from './utils';
import './App.css';
import Homepage from './components/Homepage';

class App extends Component {

  state = {
    userInfo: {
      username: '',
      password: '',
      email: '',
    },
    error: ''
  }

  componentDidMount(){
    // localStorage.clear()
    // this.props.history.push('/')
  }

  handleChange(event){
    const { name, value } = event.target
    this.setState(() => ({
      userInfo: {
        ...this.state.userInfo,
        [name]: value
      }
    }));
  }

  async handleSubmit(evt, action){
    evt.preventDefault()
    this.getLoginOrSignupInfo(action)
  }

  getLoginOrSignupInfo = async (action) => {
    const {username, password, email} = this.state.userInfo
    let data;
    if(username && password && action === 'login') {
      localStorage.clear()

      data = await getLoginData(username, password)
      {data.failure ? this.hasError(data.failure) : this.setLocalStorage(data)}
      this.clearFormInputs()
      return data;
    } else if(username && password && email && action === 'signup') {

      data = await createNewUser({username, password, email})
      this.setLocalStorage(data)
      this.clearFormInputs()
      return data;
    } else {

      this.setState({
        error: 'please fill out the inputs'
      })
    }
    this.clearFormInputs()
  }

  hasError = (error) => {
    console.log(error);
    this.setState({
      error
    })
    this.clearFormInputs()
  }

  clearFormInputs = () => {
    this.setState({
      userInfo: {
        username: '',
        password: '',
        email: '',
      },
      error: ''
    })
  }

  setLocalStorage = (data) => {
    localStorage.setItem('isGuest', JSON.stringify(false))
    localStorage.setItem('friends', JSON.stringify(data.remainingFriendsQs) )
    localStorage.setItem('coworkers', JSON.stringify(data.remainingCoworkersQs) )
    localStorage.setItem('partner', JSON.stringify(data.remainingPartnersQs) )
    localStorage.setItem('current_user', JSON.stringify(data.username))
    this.props.history.push('/choose-your-adventure')
  }



  isGuest = (evt, status) => {
    // create conditionals that will redirect user depending on status
    evt.preventDefault()

    if(status === 'guest') {
      localStorage.clear()
      this.props.history.push('/choose-your-adventure');

      localStorage.setItem('isGuest', JSON.stringify(true))
    } else if(status === 'login'){
      this.props.history.push('/login');

    } else {
      this.props.history.push('/signup');
    }
  }

  render() {
    return (

      <main className="App">
        <Switch>
          <Route exact path='/choose-your-adventure'>
            <CategoryPage  />
          </Route>

          <Route path='/login'>
            <LoginForm error={this.state.error} handleSubmit={(evt, action) => this.handleSubmit(evt, action)} handleChange={(evt) => this.handleChange(evt)} userInfo={this.state.userInfo} />
          </Route>

          <Route path='/signup'>
            <SignupForm error={this.state.error} handleSubmit={(evt, action) => this.handleSubmit(evt, action)} handleChange={(evt) => this.handleChange(evt)} userInfo={this.state.userInfo} />
          </Route>

          <Route exact path='/game'>
            <CardContainer />
          </Route>

          <Route exact path='/play-again'>
            <GameOver />
          </Route>

          <Route exact path='/profile'>
            <Profile />
          </Route>

          <Route exact path='/'>
            <Homepage isGuest={this.isGuest} />
          </Route>
        </Switch>

      </main>
    );
  }
}

export default withRouter(App);
