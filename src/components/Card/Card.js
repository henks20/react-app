import * as React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ title }) => {
  return (
    <div className={styles.component}>
      <p>{title}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;