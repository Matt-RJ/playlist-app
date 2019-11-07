import React, {Component} from "react";
import Song from "../song";
import NewSong from "../newsong";
import "./playlist.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import api from "../../dataStore/stubAPI.js";

export default class Playlist extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  deletePlaylist = (event) => {
    event.preventDefault();
    console.log("Deleting playlist with ID: " + this.props.id);
    api.deletePlaylist(this.props.id, () => {
      this.props.refresh();
    });

  }

  render() {

    let songsInPlaylist = null;
    let playlistName = "";
    let songCount = 0;
    if (this.props.songs !== undefined && this.props.songs !== null) {
      songsInPlaylist = this.props.songs.map(s => (
      <li className="list-group-item playlist border-0">
        {<Song song={s} playlistId={this.props.id} id={s.id} refresh={this.props.refresh}/>}
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
                <button type="submit" className="btn btn-danger float-right" onClick={this.deletePlaylist}>
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