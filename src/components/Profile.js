import React from 'react';
import BackButton from './BackButton';
import { withRouter } from 'react-router-dom';

function Profile(props){
  let user_name;
  const username = () => {
    if(localStorage.current_user) {
      user_name = JSON.parse(localStorage.current_user);
      return user_name;
    }
  }

  const profileRouter = (evt, action) => {
    evt.preventDefault()
    if(action === 'change password') {
      console.log('change password');
    } else if(action === 'logout'){
      localStorage.clear()
      props.history.push('/')
    } else{
      console.log('edit profile');
    }
  }
  console.log('loading');
  return(
    <section className='Profile'>
      <BackButton />
      <h4 id='username-display'> @{username()} </h4>

      <section className='profile-settings'>
        <button onClick={(evt, action) => profileRouter(evt, '')} disabled>
          <div className='profile-setting-info'>
            <img src='https://i.ya-webdesign.com/images/lock-icon-png-1.png' alt='change-password-icon' />
            <p> Change Password </p>
          </div>
        </button>

        <button onClick={(evt, action) => profileRouter(evt, '')} disabled>
          <div className='profile-setting-info'>
            <img src='https://image.flaticon.com/icons/png/512/184/184312.png' alt='change-password-icon' />
            <p> Edit Profile </p>
          </div>
        </button>

        <button onClick={(evt, action) => profileRouter(evt, 'logout')} >
          <div className='profile-setting-info'>
            <img src='https://www.pngrepo.com/download/83317/log-out.png' alt='change-password-icon' />
            <p> Log Out </p>
          </div>
        </button>
      </section>
    </section>
  )

}
export default withRouter(Profile);
