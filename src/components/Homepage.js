import React from 'react';

export default function Homepage(props){
  console.log(props);

  return(
    <section>
      <h1> Let's Change the Subject </h1>
      <p> Conversations made easy </p>

      <button> Sign Up </button>
      <a href='/login'> Already have an account? </a>
      <a href='/choose-your-adventure'> Skip for Now </a>
    </section>
  )
}
