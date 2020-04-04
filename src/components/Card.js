import React from 'react';

export default function Card(props){

  const howManyPeppers = (amount) => {

    return [...Array(amount)].map((e, i) => <img key={i} id='hot-pepper' src='https://getdrawings.com/free-icon-bw/chili-pepper-icon-19.png'/> )
  }

  return(
    <section id='card-info'>
    {
      props.card

      ?

      <>
        <section id='card'>
          <p id='card-content'> {props.card.content} </p>
        </section>
        <section className='peppers'>
          {howManyPeppers(props.card.spiciness)}
        </section>
      </>
      :

      <div>
        <iframe title='loading-bar' src="https://giphy.com/embed/h8yL4jsAMl42KzHneP" width="60%" height="60%" frameBorder="0" className="giphy-embed" allowFullScreen/>
      </div>
    }
    </section>
  )
}
