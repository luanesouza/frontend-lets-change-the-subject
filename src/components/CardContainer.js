import React from 'react';
import Card from './Card';

export default function CardContainer(props){


  console.log(props.cards[0]);
  const cards = props.cards.map( card => <Card card={card} /> )

  const alreadyDisplayed = props.cards.filter( card => card.id == true)

  // const randomQuestionIndex = (evt) => {
  //   evt.preventDefault()
  //
  //   let index = Math.floor(Math.random() * props.cards.length)
  //   console.log(index);
  //   return index;
  // }

  return(
    <section>
      {props.cards.length > 0

        ?

        <>
        console.log(alreadyDisplayed);
        </>

        :

        <p>loadin</p>

      }
    </section>
  )
}
