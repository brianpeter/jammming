import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {searchTerm: ''};

    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  handleTermChange(event) {

    this.setState({searchTerm: event.target.value});

  }

  handleEnterPress(event) {
    if(event.key === 'Enter'){
      this.search();
    };
  }

  search(){

    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (
      <div className="SearchBar" type='submit' >
        <input placeholder="Enter A Song, Album, or Artist" onChange = {this.handleTermChange} onKeyPress = {this.handleEnterPress}/>
        <a onClick = {this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
