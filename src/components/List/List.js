import React from 'react';
import styles from './List.scss';
import Hero from '../Hero';
import PropTypes from 'prop-types';
import Column from '../Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    link: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <setion className={styles.component}>
        <Hero titleText={this.props.title} link={this.props.link} />
        {this.props.children}
        <div className={styles.columns}>
          <Column title="Animals" />
          <Column title="Plants" />
          <Column title="Minerals" />
        </div>
      </setion>
    )
  }
}

export default List;
