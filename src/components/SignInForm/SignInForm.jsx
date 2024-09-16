import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Features/authSlice'; 
import styles from './SignInForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const action = await dispatch(login({ email, password }));
      if (login.fulfilled.match(action)) {
        navigate('/user');
      } else {
        setError('Login failed: ' + action.payload);
      }
    } catch (error) {
      setError('Failed to login: ' + error.message);
    }
  };

  return (
    <main className={`${styles.signInContent} bg-dark`}>
      <FontAwesomeIcon icon={faUserCircle} className={styles.signInIcon} />
      <h1 id="sign-in-heading">Sign In</h1>
      <form onSubmit={handleSignIn} aria-labelledby="sign-in-heading">
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            aria-label="Email address"
            autoComplete="email" 
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
            aria-label="Password"
            autoComplete="current-password" 
          />
        </div>
        {error && <div className={styles.error} role="alert" aria-live="assertive">{error}</div>}
        <div className={styles.inputRemember}>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button 
          className={styles.signInButton} 
          type="submit"
        >
          Sign In
        </button>
      </form>
    </main>
  );
};

export default SignInForm;
