import React from 'react';
import styles from '../Footer/Footer.module.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>Copyright {currentYear} Argent Bank</p>
    </footer>
  );
};

export default Footer;
