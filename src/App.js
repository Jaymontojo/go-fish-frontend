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
      fishDataDB: []
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
      () => {console.log(this.state.fishDataDB)}
    );
    
    this.setState(
      () => {return { isFetching: false}},
    );
  }

  render(){
    return (
      <div className="App">
        <input 
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(e) => {
            console.log("...typing")
          }}
        ></input>
        {
          this.state.fishDataDB.map((fish) => {
            return (
              <div key={fish.id}>
                <h1>{fish.name_jp}({fish.name_en})</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
