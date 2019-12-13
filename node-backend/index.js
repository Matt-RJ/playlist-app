// Load the http module to create a HTTP server

import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import playlistsRouter from './api/playlists';
import './db';
import loadPlaylistCollection from './playlistsData';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/playlists', playlistsRouter);

app.use(express.static('public'));

if (process.env.seedDb) {
  loadPlaylistCollection();
}

app.listen(port, ()=> {
  console.info(`Server running at ${port}`);
});
