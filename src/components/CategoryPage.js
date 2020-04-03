import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import CardContainer from './CardContainer';
import { getCategories, getQuestions } from '../utils';

class CategoryPage extends Component {

  state = {
    guestQuestions: [],
    userQuestions: {
      friends: [],
      coworkers: [],
      partner: []
    },
    categories: [],
    gameOn: false
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
      console.log(localStorage.categories);
      this.setState({
        categories
      })

    } else {
      this.setState({
        categories: JSON.parse(localStorage.categories)
      })
      
    }


    // let localCategories = JSON.parse(localStorage.getItem(categories))
    // console.log(localCategories);
  }

  setQuestions = async (chosenCategory) => {

    if(this.props.isLoggedIn) {
      this.setState({
        userQuestions: []
      })
    }
    const data = await getQuestions(chosenCategory)
    console.log(data);
    this.setState({
      guestQuestions: data.questions
    })

    // this.props.history.push('/make-it-fun')
    console.log(this.state);
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
            this.state.guestQuestions.length > 0

            ?

              <CardContainer cards={this.state.guestQuestions}/>
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
