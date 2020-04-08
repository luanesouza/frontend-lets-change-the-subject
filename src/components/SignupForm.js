import React, { Component } from 'react';
import BackButton from './BackButton';
import Error from './Error';

export default class SignupForm extends Component {

  render() {

    return(
      <form onSubmit={(evt, action) => this.props.handleSubmit(evt, 'signup')}>
        <BackButton />
        <Error error={this.props.error}/>
        <section className='SignupForm'>
          <section className='input-section'>
            <label htmlFor='username'> Username </label>
            <input
              aria-required="true"
              id='username'
              type='text'
              value={this.props.userInfo.username}
              name='username'
              onChange={(event) =>
                this.props.handleChange(event)}
              autoComplete='off'
            />
          </section>

          <section className='input-section'>
            <label htmlFor='email'> Email </label>
            <input
              aria-required="true"
              id='email'
              type='text'
              value={this.props.userInfo.email}
              name='email'
              onChange={(event) =>
                this.props.handleChange(event)}
              autoComplete='off'
            />
          </section>

          <section className='input-section'>
            <label htmlFor='password'> Password </label>
            <input
              aria-required="true"
              id='password'
              type='password'
              value={this.props.userInfo.password}
              name='password'
              onChange={(event) =>
                this.props.handleChange(event)}
              autoComplete='off'
            />
          </section>
          <input type='submit' value='Get Asking'/>
          <a href='/login'> I already have an account </a>
        </section>
        </form>
    )
  }
}
