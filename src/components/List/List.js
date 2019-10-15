import React from 'react';
import styles from './List.scss';
import Hero from '../Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
// import Creator from '../Creator';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const { title, image, description, columns } = this.props;
    return (
      <setion className={styles.component}>
        <Hero titleText={title} image={image} />
        {ReactHtmlParser(description)}
        <div className={styles.columns}>
          {columns.map(columndData => (
            <Column key={columndData.id} {...columndData} />
          ))}
        </div>
        {/* <div className={styles.creator}> */}
        {/* Question action */}
        {/* <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
        </div> */}
      </setion>
    );
  }
}

export default List;
