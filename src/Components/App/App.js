import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []

    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName (name){
    this.setState({playlistName: name});
  }

//not certain vv
  savePlaylist(){
    const trackURI = this.state.playlistTracks.map(playlistTrack => {return playlistTrack.uri;})
      Spotify.savePlaylist(this.state.playlistName, trackURI).then(() => {
        this.setState({
        playlistName : 'New Playlist',
        playlistTracks: []
      });
    });

  }

  search(searchTerm){
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">

          <SearchBar onSearch = {this.search}/>

          <div className="App-Playlist">

            <SearchResults searchResults = {this.state.searchResults} onAdd = {this.addTrack}/>

            <Playlist PlaylistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks} onRemove = {this.removeTrack}
            onNameChange = {this.updatePlaylistName} onSave = {this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
