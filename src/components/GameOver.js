import React from 'react';

export default function GameOver() {
  const isGuest = JSON.parse(localStorage.isGuest)
  const current_user = !!localStorage.current_user ? JSON.parse(localStorage.current_user) : 'friend';

  const questions_category = !!localStorage.chosenCategory ? ` with your ${JSON.parse(localStorage.chosenCategory)}` : true;

  return(
    <section id='GameOver'>
      {
        isGuest
        ?
        <h3>Congratulations! </h3>
        :
        <h3>Congratulations, {current_user}! </h3>
      }
      <p>
        You've talked {questions_category} about different topics, from food to love.
        <br />
        <br />
        Try exploring more questions...
      </p>
      <section className='navigation-links'>
        <a href='choose-your-adventure'> Star a New Conversation</a>
        {
          isGuest
          ?
          <a href='/signup'> Sign Up </a>
          :
          <a href='/profile'> Take me to Profile </a>
        }
      </section>
    </section>
  )
}
