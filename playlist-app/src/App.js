import React, {Component} from 'react';

// Components
import Header from './components/header';
import PlaylistCollection from './components/playlistcollection';
import samplePlaylistCollection from './sampleplaylistcollection';
import NewPlaylist from './components/newplaylist';

// Other
import localCache from "./localCache";
import request from "superagent";
import api from './dataStore/stubAPI';
import "./App.css";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}

		// Used for setting up child compoment props
		this.headerPlaylistCount = 0;
		this.headerSongCount = 0;
		this.playlistCollection = null;

	}

	getPlaylistCount(playlistCollection) {
		return playlistCollection.length;
	}

	getSongCount(playlistCollection) {
		let playlistCount = playlistCollection.length;
		let totalSongs = 0;
		for (let i = 0; i < playlistCount; i++) {
			if (playlistCollection[i].songs !== undefined) {
				totalSongs += playlistCollection[i].songs.length;
			}
		}
		return totalSongs;
	}

	prepareComponentData() {
		localCache.populate(api.getAll());
		this.newPlaylistCollection = localCache.getPlaylistCollection();
		this.headerPlaylistCount = 0;
		this.headerSongCount = 0;
		if (this.newPlaylistCollection !== null && this.newPlaylistCollection !== undefined) {
			this.headerPlaylistCount = this.getPlaylistCount(this.newPlaylistCollection);
			this.headerSongCount = this.getSongCount(this.newPlaylistCollection);
		}
	}

	refresh = () => {
		this.setState({});
	}

	render() {
		this.prepareComponentData();

		return (
			<div className="PlaylistApp">
				<div className="container-fluid col-md-8 bg-secondary p-2 rounded">
					<Header 
						className="main-header"
						noPlaylists={this.headerPlaylistCount}
						noSongs={this.headerSongCount}
					/>
					<div className="col-md-12 playlist-collection-container">
						<PlaylistCollection playlists = {this.newPlaylistCollection}/>
						<NewPlaylist refresh={this.refresh} />
					</div>
				</div>
			</div>
		);
	}
	
}

export default App;