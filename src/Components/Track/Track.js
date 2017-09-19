import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  //not complete vv step 45
  addTrack(track){
    /*this.props.track this.props.onAdd */
  }

  removeTrack(track){
    /*if (this.state.playlistTracks) {
      return
      this.setState({
        playlistTracks: playlistTracks
      });*/
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action" onClick={this.removeTrack}>-</a>
    }
      return <a className="Track-action" onClick={this.addTrack}>+</a>;
  }


  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action">{this.renderAction()}</a>
      </div>
    );
  }
}

export default Track;
