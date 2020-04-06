import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
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

      this.setState({
        chosenQuestions: JSON.parse(choice)
      })

    } else {
      const data = await getQuestions(chosenCategory)

      localStorage.setItem('chosenQuestions', JSON.stringify(data.questions))
      localStorage.setItem('chosenCategory', JSON.stringify(data.name))
    }
    this.props.history.push('/game')
  }


  render() {
    const categoryButtons = this.state.categories.map( category => {
      return <button id='category-button' onClick={(evt) => this.whatCards(evt, category.name)} key={category.id}> Talk with {category.name} </button>
    })

    return(

      <section className='CategoryPage'>

        <>
          <h3> Select a category </h3>
          { categoryButtons }
        </>

      </section>
    )
  }
}

export default withRouter(CategoryPage)
