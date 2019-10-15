import * as React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = ({ titleText, link }) => {
  return (
    <header className={styles.component}>
      <h2 className={styles.title}>{ReactHtmlParser(titleText)}</h2>
      <img src={link} className={styles.image} />
    </header>
  );
};

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  link: PropTypes.string,
};

export default Hero;