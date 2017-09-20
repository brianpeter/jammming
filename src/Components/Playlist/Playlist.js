import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
  constructor(props) {
    super(props);

    // instructions step 60 says onNameChange but perhaps should be handleNameChange?
     this.handleNameChange = this.handleNameChange.bind(this);
  }


  // step 59
  handleNameChange (event) {
    this.props.onNameChange(event.target.value);
  }


  render() {
    return (
      <div className="Playlist">
        <input defaultValue = {'New Playlist'} onChange = {this.handleNameChange}/>
        {/*//Add a TrackList component*/}
        <TrackList tracks = {this.props.playlistTracks} onRemove = {this.props.onRemove} />
        <a className="Playlist-save" onClick = {this.props.onSave} >SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
