import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import CategoryPage from './components/CategoryPage';
import './App.css';

import Homepage from './components/Homepage';

class App extends Component {

  state = {
    username: '',
    password: '',
    email: '',
    cards: [],
    friendsCards: [],
    coworkersCards: [],
    partnerCards: []
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

  render() {
    return (
      <main className="App">
        <Route exact path='/'>
          <Homepage props={this.props}/>
        </Route>

        <Route path='/login'>

        </Route>

        <Route path='/choose-your-adventure'>
          <CategoryPage />
        </Route>
      </main>
    );
  }
}

export default withRouter(App);
