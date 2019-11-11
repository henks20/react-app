import * as React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card';
import Creator from '../Creator';
import { settings } from '../../data/dataStore';
import Icon from '../Icon';

class Column extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    addCard: PropTypes.func,
    cards: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultColumnIcon,
    icon: settings.defaultColumnIcon,
  }

  render() {
    const { title, icon, cards, addCard } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}><Icon name={icon} /></span>
          {title}
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} title={cardData.title} />
        ))}
        <div>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;