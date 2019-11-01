import React from 'react';
import Header from './components/header';
import Song from './components/song';
import Playlist from './components/playlist';
import PlaylistCollection from './components/playlistcollection';

function App() {
	return (
		<div className="App">
			<div className="container bg-secondary p-4 rounded">
				<Header noPlaylists={2} noSongs={5}/>
				<div className="col">
				
				</div>
			</div>
		</div>
	);
}

export default App;
