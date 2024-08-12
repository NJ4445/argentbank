// pages/User/User.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Account from '../../components/Account/Account';
import styles from './User.module.css';
import { selectUserEmail } from '../../redux/Reducers/Reducers';

const User = () => {
  const userEmail = useSelector(selectUserEmail);

  const accounts = [
    { id: '1', title: "Argent Bank Checking (x8349)", amount: "$2,082.79", description: "Available Balance" },
    { id: '2', title: "Argent Bank Savings (x6712)", amount: "$10,928.42", description: "Available Balance" },
    { id: '3', title: "Argent Bank Credit Card (x8349)", amount: "$184.30", description: "Current Balance" }
  ];

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Welcome back, {userEmail || 'User'}!</h1> {/* Affiche l'email */}
        </div>
        <h2 className="sr-only">Account</h2>
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
