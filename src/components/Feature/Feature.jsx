import React from 'react';
import styles from './Feature.module.css'; 

const Feature = ({ iconSrc, title, description }) => {
  return (
    <div className={styles.featureItem}>
      <img
        src={iconSrc}
        alt={`${title} Icon`}
        className={styles.featureIcon}
      />
      <h3 className={styles.featureItemTitle}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
