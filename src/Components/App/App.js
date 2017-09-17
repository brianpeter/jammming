import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    searchResults: [
      {
        name:'blah',
        artist:'Hardwell',
        album:'blah'
      },
    ],
  }

    //this.searchYelp = this.searchYelp.bind(this);

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          //Add a SearchBar component
          <SearchBar />
          <div className="App-playlist">
            //Add a SearchResults component
            <SearchResults searchResults = {this.state.searchResults}/>
            //Add a Playlist component
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
