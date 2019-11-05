import React, {Component} from "react";
import Song from "../song";
import NewSong from "../newsong";
import "./playlist.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

export default class Playlist extends Component {

  render() {

    let songsInPlaylist = null;
    let playlistName = "";
    let songCount = 0;
    if (this.props.songs !== undefined && this.props.songs !== null) {
      songsInPlaylist = this.props.songs.map(s => (
      <li className="list-group-item playlist border-0">
        {<Song song={s}/>}
      </li>
      ));
      songCount = this.props.songs.length;
    }
    if (this.props.name !== undefined && this.props.name !== null) {
      playlistName = this.props.name;
    }

    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="h5">Playlist name: {playlistName}</p>
            <p className="h6">Songs: {songCount}</p>
            <ul className ="list-group border-0">
            
              {songsInPlaylist}

              <li className="list-group-item border-0">
                <NewSong />
              </li>
              <li className="list-group-item border-0">
                <button type="button" className="btn btn-danger float-right">
                  <FontAwesomeIcon icon={faMinus} /> Delete Playlist '{playlistName}'
                </button>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}