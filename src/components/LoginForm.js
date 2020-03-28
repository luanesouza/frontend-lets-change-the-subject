import React, { Component } from 'react';

export default class LoginForm extends Component {

  render() {

    return(
      <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <input
            type='text'
            name='name'
            value={userRegionInput}
            onChange={(event) =>
              this.props.handleChange(event)}
            placeholder='Enter Here'
            autoComplete='off'/>
            <input type='submit' value='Login'/>
        </form>
    )
  }
}
