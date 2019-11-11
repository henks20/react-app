import * as React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqContents } from '../../data/dataStore';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Faq extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    text1: PropTypes.node,
    text2: PropTypes.node,
    text3: PropTypes.node,
    text4: PropTypes.node,
  };

  static defaultProps = {
    title: faqContents.title,
    image: faqContents.image,
    text1: faqContents.data.text1,
    text2: faqContents.data.text2,
    text3: faqContents.data.text3,
    text4: faqContents.data.text4,
  };

  render() {
    const { title, image, text1, text2, text3, text4 } = this.props;
    return (
      <Container>
        <Hero titleText={title} image={image} />
        {title}
        {ReactHtmlParser(text1)}
        {ReactHtmlParser(text2)}
        {ReactHtmlParser(text3)}
        {ReactHtmlParser(text4)}
      </Container>
    );
  }
}



export default Faq;