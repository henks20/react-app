import * as React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card';
// import Creator from '../Creator';
import { settings } from '../../data/dataStore';
import Icon from '../Icon';

class Column extends React.Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
  }

  static defaultProps = {
    description: settings.defaultColumnIcon,
    icon: settings.defaultColumnIcon,
  }

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}><Icon name={icon} /></span>
          {title}
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} title={cardData.title} />
        ))}
        {/* <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div> */}
      </section>
    );
  }
}

export default Column;