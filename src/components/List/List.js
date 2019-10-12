import React from 'react';
import styles from './List.scss';
import Hero from '../Hero';

class List extends React.Component {
  render() {
    return (
      <setion className={styles.component}>
        <Hero />
      </setion>
    )
  }
}

export default List;
