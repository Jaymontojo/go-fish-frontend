import { Component } from 'react';
import Fish from './entities/Fish'
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      isFetching: false,
      fishDataDB: [],
      searchValue: '',
    }
  }
  componentDidMount(){
    this.fetchAllFishHandler();
  }
    
  async fetchAllFishHandler() {
    this.setState(
      () => {return { isFetching: true}}
    );

    const fishData = await Fish.getAll()
    this.setState(
      () => {return { fishDataDB: fishData}},
    );
    
    this.setState(
      () => {return { isFetching: false}}
    );
  }

  filterDisplayedFish(value) {
    const results = this.state.fishDataDB.filter((fish) => {
      return fish.name_en.toLowerCase().includes(value);
    })
    this.setState(
      () => {return { fishDataDB: results}}
    );
  }

  render(){
    return (
      <div className="App">
        <input 
          className='search-box'
          type='search'
          placeholder='search fish'
          onChange={(e) => {
            this.filterDisplayedFish(e.target.value.toLowerCase())
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
