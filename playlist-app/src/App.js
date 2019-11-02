import React from 'react';
import Header from './components/header';
import Song from './components/song';
import Playlist from './components/playlist';
import PlaylistCollection from './components/playlistcollection';
import NewSong from './components/newsong';
import NewPlaylist from './components/newplaylist';
import samplePlaylistCollection from './sampleplaylistcollection';
import "./App.css";

function App() {

	function getPlaylistCount(playlistCollection) {
		return playlistCollection.playlists.length;
	}

	function getSongCount(playlistCollection) {
		let playlistCount = playlistCollection.playlists.length;
		let totalSongs = 0;
		for (let i = 0; i < playlistCount; i++) {
			totalSongs += playlistCollection.playlists[i].songs.length;
		}
		return totalSongs;
	}

	return (
		<div className="PlaylistApp">
			<div className="container col-md-8 bg-secondary p-2 rounded">
				<Header className="main-header" noPlaylists={getPlaylistCount(samplePlaylistCollection)} noSongs={getSongCount(samplePlaylistCollection)}/>
				<div className="col-md-12 playlist-collection-container">
					<PlaylistCollection playlists = {samplePlaylistCollection.playlists}/>
					<NewPlaylist />
				</div>
			</div>class
		</div>
	);
}

export default App;
