import React, { useState } from 'react';
import Card from './Card';
import { withRouter, Route } from 'react-router-dom';

function CardContainer(props){

  let cachedCards = JSON.parse(localStorage.getItem('chosenQuestions'))

  const [currentQuestion, setCurrentQuestion] = useState(cachedCards.questions[0])
  const [counter, setCounter] = useState(1)

  const showOneCard = (evt, action) => {
    evt.preventDefault()
    const { questions } = cachedCards;

    if(counter === questions.length){
      setCounter(0)
      return setCurrentQuestion(questions[1])
    } else {
      setCounter(counter + 1)
      return setCurrentQuestion(questions[counter])
    }
  }

  const navButtons = (evt, action) => {
    evt.preventDefault()

    switch(action) {
      case 'categories': props.history.goBack()
      break;
      case 'profile': console.log('not ready');
      break;
    }
  }

  return(
    <section>
      <section className='nav-buttons'>
        <button onClick= {(evt, action) => navButtons(evt, 'categories')}>
          <img id='options' src='https://www.pngrepo.com/download/100528/four-squares-button-of-view-options.png' alt='options'/>
        </button>

        <button onClick= {(evt, action) => navButtons(evt, 'profile')}>
          <img id='options' src='https://pngimage.net/wp-content/uploads/2018/06/gray-square-png-5.png' alt='options'/>
        </button>

        <button onClick= {(evt, action) => navButtons(evt, 'goBack')}>
          <img id='options' src='https://image.flaticon.com/icons/png/512/16/16116.png' alt='options'/>
        </button>
      </section>

      <div className='card-container'>
        <Card card={currentQuestion} />
      </div>
      <div className='card-buttons'>
        <button id='choice-button' onClick={(evt) => showOneCard(evt, 'skip')}>
          <img id='left' src='https://image.flaticon.com/icons/png/512/130/130884.png' alt='right'/>
        </button>
        <button id='choice-button' onClick={(evt) => showOneCard(evt, 'answered')}>
          <img src='https://image.flaticon.com/icons/png/512/130/130884.png' alt='right'/>
        </button>
      </div>
    </section>
  )
}

export default withRouter(CardContainer);
