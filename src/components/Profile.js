import React from 'react';
import BackButton from './BackButton';
import { withRouter } from 'react-router-dom';

function Profile(props){
  const username = JSON.parse(localStorage.current_user)

  const profileRouter = (action) => {
    if(action === 'change password') {
      console.log('change password');
    } else if(action === 'logout'){
      localStorage.clear()
      props.history.push('/')
    } else{
      console.log('edit profile');
    }
  }

  return(
    <section className='Profile'>
      <BackButton />
      <h4 id='username-display'> @{username} </h4>

      <section className='profile-settings'>
        <a href='/profile'>
          <div className='profile-setting-info'>
            <img src='https://i.ya-webdesign.com/images/lock-icon-png-1.png' alt='change-password-icon' />
            <p> Change Password </p>
          </div>
        </a>

        <a href='/profile'>
          <div className='profile-setting-info'>
            <img src='https://image.flaticon.com/icons/png/512/184/184312.png' alt='change-password-icon' />
            <p> Edit Profile </p>
          </div>
        </a>

        <a href='/'>
          <div className='profile-setting-info'>
            <img src='https://www.pngrepo.com/download/83317/log-out.png' alt='change-password-icon' />
            <p> Log Out </p>
          </div>
        </a>
      </section>
    </section>
  )

}
export default withRouter(Profile);
