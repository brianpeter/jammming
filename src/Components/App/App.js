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
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  //not complete step 41 vv
  addTrack(track){
    /*if (this.state.playlistTracks) {
      return
      this.setState({
        playlistTracks: playlistTracks
      });*/
  }

  removeTrack(track){
    /*if (this.state.playlistTracks) {
      return
      this.setState({
        playlistTracks: playlistTracks
      });*/
  }

  //not complete step 57 vv
  updatePlaylistName (name){
    /*this.setState({
      playlist: playlist
    });*/
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">

          <SearchBar />

          <div className="App-playlist">

            <SearchResults searchResults = {this.state.searchResults} onAdd = {this.addTrack}/>

            <Playlist playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks} onRemove = {this.removeTrack} onNameChange = {this.updatePlaylistName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
