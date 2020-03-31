import React from 'react';

export default function Homepage(props){
  console.log(props);

  return(
    <section className='Homepage'>
      <h1> Let's Change the Subject </h1>
      <p> Conversations made easy </p>
      <section className='signup-section'>
        <button id='signup-button'> Sign Up </button>
        <a href='/login'> Already have an account? </a>
      </section>
      <a id='skip-tag' href='/choose-your-adventure'> Skip for Now </a>
    </section>
  )
}
