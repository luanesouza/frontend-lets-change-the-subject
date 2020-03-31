import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import CardContainer from './CardContainer';
// import { getCategories, getQuestions } from '../utils';

class CategoryPage extends Component {

  state = {
    questionSet: ["hello"],
    categories: ["friends", "coworkers", "partners"],
    selectedCategory: ""
  }

  whichCategory = (evt, category) => {
    evt.preventDefault()
    this.setState({
      selectedCategory: category
    })
///////////////////////// this function will redirect the user to the next component and pass the questionSet
  }

  determineQuestionSet = () => {
    let questionSet;
    
    if (this.state.selectedCategory === "friends"){
      questionSet = this.props.friendsQs
    } else if (this.state.selectedCategory === "coworkers"){
      questionSet = this.props.coworkersQs
    } else {
      questionSet = this.props.partnersQs
    }

    return questionSet
  }

  render() {
  ////// I think that since we only have three cats, we don't need the fetch, we can just hardcode them //

    let items = this.state.categories.map( category => {
      return <button 
                onClick={(evt) => this.whichCategory(evt, category)} 
                key={category}
              > Talk with {category} 
              </button>
    })

    return(
      <section>
        { items }
          <CardContainer 
            cards={this.determineQuestionSet()}
            nextQuestion={this.props.nextQuestion}
            chosenCategory={this.state.chosenCategory}/>
      </section>
    )
  }
}

export default withRouter(CategoryPage)