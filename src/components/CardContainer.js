import React from 'react';
import Card from './Card';

export default function CardContainer(props){
  console.log(props);
  console.log('rendered');

  // console.log(props.cards[0]);
  // const cards = props.cards.map( card => <Card card={card} /> )
  const randomQuestionIndex = () => {
    // props.cards.length
    let index = Math.floor(Math.random() * props.cards.length + 1)
    console.log(index);
    return index;
  }

  return(
    <section>
      {props.cards.length > 0

        ?
        <>
          <Card card={props.cards[randomQuestionIndex()]}/>
        </>
        :

        <p>loadin</p>

      }
    </section>
  )
}
