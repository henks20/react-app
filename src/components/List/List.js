import React from 'react';
import styles from './List.scss';
import Hero from '../Hero';
import PropTypes from 'prop-types';
import Column from '../Column';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    link: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription
  }

  state = {
    columns: this.props.columns || [],
  }

  addColumn(title) {
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      <setion className={styles.component}>
        <Hero titleText={this.props.title} link={this.props.link} />
        {ReactHtmlParser(this.props.description)}
        <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          {/* Question action */}
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
        </div>
      </setion>
    )
  }
}

export default List;
