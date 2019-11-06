import React, {Component} from "react";
import "./newplaylist.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import api from "../../dataStore/stubAPI.js";

export default class NewPlaylist extends Component {

	constructor(props) {
		super(props);
		this.state = {
			"name": "",
		}
	}

	// Updates the state of this component with whatever name is in the text box
	handleNameChange = (event) => {
		this.setState({name: event.target.value}, () => {
			console.log(this.state);
		});
	}

	createPlaylist = (event) => {
		console.log("CREATE PLAYLIST CLICKED")
		event.preventDefault(); // Stops Bootstrap from refreshing the page
		api.addPlaylist(this.state.name, () => {
			console.log(api.playlistCollection);
		});
	}

  render() {
    
    return (
      <React.Fragment>
        <div className="col-md-4 offset-4 new-playlist-form">
          <p className="h5">Create a new Playlist</p>
          <form onSubmit={this.createPlaylist}>
            <div className="form-group row">
              <label className="control-label col-xs-2" htmlFor="new-playlist-name">Name</label>
              <input type="text" className="form-control col-xs-10" id="new-playlist-name" placeholder="E.g. Favourites" onChange={this.handleNameChange}></input>
            </div>
            <div className="form-group row">
              <button type="submit" className="btn btn-success"><FontAwesomeIcon icon={faPlus} /> Create</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}