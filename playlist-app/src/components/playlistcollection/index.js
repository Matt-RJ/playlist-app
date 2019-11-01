import React, {Component} from "react";
import Playlist from "../playlist";
import "./playlistcollection.css";

export default class PlaylistCollection extends Component {

	render() {
		const allPlaylists = this.props.playlists.map(p => (
			<li className = "list-group-item">
				{<Playlist name = {p.name} songs = {p.songs} />}
			</li>
		));
		
		return (
			<React.Fragment>
				<ul className="list-group">
					{allPlaylists}
				</ul>
				<button className="btn btn-success">Add new Playlist</button>
			</React.Fragment>
		);
	}
}