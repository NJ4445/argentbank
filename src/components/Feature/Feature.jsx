import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feature.module.css'; 

const Feature = ({ iconSrc, title, description }) => {
  return (
    <div className={styles.featureItem}>
      <img
        src={iconSrc}
        alt={`${title} icon`}
        className={styles.featureIcon}
      />
      <h3 className={styles.featureItemTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

Feature.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Feature;
