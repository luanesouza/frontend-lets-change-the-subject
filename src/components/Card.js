import React from 'react';

export default function Card(props){
  console.log('worked', props);

  return(
    <section id='card'>
    {
      props.card

      ?

      <p> {props.card.content} </p>

      :

      <div>
        <iframe src="https://giphy.com/embed/h8yL4jsAMl42KzHneP" width="60%" height="60%" frameBorder="0" className="giphy-embed" allowFullScreen/>
      </div>
    }
    </section>
  )
}
