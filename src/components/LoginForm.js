import React, { Component } from 'react';

export default class LoginForm extends Component {

  render() {

    return(
      <form className='LoginForm' onSubmit={(evt) => this.handleSubmit(evt)}>
        <section className='input-section'>
          <label> Username </label>
          <input
            type='text'
            name='username'
            onChange={(event) =>
              this.props.handleChange(event)}
            placeholder='Enter Your Username'
            autoComplete='off'
          />
        </section>

        <section className='input-section'>
          <label> Email </label>
          <input
            type='text'
            name='email'
            onChange={(event) =>
              this.props.handleChange(event)}
            placeholder='Enter Your Email'
            autoComplete='off'
          />
        </section>

        <section className='input-section'>
          <label> Password </label>
          <input
            type='text'
            name='password'
            onChange={(event) =>
              this.props.handleChange(event)}
            placeholder='Enter Your Password'
            autoComplete='off'
          />
        </section>
          <input type='submit' value='Get Asking'/>
        </form>
    )
  }
}
