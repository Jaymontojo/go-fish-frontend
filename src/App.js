import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      fishData: [
        {
          name: 'Japanese Seabass',
          id: 1
        },
        {
          name: 'Japanese Whiting',
          id: 2
        },
        {
          name: 'Japanese Mackerel',
          id: 3
        },
        {
          name: 'Horse Mackerel',
          id: 4
        },
        {
          name: 'Red Seabream',
          id: 5
        },
        {
          name: 'Black Seabream',
          id: 6
        },
      ]
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.state.fishData.map((fish) => {
            return (
              <div key={fish.id}>
                <h1>{fish.name}</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
