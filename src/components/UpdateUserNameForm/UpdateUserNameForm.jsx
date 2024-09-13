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

const UpdateUserNameForm = ({ setIsEditing }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const status = useSelector(selectAuthStatus);
  const error = useSelector(selectAuthError);

  // Utilisez les sélecteurs pour obtenir les valeurs actuelles
  const currentUserName = useSelector(selectUserName);
  const currentFirstName = useSelector(selectUserFirstName);
  const currentLastName = useSelector(selectUserLastName);

  // État local pour le nouveau nom d'utilisateur
  const [newUserName, setNewUserName] = useState(currentUserName);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!token) return;

    // Dispatchez l'action pour mettre à jour le nom d'utilisateur
    const result = await dispatch(updateUserName({ token, userName: newUserName }));

    if (updateUserName.fulfilled.match(result)) {
      // Dispatchez une action pour récupérer le profil utilisateur mis à jour
      dispatch(fetchUserProfile(token));
      setIsEditing(false);
    } else {
      console.error('Failed to update user name:', result.payload);
    }

    // Réinitialisez le champ de saisie après la soumission
    setNewUserName('');
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
