import React from 'react';
import {storiesOf} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../src/components/header/';
import Song from '../src/components/song/';

storiesOf("Playlist App/Header", module).add("default", () => (
	<Header
		noPlaylists={5}
		noSongs={35} />
));

storiesOf("Playlist App/Song", module).add("default", () => (
	<Song
		name={"Just Wait"}
		artist={"The Reign of Kindo"}
		album={"The Reign of Kindo EP"}
		length={"4:32"}
		rating={"4"}
	/>
));