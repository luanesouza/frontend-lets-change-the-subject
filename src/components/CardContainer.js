import React from 'react';
// import Card from './Card';

export default function CardContainer(props){

  // WE SHOULD DECIDE WHERE THE LOGIC FOR KEEPING THE COUNTER OF QUESTIONS SHOULD LIVE -- it can live here, and we'd need to make this stateful

  const handleClick = (action) => {
    props.nextQuestion(action, props.cards[0], props.selectedCategory)
  }

  return(
    <section>
      <>
      <p>{props?.cards[0]?.content}</p>
      <button onClick={() => handleClick("skip")}> skip </button>
      <button onClick={() => handleClick("next")}> next </button>
      </>
    </section>
  )
}
