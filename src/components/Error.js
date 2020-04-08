import React from 'react';

export default function Error(props) {
  return(
    <>
      {
        props.error
        ?
        <p id='error'> {props.error} </p>
        :
        true
      }
    </>
  )
}
