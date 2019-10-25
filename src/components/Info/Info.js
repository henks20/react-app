import * as React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoContents } from '../../data/dataStore';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Info extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    text1: PropTypes.node,
    text2: PropTypes.node,
  };

  static defaultProps = {
    title: infoContents.title,
    image: infoContents.image,
    text1: infoContents.data.text1,
    text2: infoContents.data.text2,
  };

  render() {
    const { title, image, text1, text2 } = this.props;
    return (
      <Container>
        <Hero titleText={title} image={image} />
        {title}
        {ReactHtmlParser(text1)}
        {ReactHtmlParser(text2)}
      </Container>
    );
  }
}

export default Info;