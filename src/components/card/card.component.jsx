import { Component } from 'react';


class Card extends Component {
  render() {
    const { className } = this.props
    return (
      <div className= {`card ${className}`}>
        <h1>Single Card</h1>
      </div>
    )
  }
}

export default Card;