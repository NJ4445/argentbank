// SignInForm.jsx
import React from 'react';
import styles from '../SignInForm/SignInForm.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const SignInForm = () => {
  return (
    <main className={`${styles.signInContent} bg-dark`}>
      <FontAwesomeIcon icon={faUserCircle} className={styles.signInIcon} />
      <h1>Sign In</h1>
      <form>
        <div className={styles.inputWrapper}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.inputRemember}>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <a href="./user" className={styles.signInButton}>Sign In</a>
      </form>
    </main>
  );
};

export default SignInForm;
