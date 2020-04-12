import React from 'react';
import { withRouter } from 'react-router-dom'

function AreYouSure(props) {


  const confirmation = (evt, action) => {
    evt.preventDefault()
    if(action === 'yes'){
      props.history.push('/choose-your-adventure')
    } else {
      props.history.push('/play-again')
    }
  }

  return(
    <section id='AreYouSure'>
      <section className='confirmation-content'>
        <h4> Want to start a new conversation?</h4>
        <section className='sure-buttons'>
          <button onClick={(evt, action) => confirmation(evt, 'yes')}> YES </button>
          <button onClick={(evt, action) => confirmation(evt, 'no')}> NO </button>
        </section>
      </section>
    </section>
  )
}

export default withRouter(AreYouSure)
