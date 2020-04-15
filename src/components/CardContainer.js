import React, { useState } from 'react';
import Card from './Card';
import AreYouSure from './AreYouSure';
import { withRouter } from 'react-router-dom';
import { useSwipeable, Swipeable } from 'react-swipeable';
import Draggable from 'react-draggable';


function CardContainer(props){

  let cachedCards = JSON.parse(localStorage.chosenQuestions)

  const [currentQuestion, setCurrentQuestion] = useState(cachedCards[0])
  const [leaving, isUserLeaving] = useState(false)

  const showOneCard = (evt, questionsLeft) => {
    if(!!questionsLeft[0]) {
      setCurrentQuestion(questionsLeft[0])
    } else {
      props.history.push('/play-again')
    }
  }

  const getAction = (evt, action) => {
    let questionsLeft = cachedCards.filter(current => {
      return currentQuestion.id !== current.id
    })
    localStorage.setItem('chosenQuestions', JSON.stringify(questionsLeft))
    showOneCard(evt, questionsLeft)

    if( action === 'answered') {
      const questionsAnswered = JSON.parse(localStorage.getItem('answeredQuestions')) || [];
      const question = [ currentQuestion, ...questionsAnswered ];
      localStorage.setItem('answeredQuestions', JSON.stringify(question));

    } else {
        const questionsSkipped = JSON.parse(localStorage.getItem('skippedQuestions')) || [];
        const question = [currentQuestion, ...questionsSkipped];
        localStorage.setItem('skippedQuestions', JSON.stringify(question));
    }
  }

  const navButtons = (evt, action) => {
    evt.preventDefault()

    switch(action) {
      case 'categories': props.history.push('/choose-your-adventure')
      break;
      case 'completion': isUserLeaving(true);
      break;
      default: isUserLeaving(false);
    }
  }

  return(
    <section >
      <button onClick= {(evt, action) => navButtons(evt, 'completion')}>
        <img id='options' src='https://cdn4.iconfinder.com/data/icons/geomicons/32/672366-x-512.png' alt='options'/>
      </button>

      <div className='card-container'>
        <Swipeable onSwiped={(eventData, action) => getAction(eventData, 'answered')} >
          <Card card={currentQuestion} />
        </Swipeable>
      </div>
      {
        leaving
        ?
        <AreYouSure isUserLeaving={isUserLeaving} leaving={leaving}/>
        :
        null
      }
    </section>
  )
}

export default withRouter(CardContainer);
