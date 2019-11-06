import React, {Component} from 'react';

// Components
import Header from './components/header';
import PlaylistCollection from './components/playlistcollection';
import NewPlaylist from './components/newplaylist';
import samplePlaylistCollection from './sampleplaylistcollection';

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

	}

	/*
	componentDidMount() {
		request.get("http://localhost:3001/playlistCollection").end((err, res) => {
			if (res) {
				let playlistCollection = JSON.parse(res.text);
				console.log(playlistCollection);
				localCache.populate(playlistCollection);
				this.setState({});
			} else {
				console.log(err);
			}
		});
	}
	*/

	getPlaylistCount(playlistCollection) {
		console.log(playlistCollection);
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

	render() {
		localCache.populate(api.getAll());
		console.log("App render.");
		let newPlaylistCollection = localCache.getPlaylistCollection();
		let headerPlaylistCount = 0;
		let headerSongCount = 0;
		if (newPlaylistCollection !== null && newPlaylistCollection !== undefined) {
			headerPlaylistCount = this.getPlaylistCount(newPlaylistCollection);
			headerSongCount = this.getSongCount(newPlaylistCollection);
		}

		return (
			<div className="PlaylistApp">
				<div className="container-fluid col-md-8 bg-secondary p-2 rounded">
					<Header 
						className="main-header"
						noPlaylists={headerPlaylistCount}
						noSongs={headerSongCount}
					/>
					<div className="col-md-12 playlist-collection-container">
						<PlaylistCollection playlists = {newPlaylistCollection}/>
						<NewPlaylist />
					</div>
				</div>
			</div>
		);
	}
	
}

export default App;