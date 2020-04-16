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

  whichImage = (category) => {
    if(category === 'friends'){
      return(<img src='https://image.flaticon.com/icons/svg/2058/2058666.svg'/>)
    }else if(category === 'coworkers'){
      return(<img src='https://image.flaticon.com/icons/svg/1965/1965765.svg'/>)
    } else{
      return(<img src='https://image.flaticon.com/icons/svg/1029/1029183.svg'/>)
    }

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
    const data = await getQuestions(chosenCategory)
    localStorage.setItem('chosenQuestions', JSON.stringify(data.questions))
    localStorage.setItem('chosenCategory', JSON.stringify(data.name))

    // let isGuest = JSON.parse(localStorage.isGuest)
    // if(!isGuest) {
    //   let choice = JSON.parse(localStorage.chosenCategory)
    //
    //   this.setState({
    //     chosenQuestions: choice
    //   })
    //   localStorage.chosenQuestions = localStorage.getItem(choice)
    //   localStorage.chosenCategory = chosenCategory;
    //
    // } else {
    //   const data = await getQuestions(chosenCategory)
    //   localStorage.setItem('chosenQuestions', JSON.stringify(data.questions))
    //   localStorage.setItem('chosenCategory', JSON.stringify(data.name))
    // }
    this.props.history.push('/game')
  }


  render() {
    const categoryButtons = this.state.categories.map( category => {
      return <button className='border-gradient' id='category-button' onClick={(evt) => this.whatCards(evt, category.name)} key={category.name}>
                {this.whichImage(category.name)}
                <p>Talk with {category.name}</p>
              </button>
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
