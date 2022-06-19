import { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { className, placeholder, onChangeHandler } = this.props;
 
    return (
      <input 
      className={ `search-box ${ className }`}
      type='search'
      placeholder={ placeholder }
      onChange={ onChangeHandler }
    ></input>
    )
  }
}

export default SearchBar;