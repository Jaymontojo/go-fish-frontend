import { Component } from 'react';
import './search-bar.styles.css';

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