import React, {Component} from "react";
import "./newplaylist.css";

export default class NewPlaylist extends Component {

	render() {
		
		return (
			<React.Fragment>
				<div class="new-playlist-form">
					<p class="h5">Create a new Playlist</p>
					<form>
						<div class="form-group row">
							<label class="control-label col-xs-2" for="new-playlist-name">Name</label>
							<input type="text" class="form-control col-xs-10" id="new-playlist-name" placeholder="E.g. Favourites"></input>
						</div>
						<div class="form-group row">
							<button type="submit" class="btn btn-success">Create</button>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}