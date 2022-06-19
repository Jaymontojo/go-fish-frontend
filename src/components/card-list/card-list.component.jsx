import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card/card.component'


class CardList extends Component {
  render() {
    const { className, listData } = this.props;
 
    return (
      <div className= {`card-list ${className}`}>
        {listData.map((fish) => {
            return <Card className= 'fish-card-container' fish = { fish }/>
        })}
      </div>
    )
  }
}

export default CardList;