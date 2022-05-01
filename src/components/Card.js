import React, { useState } from 'react';

export default function Card(props) {
  const [showGif, isGifShown] = useState(false);
  // const howManyPeppers = (amount) => {
  //
  //   return [...Array(amount)].map((e, i) => <img key={i} id='hot-pepper' src='https://getdrawings.com/free-icon-bw/chili-pepper-icon-19.png' alt='hot-pepper'/> )
  // }

  setTimeout(() => {
    isGifShown(true);
  }, 8000); //if the user doesn't take action after 8 seconds, we display the swip gif, indicating how to interact with the card
  return (
    <section id='card-info'>
      {
        props.card

          ?
          <div>

            <section id='card'>
              <p id='card-content'> {props.card.content} </p>
            </section>
            {showGif ? <img id="swipe-gif" src={require('../images/swipe-icon.gif')} alt="loading..." /> : ''}
          </div>
          :

          <div>
            <iframe title='loading-bar' src="https://giphy.com/embed/h8yL4jsAMl42KzHneP" width="60%" height="60%" frameBorder="0" className="giphy-embed" allowFullScreen />
          </div>
      }
    </section>
  );
}
