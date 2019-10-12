import React from 'react';
import styles from './List.scss';
import Hero from '../Hero';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <setion className={styles.component}>
        <Hero titleText={this.props.title} />
        {this.props.children}
      </setion>
    )
  }
}

export default List;
