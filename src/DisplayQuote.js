import React from 'react';

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
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        const responseData = data[0];
        this.setState({
          image: responseData.image,
          quote: responseData.quote,
          character: responseData.character
        })
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
