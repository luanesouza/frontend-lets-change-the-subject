import React from 'react';

export default function Skipped(props) {

  setTimeout(() => props.swipe(false) , 1000);
  
  return(
    <section className='Skipped'>
    {
      props.swiped === 'left'
      ?
      <img src='https://img.icons8.com/ios/500/dislike.png' alt='skip'/>
      :
      <img src='https://cdn.onlinewebfonts.com/svg/img_135210.png' alt='skip'/>

    }
    </section>
  )
}
