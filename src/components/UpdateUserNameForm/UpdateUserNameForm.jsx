import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName, fetchUserProfile, selectToken, selectAuthStatus, selectAuthError } from '../../redux/Features/authSlice';
import styles from './UpdateUserNameForm.module.css';

const UpdateUserNameForm = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const status = useSelector(selectAuthStatus);
  const error = useSelector(selectAuthError);
  const [newUserName, setNewUserName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!token) {
      return;
    }

    const result = await dispatch(updateUserName({ token, userName: newUserName }));
  
    if (updateUserName.fulfilled.match(result)) {
      console.log('User name updated successfully');
      // Rafraîchir les données utilisateur après la mise à jour du nom
      dispatch(fetchUserProfile(token));
    } else {
      console.error('Failed to update user name:', result.payload);
    }
    
    setNewUserName(''); // Réinitialiser l'input après soumission
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="newUserName">New User Name</label>
        <input
          type="text"
          id="newUserName"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      {error && <div className={styles.error} role="alert">{error}</div>}
      <button type="submit" className={styles.editButton} disabled={status === 'loading'}>
        {status === 'loading' ? 'Updating...' : 'Edit name'}
      </button>
    </form>
  );
};

export default UpdateUserNameForm;
