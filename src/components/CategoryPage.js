import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { getCategories, getQuestions } from '../utils';
import friends from '../images/friends.svg';
import coworkers from '../images/coworkers.svg';
import partner from '../images/partner.svg';

class CategoryPage extends Component {

  state = {
    chosenQuestions: [],
    categories: [],
    loaded: false
  }

  componentDidMount = () => {
    this.setCategories()
  }

  whichImage = (category) => {
    if(category === 'friends'){
      return(<img src={friends} alt='friends'/>)
    }else if(category === 'coworkers'){
      return(<img src={coworkers} alt='coworkers'/>)
    } else{
      return(<img src={partner} alt='partner'/>)
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
      console.log(data);
      let categories =  data[0] ? data : ['friends', 'coworkers', 'partner']
      localStorage.setItem('categories', JSON.stringify(categories))

      this.setState({
        categories: categories,
        loaded: true
      })

    } else {
      console.log(localStorage);
      this.setState({
        categories: JSON.parse(localStorage.categories),
        loaded: true
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
        {
          this.state.loaded
          ?
          <>
            <h3> Select a category </h3>
            { categoryButtons }
          </>
          :
          <p>loading...</p>
        }

      </section>
    )
  }
}

export default withRouter(CategoryPage)
