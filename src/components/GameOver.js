import React from 'react';

export default function GameOver() {

  const current_user = 'John Doe'
  const questions_category = JSON.parse(localStorage.chosenCategory)

  return(
    <section>

      <h3>Congratulations {current_user}! </h3>
      <p>
        You've talked with your {questions_category} about different topics, from food to love. Try exploring more questions...
      </p>
      <a href='choose-your-adventure'> Star a New Conversation</a>
      <a> Take me to Profile </a>
    </section>
  )
}
