import React from 'react';

export default function GameOver() {

  const current_user = 'John Doe'
  // const questions_category = JSON.parse(localStorage.chosenCategory) || 'friends';
  const questions_category = 'friends';

  // Had to
  return(
    <section id='GameOver'>
      <h3>Congratulations, {current_user}! </h3>
      <p>
        You've talked with your {questions_category} about different topics, from food to love.
        <br />
        Try exploring more questions...
      </p>
      <section className='navigation-links'>
        <a href='choose-your-adventure'> Star a New Conversation</a>
        <a href='/profile'> Take me to Profile </a>
      </section>
    </section>
  )
}
