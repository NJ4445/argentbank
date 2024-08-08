// Header.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import styles from './Header.module.css'; 
import logo from '../../assets/img/argentBankLogo.webp'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du bouton
    dispatch(logout());
    navigate('/'); // Redirige vers la page d'accueil après déconnexion
  };

  return (
    <nav className={styles.mainNav}>
      <Link className={styles.mainNavLogo} to="/">
        <img
          className={styles.mainNavLogoImage}
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {user ? (
        <div>
          <Link className={styles.mainNavItem} to="/user">
            <FontAwesomeIcon icon={faUserCircle} className={styles.mainNavItemIcon} />
            {user.name}
          </Link>
          <button
            type="button" // Spécifie que c'est un bouton
            className={styles.mainNavItem} // Applique les styles de lien
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faSignOut} className={styles.mainNavItemIcon} />
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link className={styles.mainNavItem} to="/sign-in">
            <FontAwesomeIcon icon={faUserCircle} className={styles.mainNavItemIcon} />
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
