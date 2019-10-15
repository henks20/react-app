import * as React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card';
import Creator from '../Creator';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Icon from '../Icon';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.string.isRequired,
  }

  static defaultProps = {
    description: settings.defaultColumnIcon
  }

  state = {
    cards: this.props.cards || [],
  }

  addCard(title) {
    this.setState(prevState => ({
      cards: [
        ...prevState.cards,
        {
          key: prevState.cards.length ? prevState.cards[prevState.cards.length - 1].key + 1 : 0,
          title
        }
      ]
    })
    );
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}><Icon name={this.props.icon} /></span>
          {this.props.title}
        </h3>
        {this.state.cards.map(({ key, title }) => (
          <Card key={key} title={title} />
        ))}
        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    );
  }
}

Column.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Column;