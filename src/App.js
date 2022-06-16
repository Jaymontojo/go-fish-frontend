import { Component } from 'react';
// import {db} from './firestore/config';
// import {collection, getDocs } from 'firebase/firestore'
import Fish from './entities/Fish'
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      isFetching: false,
      fishDataDB: null,
      fishDataLocal: [
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
  componentDidMount(){
    this.fetchAllFishHandler();
  }
    
  async fetchAllFishHandler() {
    this.setState(
      () => {return { isFetching: true}},
    );

    const fishData = await Fish.getAll()
    this.setState(
      () => {return { fishDataDB: fishData}},
    );
    
    this.setState(
      () => {return { isFetching: false}},
    );
  }

  render(){
    return (
      <div className="App">
        {
          this.state.fishDataLocal.map((fish) => {
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
