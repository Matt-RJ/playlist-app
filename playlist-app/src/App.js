import React from 'react';
import Header from './components/header';
import Song from './components/song';
import Playlist from './components/playlist';
import PlaylistCollection from './components/playlistcollection';
import NewSong from './components/newsong';
import NewPlaylist from './components/newplaylist';
import "./App.css";

function App() {

	const sampleSong = {
		name: "Just Wait",
		artist: "The Reign of Kindo",
		album: "The Reign of Kindo EP",
		length: "4:32",
		rating: "4"
	}

	const samplePlaylist = {
		name: "Favourites",
		songs: [sampleSong, sampleSong]
	}

	const samplePlaylistCollection = {
		playlists: [samplePlaylist, samplePlaylist]
	}

	return (
		<div className="PlaylistApp">
			<div className="container col-md-8 bg-secondary p-2 rounded">
				<Header className="main-header" noPlaylists={2} noSongs={5}/>
				<div className="col-md-12 playlist-collection-container">
					<PlaylistCollection playlists ={samplePlaylistCollection.playlists}/>
					<NewPlaylist />
				</div>
			</div>class
		</div>
	);
}

export default App;
