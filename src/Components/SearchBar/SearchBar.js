import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {searchTerm: ''};

    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleTermChange(event) {
    this.setState({searchTerm: event.target.value});

  }

  search(){
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (
      <form className="SearchBar" type='submit' onSubmit = {this.search} onChange = {this.handleTermChange} >
        <input placeholder="Enter A Song, Album, or Artist"/>
        <a onClick = {this.search}>SEARCH</a>
      </form>
    );
  }
}

export default SearchBar;
