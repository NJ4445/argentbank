// SignIn.jsx
import React from 'react'
import SignInForm from '../../components/SignInForm/SignInForm'
import styles from '../SignIn/SignIn.module.css'

function SignIn() {
  return (
    <div className={styles['sign-in']}>
      <main className={`${styles.main} ${styles['bg-dark']}`}>
        <section className={styles['sign-in-content']}>
          <i className={`fa fa-user-circle ${styles['sign-in-icon']}`}></i>
          <SignInForm/>
        </section>
      </main>
    </div>
  )
}

export default SignIn;