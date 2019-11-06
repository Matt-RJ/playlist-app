import React, {Component} from "react";
import Playlist from "../playlist";
import "./playlistcollection.css";
import NewPlaylist from "../../components/newplaylist";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default class PlaylistCollection extends Component {

	constructor() {
		super();

		this.state = {
			playlists: [
				
			]
		};
	}

	render() {
		console.log(this.props)
		let allPlaylists = null;
		if (this.props.playlists !== undefined && this.props.playlists !== null) {
			allPlaylists = this.props.playlists.map(p => (
			<li className = "list-group-item">
				{<Playlist name = {p.name} songs = {p.songs} />}
			</li>
		));
		}
		
		return (
			<React.Fragment>
				<ul className="list-group playlist-collection">
					{allPlaylists}
				</ul>
			</React.Fragment>
		);
	}
}