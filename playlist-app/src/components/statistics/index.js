import React, {Component} from 'react';
import {BrowserRouter, withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import * as api from '../../api';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import './statistics.css';

class Statistics extends Component {
  
  constructor() {
    super();
  }
  
  getBiggestPlaylist() {
    api.getBiggestPlaylist().then(res => {
      let playlist = res.biggestPlaylist;
      console.log(playlist);
      if (!playlist) {
        return (
          <React.Fragment>There are no playlists</React.Fragment>
        ); 
      }
      else {
        console.log(playlist);
        let songs = playlist.songs.length;
        let songString = (songs === 1) ? "song" : "songs"; 
        return (
          <React.Fragment>'{playlist.name}', with {songs} {songString} in it.</React.Fragment>
        );
      }
    });
  }
  
  getSmallestPlaylist() {
    api.getSmallestPlaylist().then(res => {
      let playlist = res.smallestPlaylist;
      if (!playlist) {
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
    });
  }

  getHighestRatedSong() {
    api.getHighestRatedSong().then(res => {
      let highestRated = res.bestSong; 
      if (!highestRated) return null;
      let highestRatedSong = api.getSong(highestRated[0],highestRated[1]).then(res => {
        return res.highestRatedSong;
      });
    });
  }

  getLowestRatedSong() {
    api.getLowestRatedSong().then(res => {
      let lowestRated = res.worstSong;
      if (!lowestRated) return null;
      let lowestRatedSong = api.getSong(lowestRated[0], lowestRated[1]).then(res => {
        return res.lowestRatedSong;
      });
    });
  }

  prepareStats() {
    this.getBiggestPlaylist();
    this.getSmallestPlaylist();
    this.getHighestRatedSong();
    this.getLowestRatedSong();
  }

  componentDidMount() {
    this.prepareStats(() => {
      console.log("Done");
      this.setState({});
    });
  }
  
  
  render() {

    let biggestPlaylist = this.biggestPlaylist;
    let smallestPlaylist = this.smallestPlaylist;
    let highestRatedSong = this.highestRatedSong;
    let lowestRatedSong = this.lowestRatedSong;

    let highestRatingMessage = (highestRatedSong) ? "'"+highestRatedSong.name + "', with a rating of " + highestRatedSong.rating : "No songs";
    let lowestRatingMessage = (lowestRatedSong) ? "'"+lowestRatedSong.name + "', with a rating of " + lowestRatedSong.rating : "No songs";

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