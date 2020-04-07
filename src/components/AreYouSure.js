import React from 'react';
import { withRouter } from 'react-router-dom'

function AreYouSure(props) {


  const confirmation = (evt, action) => {
    evt.preventDefault()
    if(action === 'stay'){
      props.isUserLeaving(false)
    } else {
      props.history.push('/play-again')
    }
  }

  return(
    <section id='AreYouSure'>
      <section className='confirmation-content'>
        <h4> Sure you'd like to leave this conversation?</h4>
        <section className='sure-buttons'>
          <button onClick={(evt, action) => confirmation(evt, 'exit')}> YES </button>
          <button onClick={(evt, action) => confirmation(evt, 'stay')}> NO </button>
        </section>
      </section>
    </section>
  )
}

export default withRouter(AreYouSure)
