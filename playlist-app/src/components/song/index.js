import React, {Component} from "react";
import "./song.css";
import {Link} from 'react-router-dom';
import api from "../../dataStore/stubAPI.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faStar, faSearch} from "@fortawesome/free-solid-svg-icons";

export default class Song extends Component {

  constructor(props) {
    super(props);
  }

  deleteSong = (event) => {
    api.deleteSong(this.props.playlistId, this.props.id, () => {
      this.props.refresh();
    });
  }

  createStars(starCount) {
    let stars = new Array(parseInt(starCount)).fill(undefined).map(() => {
      return <FontAwesomeIcon className="song-star" icon={faStar} />;
    });
    return stars;
  }

  render() {
    
    return (
      <React.Fragment>
        <div className="container-fluid">
            <div className="col">
              <div className="row">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th className="song-name" scope="col" >{this.props.song.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Artist</td>
                      <td className="artist-name">{this.props.song.artist}</td>
                    </tr>
                    <tr>
                      <td>Album</td>
                      <td className="album-name">{this.props.song.album}</td>
                    </tr>
                    <tr>
                      <td>Length</td>
                      <td className="song-length">{this.props.song.length}</td>
                    </tr>
                    <tr>
                      <td>Rating</td>
                      <td className="song-rating-stars">{this.createStars(this.props.song.rating)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Link to={"external/playlist-" + this.props.playlistId + "/song-" + this.props.id}>
                <button type="button" className="btn btn-info">
                  <FontAwesomeIcon icon={faSearch} /> Search for this song
                </button>
              </Link>
              <button type="button" className="btn btn-danger float-right" onClick={this.deleteSong}>
                <FontAwesomeIcon icon={faMinus} /> Delete
              </button>
            </div>
          </div>
      </React.Fragment>
    );
  }
}