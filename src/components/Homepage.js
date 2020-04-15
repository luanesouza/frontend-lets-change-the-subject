import React from 'react';

export default function Homepage(props){

  let a = document.querySelector('._2XBDTIVigBJDybhZvL-hU3');
  console.log(a);

  return(
    <section className='Homepage'>
      <button id='skip-tag' onClick ={ (evt) => props.isGuest(evt, 'guest')}>
        <h1> Let's Change the Subject </h1>
        <p> Conversations made easy </p>
        <section className='tap'>
          <p>tap to start</p>
          <iframe
            title='tap'
            src="https://giphy.com/embed/4TbiajrbV5NZVAhs5w"
            width="50" height="70"
            frameBorder="0"
            >
          </iframe>
        </section>
      </button>
    </section>
  )
}
