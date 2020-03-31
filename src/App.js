import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import CategoryPage from './components/CategoryPage';
// import { getCategories, getQuestions } from './utils';
import './App.css';
import Homepage from './components/Homepage';

class App extends Component {

  state = {
    username: '',
    password: '',
    email: '',
    userObject: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(evt){
    evt.preventDefault()
  }

  nextQuestion(action, questionObject, category){
    console.group("HERE ARE THE OBJECTS PASSED and messages from the function", action, questionObject, category)
    if (action === "skip"){
      console.log("here's going to be a post to seen_questions with skip as true");
    } else {
      console.log("here's gonna be a post without mentioning skip as on the backend it defaults to false")
    }

    console.log("here's gonna be a setState that deletes the questionObject from the state");
    console.groupEnd()
  }

    // these two next functions only exists so I can work with a user object; once login/signup is set up, you'll save the user to state and pass it down to categoryPage component. If the person clicks "skip", we'll fetch from the /questions and I'll create on the backend a scope that sends out only limited number of randomized questions within a category instead of a massive fetch 

  componentDidMount(){
    this.getUser()
  }

  getUser = () => {
    fetch("http://localhost:3000/api/v1/users/1")
    .then(res => res.json())
    .then(user => this.setState({
      userObject: user
    }))
  }

  render() {
    return (

      <main className="App">
        <Route exact path='/choose-your-adventure'>
          {/* the props below we'll make more beautiful once we have login/signup/skip set up */}
          <CategoryPage 
            nextQuestion={this.nextQuestion}
            friendsQs={this.state.userObject ? this.state.userObject.user.remainingFriendsQs : ""} 
            coworkersQs={this.state.userObject.user ? this.state.userObject.user.remainingCoworkersQs : ""} partnersQs={this.state.userObject.user ? this.state.userObject.user.remainingPartnersQs : ""}
          />
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
