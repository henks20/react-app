import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsWithSearchValue } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchValue = props.match.params.value;
  return {
    cards: getCardsWithSearchValue(state, searchValue),
  };
};

export default connect(mapStateToProps)(SearchResults);