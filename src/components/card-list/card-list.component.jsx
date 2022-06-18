import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card/card.component'


class CardList extends Component {
  render() {
    const { className, listData } = this.props;
 
    return (
      <div className= {`card-list ${className}`}>
        {
          listData.map((fish) => {
            return (
              <div key={fish.id}>
                <h1>{fish.name_jp}</h1>
                <p>({fish.name_en})</p>
              </div>
            )
          })
        }
        <Card className= 'fish-card'/>
      </div>
    )
  }
}

export default CardList;