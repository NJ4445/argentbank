import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Account/Account.module.css'; 

const Account = ({ title, amount, description }) => {
  return (
    <section className={styles.account} aria-label={`Account section for ${title}`}>
      <div className={styles.accountContentWrapper}>
        <h3 className={styles.accountTitle}>{title}</h3>
        <p className={styles.accountAmount} aria-live="polite">{amount}</p>
        <p className={styles.accountAmountDescription}>{description}</p>
      </div>
      <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
        <button className={styles.transactionButton} onClick={() => alert('Feature coming soon!')}>
          View transactions
        </button>
      </div>
    </section>
  );
};

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Account;
