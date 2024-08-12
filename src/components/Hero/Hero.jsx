// Hero.jsx
import React from 'react';
import styles from '../Hero/Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.heroContent}>
        <p className={styles.subtitle}>Pas de frais.</p>
        <p className={styles.subtitle}>Aucun dépôt minimum.</p>
        <p className={styles.subtitle}>Taux d'intérêt élevés.</p>
        <p className={styles.text}>Ouvrez un compte d'épargne avec Argent Bank dès aujourd'hui !</p>
      </section>
    </div>
  );
};

export default Hero;
