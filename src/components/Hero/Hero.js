import * as React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = ({ titleText, link }) => {
  return (
    <header className={styles.component}>
      <h2 className={styles.title}>{titleText}</h2>
      <img src={link} className={styles.image} />
    </header>
  );
}

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  lin: PropTypes.string,
};

export default Hero;