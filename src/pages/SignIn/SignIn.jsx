import React from 'react'
import SignInForm from '../../components/SignInForm/SignInForm'
import '../SignIn/SignIn.module.css'


function SignIn() {
  return (
    <div className='sign-in'>
    <main className=" main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
    <SignInForm/>
    </section>
    </main>
    </div>

  )
}

export default SignIn