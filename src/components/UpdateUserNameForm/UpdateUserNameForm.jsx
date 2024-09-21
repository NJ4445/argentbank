import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import {
  updateUserName,
  fetchUserProfile,
  selectToken,
  selectAuthStatus,
  selectAuthError,
  selectUserName,
  selectUserFirstName,
  selectUserLastName,
} from '../../redux/Features/authSlice';
import styles from './UpdateUserNameForm.module.css';

// Formulaire pour mettre à jour le nom d'utilisateur
const UpdateUserNameForm = ({ setIsEditing }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const status = useSelector(selectAuthStatus);
  const error = useSelector(selectAuthError);
  const currentUserName = useSelector(selectUserName);
  const currentFirstName = useSelector(selectUserFirstName);
  const currentLastName = useSelector(selectUserLastName);
  
  const [newUserName, setNewUserName] = useState(currentUserName);

  // Fonction pour gérer la soumission du formulaire  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!token) return;

    try {
      await dispatch(updateUserName({ token, userName: newUserName })).unwrap();
      
      dispatch(fetchUserProfile(token)); // Récupère le profil utilisateur mis à jour
      setIsEditing(false); // Quitte le mode édition
    } catch (error) {
      console.error('Failed to update user name:', error); // Affiche une erreur en cas d'échec
    }

    setNewUserName(''); // Réinitialise le champ de saisie
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="username">User name:</label>
        <input
          type="text"
          id="username"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          required
          className={styles.input}
          autoComplete="username" 
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="firstname">First name:</label>
        <input
          type="text"
          id="firstname"
          value={currentFirstName}
          disabled
          className={`${styles.input} ${styles.disabledInput}`}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="lastname">Last name:</label>
        <input
          type="text"
          id="lastname"
          value={currentLastName}
          disabled
          className={`${styles.input} ${styles.disabledInput}`}
        />
      </div>
      {error && <div className={styles.error} role="alert">{error}</div>}
      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.saveButton} disabled={status === 'loading'}>
          {status === 'loading' ? 'Saving...' : 'Save'}
        </button>
        <button 
          type="button" 
          className={styles.cancelButton} 
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateUserNameForm;
