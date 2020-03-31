import React from 'react';

export default function Card(props){
  console.log('worked', props);

  return(
    <section>
      <p> {props.card.content} </p>
    </section>
  )
}
