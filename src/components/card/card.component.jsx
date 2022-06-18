import { Component } from 'react';


class Card extends Component {
  render() {
    const { className } = this.props
    const { name_jp, name_en } = this.props.fish
    
    return (
      <div className= {`card ${className}`}>
        <h1>{name_jp}</h1>
        <p>({name_en})</p>
      </div>
    )
  }
}

export default Card;