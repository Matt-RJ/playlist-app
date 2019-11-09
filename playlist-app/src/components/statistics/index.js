import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import api from '../../dataStore/stubAPI.js'
import './statistics.css';

class Statistics extends Component {

  constructor() {
    super();
  }

  getBiggestPlaylist() {
    console.log("Statistics => getBiggestPlaylist()");
    let playlist = api.getBiggestPlaylist();
    console.log(playlist);
    if (playlist === undefined) {
      return (
        <React.Fragment>There are no playlists</React.Fragment>
      ); 
    }
    else {
      let songs = playlist.songs.length;
      let songString = (songs === 1) ? "song" : "songs"; 
      return (
        <React.Fragment>'{playlist.name}', with {songs} {songString} in it.</React.Fragment>
      );
    }
  }

  getSmallestPlaylist() {
    let playlist = api.getSmallestPlaylist();
    if (playlist === undefined) {
      return (
        <React.Fragment>There are no playlists</React.Fragment>
      );
    }
    else {
      let songs = playlist.songs.length
      let songString = (songs === 1) ? "song" : "songs";
      return (
        <React.Fragment>'{playlist.name}', with {songs} {songString} in it.</React.Fragment>
      );
    }
  }
  

  render() {

    let biggestPlaylist = this.getBiggestPlaylist();
    let smallestPlaylist = this.getSmallestPlaylist();

    return (
      <React.Fragment>
        <div className="stats-page">
          <div className="container-fluid col-md-8 bg-secondary p-2 rounded">
            <div className="row">
              <div className="col-md-12">
                <p className="h2">Statistics Page</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Biggest Playlist
                      </td>
                      <td>
                        {biggestPlaylist}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Smallest Playlist
                      </td>
                      <td>
                        {smallestPlaylist}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Statistics);