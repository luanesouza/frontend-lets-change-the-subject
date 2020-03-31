import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import CategoryPage from './components/CategoryPage';
import { getCategories, getQuestions } from './utils';
import './App.css';
import Homepage from './components/Homepage';

class App extends Component {

  state = {
    username: '',
    password: '',
    email: '',
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
        <Route exact path='/choose-your-adventure'>
          <CategoryPage />
        </Route>

        <Route exact path='/'>
          <Homepage props={this.props} />
        </Route>

        <Route path='/login'>

        </Route>

      </main>
    );
  }
}

export default withRouter(App);
