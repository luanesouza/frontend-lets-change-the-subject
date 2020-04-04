import React, { Component } from 'react';

export default class SignupForm extends Component {

  render() {
    console.log(this.props);

    return(
      <form className='SignupForm' onSubmit={(evt, action) => this.props.handleSubmit(evt, 'signup')}>
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
        </form>
    )
  }
}
