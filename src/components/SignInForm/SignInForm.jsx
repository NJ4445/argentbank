// SignInForm.jsx
import React from 'react';
import styles from '../SignInForm/SignInForm.module.css'; 

const SignInForm = () => {
  return (
    <main className={`${styles.signInContent} bg-dark`}>
      <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
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
        {/* Utilisez le bouton si vous avez un gestionnaire de soumission */}
        {/* <button className={styles.signInButton}>Sign In</button> */}
      </form>
    </main>
  );
};

export default SignInForm;
