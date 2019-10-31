import React from 'react';
import {storiesOf} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../src/components/header/';
import Song from '../src/components/song/';
import Playlist from '../src/components/playlist';

const sampleSong = {
	name: "Just Wait",
	artist: "The Reign of Kindo",
	album: "The Reign of Kindo EP",
	length: "4:32",
	rating: "4"
}

storiesOf("Playlist App/Header", module).add("default", () => (
	<Header
		noPlaylists={5}
		noSongs={35} />
));

storiesOf("Playlist App/Song", module).add("default", () => (
	<Song
		song = {sampleSong}
	/>
));

storiesOf("Playlist App/Playlist", module).add("default", () => {
	const sampleSongs = [sampleSong, sampleSong];
	return <Playlist name={"Favourites"} songs = {sampleSongs} />
});