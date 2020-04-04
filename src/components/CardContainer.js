import React, { useState, useEffect } from 'react';
import Card from './Card';
import { withRouter, Route } from 'react-router-dom';

function CardContainer(props){

  let cachedCards = JSON.parse(localStorage.chosenQuestions)

  let skippedQs = [];
  let answeredQs = [];
  const [currentQuestion, setCurrentQuestion] = useState(cachedCards[0])

  const showOneCard = (evt, questionsLeft) => {
    console.log(questionsLeft);
    console.log(questionsLeft[0]);

    if(!questionsLeft.length[0]) {
      return setCurrentQuestion(questionsLeft[questionsLeft.length])
    } else {
      console.log('all done');
      props.history.push('/play-again')
    }

  }

  const getAction = (evt, action) => {
    evt.preventDefault()

    if( action === 'answered') {
      let qsleft = cachedCards.filter(current => currentQuestion.id !== current.id)
      answeredQs.push(currentQuestion)
      localStorage.setItem('chosenQuestions', JSON.stringify(qsleft))
      showOneCard(evt, qsleft)
      return qsleft
    } else {
      skippedQs.push(currentQuestion)
    }
  }

  const navButtons = (evt, action) => {
    evt.preventDefault()

    switch(action) {
      case 'categories': props.history.push('/choose-your-adventure')
      break;
      case 'profile': console.log('not ready');
      break;
      case 'completion': console.log('working on it');
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

        <button onClick= {(evt, action) => navButtons(evt, 'completion')}>
          <img id='options' src='https://image.flaticon.com/icons/png/512/16/16116.png' alt='options'/>
        </button>
      </section>

      <div className='card-container'>
        <Card card={currentQuestion} />
      </div>
      <div className='card-buttons'>
        <button id='choice-button' onClick={(evt) => getAction(evt, 'skip')}>
          <img id='left' src='https://image.flaticon.com/icons/png/512/130/130884.png' alt='right'/>
        </button>
        <button id='choice-button' onClick={(evt) => getAction(evt, 'answered')}>
          <img src='https://image.flaticon.com/icons/png/512/130/130884.png' alt='right'/>
        </button>
      </div>
    </section>
  )
}

export default withRouter(CardContainer);
