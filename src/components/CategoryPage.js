import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import CardContainer from './CardContainer';
import { getCategories, getQuestions } from '../utils';

class CategoryPage extends Component {

  state = {
    chosenQuestions: [],
    categories: []
  }


  whichCards = (evt, category) => {
    evt.preventDefault()

    this.setQuestions(category)
  }

  setCategories = async () => {
    const categories = await getCategories()
    this.setState({
      categories
    })
  }

  setQuestions = async (chosenCategory) => {
    const data = await getQuestions(chosenCategory)

    this.setState({
      chosenQuestions: data.question.questions
    })

    // this.props.history.push('/make-it-fun')
    console.log(this.state);
  }

  componentDidMount = () => {
    this.setCategories()
  }

  render() {
    const items = this.state.categories.map( category => {
        return <button onClick={(evt) => this.whichCards(evt, category.name)} key={category.id}> Talk with {category.name} </button>
      })

    return(

      <section>
        { items }

          {
            this.state.chosenQuestions.length > 0

            ?
              <CardContainer cards={this.state.chosenQuestions}/>
            :

              <p> loading </p>

          }

      </section>
    )
  }
}

export default withRouter(CategoryPage)
