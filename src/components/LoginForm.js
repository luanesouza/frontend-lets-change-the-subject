import React, { Component } from 'react';
import BackButton from './BackButton';
import Error from './Error';


export default class LoginForm extends Component {

  render() {

    return(
      <form onSubmit={(evt, action) => this.props.handleSubmit(evt, 'login')}>
        <BackButton />
        <Error error={this.props.error}/>
        <section  className='LoginForm'>
          <section className='input-section'>
            <label> Username </label>
            <input
              type='text'
              value={this.props.userInfo.username}
              name='username'
              onChange={(event) =>
                this.props.handleChange(event)}
              placeholder='Enter Your Username'
              autoComplete='off'
            />
          </section>

          <section className='input-section'>
            <label> Password </label>
            <input
              type='password'
              value={this.props.userInfo.password}
              name='password'
              onChange={(event) =>
                this.props.handleChange(event)}
              placeholder='Enter Your Password'
              autoComplete='off'
            />
          </section>
            <input type='submit' value='Get Asking'/>
          </section>
        </form>
    )
  }
}
