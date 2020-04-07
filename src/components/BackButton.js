import React from 'react';
import { withRouter } from 'react-router-dom';

function BackButton(props){
  const goBack = (evt) => {
    evt.preventDefault()
    props.history.goBack()
  }

  return(
    <button onClick={(evt) => goBack(evt)} href='/choose-your-adventure'>
      <img src='https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/13287388471540882596-512.png' id='back-button' alt='back-button'/>
    </button>
  )
}

export default withRouter(BackButton)
