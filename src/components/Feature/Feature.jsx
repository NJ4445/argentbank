import React from 'react';
import styles from '../Feature/Feature.module.css'; 

// Import des icônes
import IconChat from '../../assets/img/icon-chat.webp';
import IconMoney from '../../assets/img/icon-money.webp';
import IconSecurity from '../../assets/img/icon-security.webp';

const Feature = () => {
  return (
    <section className={styles.features}>
      <div className={styles.featureItem}>
        <img
          src={IconChat}  
          alt="Chat Icon"
          className={styles.featureIcon}
        />
        <h3 className={styles.featureItemTitle}>You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      <div className={styles.featureItem}>
        <img
          src={IconMoney}  
          alt="Money Icon"
          className={styles.featureIcon}
        />
        <h3 className={styles.featureItemTitle}>More savings means higher rates</h3>
        <p>
          The more you save with us, the higher your interest rate will be!
        </p>
      </div>
      <div className={styles.featureItem}>
        <img
          src={IconSecurity}  
          alt="Security Icon"
          className={styles.featureIcon}
        />
        <h3 className={styles.featureItemTitle}>Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money
          is always safe.
        </p>
      </div>
    </section>
  );
};

export default Feature;
