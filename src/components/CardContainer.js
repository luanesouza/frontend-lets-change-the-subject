import React from 'react';
import Card from './Card';

export default function CardContainer(props){

  const cards = props.cards.map( card => <Card card={card} /> )

  return(
    <section>
      {cards}
    </section>
  )
}
