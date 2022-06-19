import { Component } from 'react';
import './card.styles.css'

class Card extends Component {
  render() {
    const { className } = this.props
    const { name_jp, name_en } = this.props.fish

    return (
      <div className= {`card-container ${className}`}>
        <img src='temp_src' alt={`image of ${name_jp}`}/>
        <h1>{name_jp}</h1>
        <p>({name_en})</p>
      </div>
    )
  }
}

export default Card;