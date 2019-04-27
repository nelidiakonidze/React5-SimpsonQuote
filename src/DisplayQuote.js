import React from 'react';

const fakeResponse = [
  {
   "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
   "character": "Nelson Muntz",
   "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   "characterDirection" : "Left"
  }
];

class DisplayQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
      quote: 'I hope I didn\'t brain my damage.',
      character: 'Homer Simpson'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const response = fakeResponse;
    const responseQuote = response[0];
    this.setState({
      image: responseQuote.image,
      quote: responseQuote.quote,
      character: responseQuote.character
    })
  }
  render () {
    return (
      <div>
        <img src={this.state.image}/>
        <h2>{this.state.quote}</h2>
        <p>{this.state.character}</p>
        <button onClick={this.handleClick}>Generate a Simpson's character!</button>
      </div>
    );
  }
}

export default DisplayQuote;
