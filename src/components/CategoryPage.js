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

    localStorage.setItem('chosenCategory', JSON.stringify(category))
    this.setQuestions(category)
  }

  setCategories = async () => {
    if(!localStorage.categories){
      const data = await getCategories()
      let categories =  data[0] ? data : ['friends', 'coworkers', 'partner']
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
      let choice = JSON.parse(localStorage.chosenCategory)

      this.setState({
        chosenQuestions: choice
      })
      localStorage.chosenQuestions = localStorage.getItem(choice)
      localStorage.chosenCategory = chosenCategory;

    } else {
      const data = await getQuestions(chosenCategory)
      localStorage.setItem('chosenQuestions', JSON.stringify(data.questions))
      localStorage.setItem('chosenCategory', JSON.stringify(data.name))
    }
    this.props.history.push('/game')
  }


  render() {
    const categoryButtons = this.state.categories.map( (category, idx) => {
      return <button id='category-button' onClick={(evt) => this.whatCards(evt, category.name)} key={idx}> Talk with {category.name} </button>
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
