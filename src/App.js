import { Component } from 'react';
import Fish from './entities/Fish'
import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log("State Initialized")
    this.state = {
      isFetching: false,
      fish: [],
      searchInput: '',
    }
  }
  componentDidMount(){
    console.log('Component Mounted')
    this.fetchAllFishHandler();
  }
    
  fetchAllFishHandler = async () => {
    this.setState(
      () => {return { isFetching: true}}
    );

    const res = await Fish.getAll()
    this.setState(
      () => {return { fish: res}},
    );
    
    this.setState(
      () => {return { isFetching: false}}
    );
  };

  searchFilterHandler = (e) => {
    const searchInput = e.target.value.toLowerCase()
    this.setState(() => {
      return { searchInput }
    })
  };
  render(){
    const { fish, searchInput } = this.state;
    const { searchFilterHandler } = this;
    
    const filteredFish = fish.filter((fish) => {
      return fish.name_en.toLowerCase().includes(searchInput);
    })
    return (
      <div className="App">
        <input 
          className='search-box'
          type='search'
          placeholder='search fish'
          onChange={searchFilterHandler}
        ></input>
        {
          filteredFish.map((fish) => {
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
