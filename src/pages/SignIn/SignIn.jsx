// SignIn.jsx
import React from 'react';
import Header from '../../components/Header/Header';
import styles from '../SignIn/SignIn.module.css'; 

const SignIn = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.signInContent}>
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
            {/* Utilisez un lien pour la démonstration */}
            <a href="./user.html" className={styles.signInButton}>Sign In</a>
            {/* Utilisez un bouton si vous avez un gestionnaire de soumission */}
            {/* <button className={styles.signInButton}>Sign In</button> */}
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default SignIn;
