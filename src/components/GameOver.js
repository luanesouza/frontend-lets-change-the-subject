import React from 'react';

export default function GameOver() {

  // const isGuest = JSON.parse(localStorage.isGuest)
  // const current_user = !!localStorage.current_user ? localStorage.current_user : 'friend';
  //
  const questions_category = !!localStorage.chosenCategory ? ` with your ${localStorage.chosenCategory}` : true;

  return(
    <section id='GameOver'>
        <h3>Congratulations! </h3>
      <p>
        You've talked {questions_category} about different topics, from food to love.
        <br />
        <br />
        Try exploring more questions...
      </p>
      <section className='navigation-links'>
        <a href='choose-your-adventure'> Star a New Conversation</a>
      </section>
    </section>
  )
}
