import React from 'react';

export default function Homepage(props){

  return(
    <section className='Homepage'>
      <h1> Let's Change the Subject </h1>
      <p> Conversations made easy </p>
      <section className='signup-section'>
        <button id='signup-button' onClick ={ (evt) => props.isGuest(evt, 'signup')}> Sign Up </button>
        <button onClick ={ (evt) => props.isGuest(evt, 'login')}> Already have an account? </button>
      </section>
      <button id='skip-tag' onClick ={ (evt) => props.isGuest(evt, 'guest')}> Skip for Now </button>
    </section>
  )
}
