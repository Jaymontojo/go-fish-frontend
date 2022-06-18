import { Component } from 'react';

class CardList extends Component {
  render() {
    const { className, listData } = this.props;
 
    return (
      <div className= {`card-list ${className}`}>
        {
          listData.map((fish) => {
            return (
              <div key={fish.id}>
                <h1>{fish.name_jp}({fish.name_en})</h1>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default CardList;