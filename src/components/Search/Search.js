import React from 'react';
import styles from './Search.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';

class Search extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
    countVisible: PropTypes.number,
    countAll: PropTypes.number,
  };

  static defaultProps = {
    text: settings.search.defaultText,
    icon: settings.search.icon,
  };

  state = {
    value: this.props.searchString || '',
  };

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleOK() {
    this.props.changeSearchString(this.state.value);
  }
  // Comment code: error:
  // 37:3  error  componentWillReceiveProps is deprecated since React 16.9.0, use UNSAFE_componentWillReceiveProps instead,
  // see https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops.
  // Use https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles to automatically update your components  react/no-deprecated

  // Musialem skomentowac bo wywalalo blad
  // componentWillReceiveProps(newProps) {
  //   this.setState({ value: newProps.searchString });
  // }

  render() {
    const { text, icon, countVisible, countAll } = this.props;
    const { value } = this.state;
    return (
      <div className={styles.component}>
        <Container>
          <input
            type='text'
            placeholder={text}
            value={value}
            onChange={event => this.handleChange(event)}
          />
          <div className={styles.buttons}>
            <Button onClick={() => this.handleOK()}>
              <Icon name={icon} />
            </Button>
          </div>
          <div>
            {countVisible == countAll ? '' : `${countVisible} / ${countAll}`}
          </div>
        </Container>
      </div>
    );
  }
}

export default Search;
