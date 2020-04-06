import React from 'react';

export default function Profile(){

  return(
    <section className='Profile'>
      <a href='/choose-your-adventure'>
        <img src='https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/13287388471540882596-512.png' id='back-button' alt='back-button'/>
      </a>
      <h4 id='username'> @username </h4>

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
