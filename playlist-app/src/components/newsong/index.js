import React, {Component} from "react";
import "./newsong.css";
import "../../fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export default class NewSong extends Component {

  render() {
    
    return (
      <React.Fragment>
        <div className="new-song-form">
          <p className="h5">Add a Song</p>
          <form>
            <div className="col">
              <div className="form-group row">
                <label className="control-label col-xs-2" htmlFor="new-song-name">Name</label>
                <input type="text" className="form-control col-xs-10" id="new-song-name"></input>
              </div>
              <div className="form-group row">
                <label className="control-label col-xs-2" htmlFor="new-song-artist">Artist</label>
                <input type="text" className="form-control col-xs-10" id="new-song-artist"></input>
              </div>
              <div className="form-group row">
                <label className="control-label col-xs-2" htmlFor="new-song-album">Album</label>
                <input type="text" className="form-control col-xs-10" id="new-song-album"></input>
              </div>
              <div className="form-group row">
                <label className="control-label col-xs-2" htmlFor="new-song-length">Length</label>
                <input type="text" className="form-control col-xs-10" id="new-song-length" placeholder="E.g. 4:53"></input>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="new-song-rating">Rating</label>
                <div className="new-song-rating">
                  <div className="radio">
                    <label><input type="radio" name="new-song-rating"></input>
                      <FontAwesomeIcon icon={faStar} />
                    </label>
                  </div>
                  <div className="radio">
                    <label><input type="radio" name="new-song-rating"></input>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </label>
                  </div>
                  <div className="radio">
                    <label><input type="radio" name="new-song-rating"></input>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </label>
                  </div>
                  <div className="radio">
                    <label><input type="radio" name="new-song-rating"></input>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} /> 
                    </label>
                  </div>
                  <div className="radio">
                    <label><input type="radio" name="new-song-rating"></input>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </label>
                  </div>
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