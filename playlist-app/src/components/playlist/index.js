import React, {Component} from "react";
import Song from "../song";
import "./playlist.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

export default class Playlist extends Component {

	render() {
		const songsInPlaylist = this.props.songs.map(s => (
			<li className="list-group-item playlist">
				{<Song song={s}/>}
			</li>
		));

		return (
			<React.Fragment>
				<div className="row justify-content-center">
					<div className="col-md-5">
						<p className="h5">Playlist name: {this.props.name}</p>
						<p class="h6">Songs: {this.props.songs.length}</p>
						<ul className ="list-group">
						
							{songsInPlaylist}

							<li className="list-group-item">
								<button type="button" className="btn btn-success">
									<FontAwesomeIcon icon={faPlus} /> Add Song
								</button>
							</li>
							<li className="list-group-item">
								<button type="button" className="btn btn-danger float-right">
									<FontAwesomeIcon icon={faMinus} /> Delete Playlist
								</button>
							</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		);
	}
}