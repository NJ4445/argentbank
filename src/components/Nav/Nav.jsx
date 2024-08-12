import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail, logout } from '../../redux/Features/authSlice';
import styles from './Nav.module.css';
import logo from '../../assets/img/argentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className={styles.mainNav}>
      <a href="/" className={styles.mainNavLogo} onClick={(e) => {
        e.preventDefault();
        if (userEmail) handleLogout();
        else navigate('/');
      }}>
        <img className={styles.mainNavLogoImage} src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      {userEmail ? (
        <div>
          <Link className={styles.mainNavItem} to="/user">
            <FontAwesomeIcon icon={faUserCircle} className={styles.mainNavItemIcon} />
            {userEmail}
          </Link>
          <button type="button" className={styles.mainNavItem} onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOut} className={styles.mainNavItemIcon} />
            Sign Out
          </button>
        </div>
      ) : (
        <Link className={styles.mainNavItem} to="/sign-in">
          <FontAwesomeIcon icon={faUserCircle} className={styles.mainNavItemIcon} />
          Sign In
        </Link>
      )}
    </nav>
  );
};

export default Nav;
