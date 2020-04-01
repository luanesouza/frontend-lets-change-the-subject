import React, { useState } from 'react';
import Card from './Card';

export default function CardContainer(props){

  const [currentQuestion, setCurrentQuestion] = useState(props.cards[0])

  let counter = 0;

  const showOneCard = (evt) => {
    evt.preventDefault()

    if(counter === props.cards.length){
      console.log('we are out of question');
      counter = 0;
    } else {
      counter++
    }
    setCurrentQuestion(props.cards[counter])
    console.log(currentQuestion);
    return currentQuestion;

  }

  // console.log(props.cards[0]);
  // const cards = props.cards.map( card => <Card card={card} /> )
  //
  // const alreadyDisplayed = props.cards.filter( card => card.id == true)

  // const randomQuestionIndex = (evt) => {
  //   evt.preventDefault()
  //
  //   let index = Math.floor(Math.random() * props.cards.length)
  //   console.log(index);
  //   return index;
  // }

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
