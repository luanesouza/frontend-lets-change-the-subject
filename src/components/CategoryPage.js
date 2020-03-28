import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CardContainer from './CardContainer';

export default class CategoryPage extends Component {
  state = {
    cards: [1, 2, 3, 4, 5, 6],
    chosenPath: []
  }

  whichCards = (evt) => {
    evt.preventDefault()
    console.log(evt.target.innerText);
  }

  render() {
    return(
      <section>

      <button onClick ={(evt) => this.whichCards(evt)}>
        Talk with Friends
      </button>

      <button onClick={(evt) => this.whichCards(evt)}>
        Talk with Coworkers
      </button>

      <button onClick={(evt) => this.whichCards(evt)}>
        Talk with Partner
      </button>

      <Route path='/make-it-fun'>
        <CardContainer cards={this.state.cards} />
      </Route>
      </section>
    )
  }
}
