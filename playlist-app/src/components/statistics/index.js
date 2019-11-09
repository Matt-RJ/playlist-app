import React, {Component} from 'react';
import {BrowserRouter, withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import api from '../../dataStore/stubAPI.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import './statistics.css';

class Statistics extends Component {
  
  constructor() {
    super();
  }
  
  getBiggestPlaylist() {
    let playlist = api.getBiggestPlaylist();
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

  getHighestRatedSong() {
    let highestRated = api.getHighestRatedSong();
    if (highestRated === undefined) return null;
    let highestRatedSong = api.getSongById(highestRated[0],highestRated[1]);
    return highestRatedSong;
  }

  getLowestRatedSong() {
    let lowestRated = api.getLowestRatedSong();
    if (lowestRated === undefined) return null;
    let lowestRatedSong = api.getSongById(lowestRated[0], lowestRated[1]);
    return lowestRatedSong;
  }
  
  
  render() {

    let biggestPlaylist = this.getBiggestPlaylist();
    let smallestPlaylist = this.getSmallestPlaylist();
    let highestRatedSong = this.getHighestRatedSong();
    let lowestRatedSong = this.getLowestRatedSong();

    let highestRatingMessage = (highestRatedSong !== undefined) ? "'"+highestRatedSong.name + "', with a rating of " + highestRatedSong.rating : "No songs";
    let lowestRatingMessage = (lowestRatedSong !== undefined) ? "'"+lowestRatedSong.name + "', with a rating of " + lowestRatedSong.rating : "No songs";

    return (
      <React.Fragment>
        <div className="stats-page">
          <div className="container-fluid col-md-8 bg-secondary p-2 rounded">
            <div className="row">
              <div className="col-md-12">
                <p className="h1">Statistics Page</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <table className="table table-dark">
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
                    <tr>
                      <td>
                        Highest rated song
                      </td>
                      <td>
                        {highestRatingMessage}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Lowest rated song
                      </td>
                      <td>
                        {lowestRatingMessage}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-12">
                <Link to="/">
                  <button className="btn btn-secondary">
                    <FontAwesomeIcon icon={faArrowLeft} /> Go Back
                  </button>
                </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Statistics);