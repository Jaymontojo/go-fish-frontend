import { Component } from 'react';
import './card-list.styles.css'
import './card.styles.css'

class CardList extends Component {
  render() {
    const { className, listData } = this.props;
 
    return (
      <div className= {`card-list ${className}`}>
        {
          listData.map((fish) => {
            return (
              <div className='card-container' key={fish.id}>
                <h1>{fish.name_jp}</h1>
                <p>({fish.name_en})</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default CardList;