import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { logout as logoutAction, selectUserName, selectToken } from '../../redux/Features/authSlice';
import styles from './Nav.module.css';
import logo from '../../assets/img/argentBankLogo.webp';

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const userName = useSelector(selectUserName); 
  console.log(userName);
  const token = useSelector(selectToken);

  useEffect(() => {
    console.log('UserName from Nav:', userName);
    console.log('Token from Nav:', token);
  }, [userName, token]); // Cela s'exécute chaque fois que userName change

  const handleSignOut = () => {
    dispatch(logoutAction());
    navigate('/');
  };

  return (
    <nav className={styles.mainNav} aria-label="Main navigation">
      <Link to="/" className={styles.mainNavLogo}>
        <img className={styles.mainNavLogoImage} src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <>
            <Link className={styles.mainNavItem} to="/user">
              <FontAwesomeIcon icon={faUserCircle} className={styles.mainNavItemIcon} />
              {userName ? userName : 'Chargement...'}
            </Link>
            <button type="button" className={styles.mainNavItem} onClick={handleSignOut}>
              <FontAwesomeIcon icon={faSignOut} className={styles.mainNavItemIcon} />
              Sign Out
            </button>
          </>
        ) : (
          <Link className={styles.mainNavItem} to="/sign-in">
            <FontAwesomeIcon icon={faUserCircle} className={styles.mainNavItemIcon} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
