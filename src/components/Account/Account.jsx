// Account.jsx
import React from 'react';
import styles from '../Account/Account.module.css'; 

const Account = ({ title, amount, description }) => {
  return (
    <section className={styles.account}>
      <div className={styles.accountContentWrapper}>
        <h3 className={styles.accountTitle}>{title}</h3>
        <p className={styles.accountAmount}>{amount}</p>
        <p className={styles.accountAmountDescription}>{description}</p>
      </div>
      <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
        <button className={styles.transactionButton}>View transactions</button>
      </div>
    </section>
  );
};

export default Account;
