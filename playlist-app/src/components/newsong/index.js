import React, {Component} from "react";
import "./newsong.css";
import "../../fontawesome";
import api from "../../dataStore/stubAPI.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export default class NewSong extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "name": "",
      "artist": "",
      "album": "",
      "length": "",
      "rating": ""
    }
  }

  handleNamechange = (event) => {
    this.setState({"name": event.target.value});
  }

  handleArtistChange = (event) => {
    this.setState({"artist": event.target.value});
  }

  handleAlbumChange = (event) => {
    this.setState({"album": event.target.value});
  }

  handleLengthChange = (event) => {
    this.setState({"length": event.target.value});
  }

  handleRatingChange(rating) {
    this.setState({"rating": rating});
  }

  createSong = (event) => {
    event.preventDefault();
    api.addSong(this.props.playlistId,
                this.state.name,
                this.state.artist,
                this.state.album,
                this.state.length,
                this.state.rating,
                ()=> {
      this.props.refresh();
    });
  }

  createStars(starCount) {
    let stars = new Array(starCount).fill(undefined).map(() => {
      return <FontAwesomeIcon icon={faStar} />;
    });
    return stars;
  }

  createRatingButton(ratingValue) {
    return (
      <div className="radio">
        <label>
          <input required={true} type="radio" name="new-song-rating" onClick={() => this.handleRatingChange(ratingValue)}></input>
          {this.createStars(ratingValue)}
        </label>
      </div>
    )
  }

  render() {
    
    return (
      <React.Fragment>
        <div className="new-song-form">
          <p className="h5">Add a Song</p>
          <form onSubmit={this.createSong}>
            <div className="col">
              <div className="form-group row">
                <label className="control-label col-xs-2" htmlFor="new-song-name">Name</label>
                <input required={true} type="text" className="form-control col-xs-10" id="new-song-name" onChange={this.handleNamechange}></input>
              </div>
              <div className="form-group row">
                <label className="control-label col-xs-2" htmlFor="new-song-artist">Artist</label>
                <input required={true} type="text" className="form-control col-xs-10" id="new-song-artist" onChange={this.handleArtistChange}></input>
              </div>
              <div className="form-group row">
                <label className="control-label col-xs-2" htmlFor="new-song-album">Album</label>
                <input required={true} type="text" className="form-control col-xs-10" id="new-song-album" onChange={this.handleAlbumChange}></input>
              </div>
              <div className="form-group row">
                <label className="control-label col-xs-2" htmlFor="new-song-length">Length</label>
                <input required={true} type="text" className="form-control col-xs-10" id="new-song-length" placeholder="E.g. 4:53" onChange={this.handleLengthChange}></input>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="new-song-rating">Rating</label>
                <div className="new-song-rating">
                  {this.createRatingButton(1)}
                  {this.createRatingButton(2)}
                  {this.createRatingButton(3)}
                  {this.createRatingButton(4)}
                  {this.createRatingButton(5)}
                </div>
              </div>
              <div className="form-group row">
                <button type="submit" className="btn btn-success"><FontAwesomeIcon icon={faPlus}/> Add</button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}