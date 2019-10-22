import React from 'react';
import styles from './List.scss';
import Hero from '../Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator';
import Container from '../Container/Container';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const { title, image, description, columns, addColumn } = this.props;
    return (
      <setion className={styles.component}>
        <Container>
          <Hero titleText={title} image={image} />
          {ReactHtmlParser(description)}
          <div className={styles.columns}>
            {columns.map(columndData => (
              <Column key={columndData.id} {...columndData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn} />
          </div>
        </Container>
      </setion>
    );
  }
}

export default List;
