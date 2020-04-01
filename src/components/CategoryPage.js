import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import CardContainer from './CardContainer';
import { getCategories, getQuestions } from '../utils';

class CategoryPage extends Component {

  state = {
    chosenQuestions: [],
    categories: [],
    gameOn: false
  }

  componentDidMount = () => {
    this.setCategories()
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

  skipQuestion = (action) => {
    console.log(action);
  }


  render() {
    const categoryButtons = this.state.categories.map( category => {
        return <button id='category-button' onClick={(evt) => this.whichCards(evt, category.name)} key={category.id}> Talk with {category.name} </button>
      })

    return(

      <section className='CategoryPage'>
          {
            this.state.chosenQuestions.length > 0

            ?
            
              <CardContainer cards={this.state.chosenQuestions}/>
            :

            <>
              { categoryButtons }
            </>
          }

      </section>
    )
  }
}

export default withRouter(CategoryPage)
