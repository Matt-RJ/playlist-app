import React, {Component} from "react";
import "./newplaylist.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default class NewPlaylist extends Component {

	render() {
		
		return (
			<React.Fragment>
				<div className="col-md-4 offset-4 new-playlist-form">
					<p className="h5">Create a new Playlist</p>
					<form>
						<div className="form-group row">
							<label className="control-label col-xs-2" htmlFor="new-playlist-name">Name</label>
							<input type="text" className="form-control col-xs-10" id="new-playlist-name" placeholder="E.g. Favourites"></input>
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