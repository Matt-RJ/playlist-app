import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import * as api from "../../api.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle, faHeadphones, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import './externallinks.css';

class ExternalLinks extends Component {

  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      "songFound": true,
    }
  }

  getSongInfo() {
    console.log("Getting song info");
    let playlistId = this.props.match.params.playlistid;
    let songId = this.props.match.params.songid;
    let song = api.getSong(songId, () => {
      console.log("song result");
      console.log(song);
      return song;
    });
  }

  getSongSpotifyLink(song) {

    let base = "http://open.spotify.com/search/";
    return base + song.artist.replace(" ", "%20") + "%20" + song.name.replace(" ","%20");
  }

  getSongYoutubeLink(song) {
    let base = "http://www.youtube.com/results?search_query=";
    return base + song.artist.replace(" ", "+") + "+" + song.name.replace(" ", "+");
  }

  backButton() {
    return (
      <Link to="/">
        <button className="btn btn-secondary">
          <FontAwesomeIcon icon={faArrowLeft} /> Go Back
        </button>
      </Link>
    );
  }

  render() {

    let backButton = this.backButton();

    let song = this.getSongInfo(() => {

    });
    if (!song) {
      return (
        <div className="external-links-page">
          <div className="container-fluid col-md-8 bg-secondary p-2 rounded">
            <p className="h1">This song could not be found.</p>
            <div className="col-md-12">
              {backButton}
            </div>
          </div>
        </div>
      );
    }

    let songName = (song) ? song.name : "Song not found";
    let songArtist = (song) ? " by " + song.artist : "";

    let spotifyLink = this.getSongSpotifyLink(song);
    let youtubeLink = this.getSongYoutubeLink(song);

    return (
      <React.Fragment>
        <div className="external-links-page">
          <div className="container-fluid col-md-8 bg-secondary p-2 rounded">
            <div className="row">
              <div className="col-md-12">
                <p className="h2">{songName  + songArtist}</p>
              </div>
            </div>
            <div className="text-center button-div">
              <div className="col-md-12">
                <a href={spotifyLink} rel="noopener noreferrer nofollow" target="_blank">
                  <button className="btn btn-success">
                    <FontAwesomeIcon icon={faHeadphones} /> Find '{songName}'' on Spotify
                  </button>
                </a>
              </div>
              <div className="col-md-12 button-div">
                <a href={youtubeLink} rel="noopener noreferrer nofollow" target="_blank">
                  <button className="btn btn-danger">
                    <FontAwesomeIcon icon={faPlayCircle} /> Find '{songName}'' on YouTube
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-12">
              {backButton}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(ExternalLinks);