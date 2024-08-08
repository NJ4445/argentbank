// SignInForm.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authSlice';
import styles from './SignInForm.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    // Simuler une connexion réussie
    dispatch(login({ name: 'Tony' }));
    navigate('/user');
  };

  return (
    <main className={`${styles.signInContent} bg-dark`}>
      <FontAwesomeIcon icon={faUserCircle} className={styles.signInIcon} />
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
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
        <button type="submit" className={styles.signInButton}>Sign In</button>
      </form>
    </main>
  );
};

export default SignInForm;
