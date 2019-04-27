import React from 'react';
import { Button } from 'reactstrap';

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
      <div className="simpsonfamily">
        <img className="photo" src={this.state.image}/>
        <h2 className="quote">{this.state.quote}</h2>
        <p className="character">{this.state.character}</p>
        <Button className ="button" outline color="danger" size="lg" onClick={this.handleClick}>Generate a Simpson's character!</Button>
      </div>
    );
  }
}

export default DisplayQuote;
