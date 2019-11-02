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
        <div class="new-song-form">
          <p class="h5">Add a Song</p>
          <form>
            <div class="col">
              <div class="form-group row">
                <label class="control-label col-xs-2" for="new-song-name">Name</label>
                <input type="text" class="form-control col-xs-10" id="new-song-name"></input>
              </div>
              <div class="form-group row">
                <label class="control-label col-xs-2" for="new-song-artist">Artist</label>
                <input type="text" class="form-control col-xs-10" id="new-song-artist"></input>
              </div>
              <div class="form-group row">
                <label class="control-label col-xs-2" for="new-song-album">Album</label>
                <input type="text" class="form-control col-xs-10" id="new-song-album"></input>
              </div>
              <div class="form-group row">
                <label class="control-label col-xs-2" for="new-song-length">Length</label>
                <input type="text" class="form-control col-xs-10" id="new-song-length" placeholder="E.g. 4:53"></input>
              </div>
              <div class="form-group">
                <label class="control-label" for="new-song-rating">Rating</label>
                <div class="new-song-rating">
                  <div class="radio">
                    <label><input type="radio" name="new-song-rating"></input>
                      <FontAwesomeIcon icon={faStar} />
                    </label>
                  </div>
                  <div class="radio">
                    <label><input type="radio" name="new-song-rating"></input>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </label>
                  </div>
                  <div class="radio">
                    <label><input type="radio" name="new-song-rating"></input>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </label>
                  </div>
                  <div class="radio">
                    <label><input type="radio" name="new-song-rating"></input>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} /> 
                    </label>
                  </div>
                  <div class="radio">
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
              <div class="form-group row">
                <button type="submit" class="btn btn-success"><FontAwesomeIcon icon={faPlus}/> Add</button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}