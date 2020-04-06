import React from 'react';

export default function AreYouSure(props) {

  console.log(props);

  const confirmation = (evt) => {
    evt.preventDefault()
    console.log(props.isUserLeaving(!props.leaving))
  }

  return(
    <section classsName='AreYouSure'>
      <h4> Sure you'd like to leave this conversation?</h4>
      <section className='sure-buttons'>
        <button> YES </button>
        <button onClick={(evt) => confirmation(evt)}> NO </button>
      </section>
    </section>
  )
}
