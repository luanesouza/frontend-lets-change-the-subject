import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import CardContainer from './CardContainer';
import { getCategories, getQuestions } from '../utils';

class CategoryPage extends Component {

  state = {
    chosenQuestions: [],
    categories: [],
  }

  componentDidMount = () => {
    this.setCategories()
  }

  whatCards = (evt, category) => {
    evt.preventDefault()

    this.setQuestions(category)
  }

  setCategories = async () => {
    if(!localStorage.categories){
      const categories = await getCategories()
      localStorage.setItem('categories', JSON.stringify(categories))

      this.setState({
        categories
      })

    } else {
      this.setState({
        categories: JSON.parse(localStorage.categories)
      })

    }
  }

  setQuestions = async (chosenCategory) => {
    let isGuest = JSON.parse(localStorage.isGuest)
    if(!isGuest) {
      let choice = localStorage.getItem(chosenCategory)
      console.log(chosenCategory);
      this.setState({
        chosenQuestions: JSON.parse(choice)
      })

    } else {
      const data = await getQuestions(chosenCategory)
      console.log(data);
      console.log(data);
      this.setState({
        chosenQuestions: data.questions
      })

    }
  }

  skipQuestion = (action) => {
    console.log(action);
  }


  render() {
    const categoryButtons = this.state.categories.map( category => {
        return <button id='category-button' onClick={(evt) => this.whatCards(evt, category.name)} key={category.id}> Talk with {category.name} </button>
      })


      // console.log(this.state);
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
