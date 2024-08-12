import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login as loginApi } from '../../api/callApi';
import { setToken, setUser } from '../../redux/Features/authSlice';
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
      const response = await loginApi({ email, password });
      if (response.status === 200) {
        const { token } = response.data.body;
        dispatch(setToken(token));
        dispatch(setUser({ email }));
        navigate('/user');
      } else {
        setError('Login failed: ' + response.statusText);
      }
    } catch (error) {
      setError('Failed to login: ' + error.message);
    }
  };

  return (
    <main className={`${styles.signInContent} bg-dark`}>
      <FontAwesomeIcon icon={faUserCircle} className={styles.signInIcon} />
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
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
