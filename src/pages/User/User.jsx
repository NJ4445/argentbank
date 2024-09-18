import React, { useState, useEffect } from 'react'; // Ajout de useState et useEffect
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from '../../components/Account/Account';
import UpdateUserNameForm from '../../components/UpdateUserNameForm/UpdateUserNameForm';
import styles from './User.module.css';
import { selectUserName, selectToken } from '../../redux/Features/authSlice';

const User = () => {
  const userFirstName = useSelector(selectUserName);
  const token = useSelector(selectToken); // Sélecteur pour le token
  const navigate = useNavigate(); // Hook pour rediriger

  // Redirection si l'utilisateur n'est pas authentifié
  useEffect(() => {
    if (!token) {
      navigate('/sign-in');
    }
  }, [token, navigate]);

  const [isEditing, setIsEditing] = useState(false); // Utilisation de useState

  const accounts = [
    { id: '1', title: "Argent Bank Checking (x8349)", amount: "$2,082.79", description: "Available Balance" },
    { id: '2', title: "Argent Bank Savings (x6712)", amount: "$10,928.42", description: "Available Balance" },
    { id: '3', title: "Argent Bank Credit Card (x8349)", amount: "$184.30", description: "Current Balance" }
  ];

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.header}>
          {!isEditing ? (
            <>
              <h1>Welcome back, {userFirstName}!</h1>
              <button 
                onClick={() => setIsEditing(true)} 
                className={styles.editButton}>
                Edit Name
              </button>
            </>
          ) : (
            <>
              <h1>Edit User Info</h1>
              <UpdateUserNameForm setIsEditing={setIsEditing} />
            </>
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>
        {accounts.length > 0 ? (
          accounts.map((account) => (
            <Account
              key={account.id}
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
          ))
        ) : (
          <p className={styles.noAccounts}>No accounts available.</p>
        )}
      </main>
    </div>
  );
};

export default User;
