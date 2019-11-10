import React from 'react';
import {storiesOf} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import {MemoryRouter, Route} from 'react-router';

import Header from '../src/components/header/';
import Song from '../src/components/song/';
import Playlist from '../src/components/playlist';
import PlaylistCollection from '../src/components/playlistcollection';
import NewPlaylist from '../src/components/newplaylist';
import NewSong from '../src/components/newsong';
import ExternalLinks from '../src/components/externallinks';

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

storiesOf("Playlist App/Header", module).add("default", () => (
	<Header noPlaylists={5} noSongs={35} />
));

storiesOf("Playlist App/Song", module)
.addDecorator(story => (
	<MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
)).add("default", () => (
	<Song
		song = {sampleSong}
	/>
));

storiesOf("Playlist App/Playlist", module)
.addDecorator(story => (
	<MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
)).add("default", () => {
	const sampleSongs = [sampleSong, sampleSong];
	return <Playlist name={"Favourites"} songs = {sampleSongs} />
});

storiesOf("Playlist App/PlaylistCollection", module)
.addDecorator(story => (
	<MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
)).add("default", () => {
	return <PlaylistCollection playlists = {samplePlaylistCollection.playlists} />
})

storiesOf("Playlist App/NewPlaylist", module).add("default", () => {
	return <NewPlaylist />
})

storiesOf("Playlist App/NewSong", module).add("default", () => {
	return <NewSong />
})

storiesOf("Playlist app/ExternalLinks", module)
.addDecorator(story => (
	<MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
)).add("default", () => {
	return <ExternalLinks />
})