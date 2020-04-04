import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import CategoryPage from './components/CategoryPage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
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
    if(username && password && email) {
      localStorage.clear()
      { action === 'login' ? data = await getLoginData(3) : data = await createNewUser({username, password, email}) }
      console.log('youre ', action);
      localStorage.setItem('isGuest', JSON.stringify(false))
      localStorage.setItem('friends', JSON.stringify(data.remainingFriendsQs) )
      localStorage.setItem('coworkers', JSON.stringify(data.remainingCoworkersQs) )
      localStorage.setItem('partners', JSON.stringify(data.remainingPartnersQs) )
      this.props.history.push('/choose-your-adventure')
    } else {
      this.setState({
        error: 'please fill out the inputs'
      })
    }
    this.clearFormInputs()
  }

  clearFormInputs = () => {
    this.setState({
      userInfo: {
        username: '',
        password: '',
        email: '',
      }
    })
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
            <LoginForm handleSubmit={(evt, action) => this.handleSubmit(evt, action)} handleChange={(evt) => this.handleChange(evt)} userInfo={this.state.userInfo} />
          </Route>

          <Route path='/signup'>
            <SignupForm handleSubmit={(evt, action) => this.handleSubmit(evt, action)} handleChange={(evt) => this.handleChange(evt)} userInfo={this.state.userInfo} />
          </Route>

          <Route exact path='*'>
            <Homepage isGuest={this.isGuest} />
          </Route>
        </Switch>

      </main>
    );
  }
}

export default withRouter(App);
