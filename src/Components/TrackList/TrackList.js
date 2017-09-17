import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
          //You will add a map method that renders a set of Track components

          //step 34
          {this.props.tracks.map(track => {
            return <Track track = {track}/>
          })};
      </div>
    );
  }
}

export default TrackList;
