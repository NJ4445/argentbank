// Header.jsx
import React from 'react';
import styles from '../Header/Header.module.css'; 

const Header = () => {
  return (
    <nav className={styles.mainNav}>
      <a className={styles.mainNavLogo} href="./index.html">
        <img
          className={styles.mainNavLogoImage}
          src="./assets/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className={styles.mainNavItem} href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a> 
      </div>
    </nav>
  );
};

export default Header;
