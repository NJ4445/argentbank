// ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css'; 

const Error = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles.alert404}>404</h1>
      <p className={styles.description}>Désolé, la page que vous recherchez n'existe pas.</p>
      <Link to="/" className={styles.link}>Retour à l'accueil</Link>
    </div>
  );
};

export default Error;
