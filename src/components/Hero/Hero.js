import * as React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = ({ titleText }) => {
  return (
    <header className={styles.component}>
      <h2 className={styles.title}>{titleText}</h2>
      <img src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" className={styles.image} />
    </header>
  );
}

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
};

export default Hero;