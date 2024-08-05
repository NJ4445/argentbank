import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 
import logo from '../../assets/img/argentBankLogo.webp'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <nav className={styles.mainNav}>
      <Link className={styles.mainNavLogo} to="/">
        <img
          className={styles.mainNavLogoImage}
          src={logo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        <Link className={styles.mainNavItem} to="/sign-in">
          <FontAwesomeIcon icon={faUserCircle} className={styles.mainNavItem} />
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Header;
