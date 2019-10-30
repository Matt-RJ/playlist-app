import React from 'react';
import {storiesOf} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../src/components/header/'

storiesOf("Playlist App/Header", module).add("default", () => (
	<Header noPlaylists={5} noSongs={35} />
));