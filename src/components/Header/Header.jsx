import React from 'react';
import styles from '../Header/Header.module.css';
import logo from '../../assets/img/argentBankLogo.webp'; 

const Header = () => {
  return (
    <nav className={styles.mainNav}>
      <a className={styles.mainNavLogo} href="./index.html">
        <img
          className={styles.mainNavLogoImage}
          src={logo} 
          alt="Argent Bank Logo"
        />
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
