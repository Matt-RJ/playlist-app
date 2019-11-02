import React, {Component} from "react";
import Playlist from "../playlist";
import "./playlistcollection.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default class PlaylistCollection extends Component {

	render() {
		console.log(this.props);
		const allPlaylists = this.props.playlists.map(p => (
			<li className = "list-group-item">
				{<Playlist name = {p.name} songs = {p.songs} />}
			</li>
		));
		
		return (
			<React.Fragment>
				<ul className="list-group playlist-collection">
					{allPlaylists}
				</ul>
			</React.Fragment>
		);
	}
}