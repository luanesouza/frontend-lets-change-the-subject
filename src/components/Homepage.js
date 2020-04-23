import React from 'react';
import tap from '../images/tap_gif.png'

export default function Homepage(props){

  return(
    <section className='Homepage'>
      <button id='skip-tag' onClick ={ (evt) => props.isGuest(evt, 'guest')}>
        <h1> Let's Change the Subject </h1>
        <p> Conversations made easy </p>
        <section className='tap'>
          <p>tap to start</p>
          <img id='tap' src={tap} />
        </section>
      </button>
    </section>
  )
}
