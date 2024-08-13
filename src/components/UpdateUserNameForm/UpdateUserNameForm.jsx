// UpdateUserNameForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName } from '../../api/callApi';
import { setUser, selectUserEmail  } from '../../redux/Features/authSlice';

import styles from './UpdateUserNameForm.module.css';

const UpdateUserNameForm = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const [newUserName, setNewUserName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
      if (token) {
        const response = await updateUserName(token, newUserName);
        if (response.status === 200) {
          dispatch(setUser({ email: userEmail, name: newUserName }));
        } else {
          setError('Failed to update username.');
        }
      } else {
        setError('No authentication token found.');
      }
    } catch (error) {
      setError('Failed to update username: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="newUserName"></label>
        <input
          type="text"
          id="newUserName"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          required
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <button type="submit" className={styles.editButton}>Edit Name</button>
    </form>
  );
};

export default UpdateUserNameForm;
