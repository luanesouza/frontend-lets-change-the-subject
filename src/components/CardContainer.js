import React, { useState } from 'react';
import Card from './Card';

export default function CardContainer(props){

  const [currentQuestion, setCurrentQuestion] = useState(props.cards[0])
  const [counter, setCounter] = useState(1)

  const showOneCard = (evt, action) => {
    evt.preventDefault()
    console.log('clicked', props.cards);

    if(counter === props.cards.length){
      setCounter(0)
      return setCurrentQuestion(props.cards[1])
    } else {
      setCounter(counter + 1)
      return setCurrentQuestion(props.cards[counter])
    }
  }

  return(
    <section>
      <div className='card-container'>
        <Card card={currentQuestion} />
      </div>
      <div className='card-buttons'>
        <button onClick={(evt) => showOneCard(evt, 'skip')}> Skip Question </button>
        <button onClick={(evt) => showOneCard(evt, 'answered')}> I answered </button>
      </div>
    </section>
  )
}
