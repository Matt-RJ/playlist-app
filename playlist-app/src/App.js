import React, {Component} from 'react';

// Components
import Header from './components/header';
import PlaylistCollection from './components/playlistcollection';
import samplePlaylistCollection from './sampleplaylistcollection';
import NewPlaylist from './components/newplaylist';

// Other
import localCache from "./localCache";
import * as api from './api';
import "./App.css";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			playlistCollection: null,
		}
		
		// Used for setting up child compoment props
		this.headerPlaylistCount = 0;
		this.headerSongCount = 0;
	}
	
	getPlaylistCount() {
		return this.state.playlistCollection.length;
	}
	
	getSongCount() {
		let playlistCount = this.state.playlistCollection.length;
		let totalSongs = 0;
		for (let i = 0; i < playlistCount; i++) {
			if (this.state.playlistCollection[i].songs !== undefined) {
				totalSongs += this.state.playlistCollection[i].songs.length;
			}
		}
		return totalSongs;
	}
	

	refresh = () => {
		this.setState({});
	}

	componentDidMount() {
		api.getAll().then(res => {
			console.log(res);
			this.setState({
				playlistCollection: res.playlistCollection,
			});
			console.log("This playlist collection: " + this.state.playlistCollection);
			this.headerPlaylistCount = 0;
			this.headerSongCount = 0;
			if (this.state.playlistCollection) {
				this.headerPlaylistCount = this.getPlaylistCount(this.state.playlistCollection);
				this.headerSongCount = this.getSongCount(this.state.playlistCollection);
			}
			this.refresh();
		});
	}
	
	render() {
		return (
			<div className="PlaylistApp">
				<div className="container-fluid col-md-8 bg-secondary p-2 rounded main-container">
					<Header 
						className="main-header"
						noPlaylists={this.headerPlaylistCount}
						noSongs={this.headerSongCount}
					/>
					<div className="col-md-12 playlist-collection-container">
						<NewPlaylist refresh={this.refresh} />
						<PlaylistCollection playlists = {this.state.playlistCollection} refresh={this.refresh}/>
						
					</div>
				</div>
			</div>
		);
	}
	
}

export default App;