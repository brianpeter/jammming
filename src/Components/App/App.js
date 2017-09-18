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

    playlistName : 'My Playlist',

    playlistTracks : [
      {
        name:'blah blah',
        artist:'Hardwell',
        album:'blah blah'
      }
    ]
  }

    //this.searchYelp = this.searchYelp.bind(this);

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          
          <SearchBar />
          <div className="App-playlist">

            <SearchResults searchResults = {this.state.searchResults}/>

            <Playlist playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
