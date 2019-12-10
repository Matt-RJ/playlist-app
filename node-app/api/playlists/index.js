import express from 'express';
import stubAPI from './stubAPI';

const router = express.Router();

/*
Summary

/api/
GET - Get playlistcollection(all playlists)
POST - Add a new playlist

/api/:playlistId
GET - Get a playlist
DELETE - Delete a playlist

/api/:playlistId/song
GET - Get all songs of a playlist
POST - Add a new song to a playlist

/api/:playlistId/song/:songId
GET - Get a song from a playlist
DELETE - Delete a song from a playlist
*/

// Get playlistCollection
router.get('/', (req,res) => {
  const playlistCollection = stubAPI.getAll();
  res.send({playlistCollection: playlistCollection});
});

// Add a new playlist
router.post('/', (req,res) => {
  const newPlaylist = req.body;

  if (newPlaylist && stubAPI.addPlaylist(newPlaylist.name)) {
    return res.status(201).send({message: "Playlist created."});
  }
  return res.status(400).send({message: "Unable to find Playlist in request"});
});

// Get a playlist
router.get('/:playlistId', (req,res) => {
  const playlistId = req.params.playlistId;
  const playlist = stubAPI.getPlaylist(parseInt(playlistId));

  if (playlist) {
    return res.status(200).send(playlist);
  }
  else {
    return res.status(404).send({message: `Unable to find Playlist ${playlistId}`});
  }
});

// Delete a playlist
router.delete('/:playlistId', (req,res) => {
  const playlistId = req.params.playlistId;

  if (stubAPI.deletePlaylist(parseInt(playlistId))) {
    return res.status(200).send({message: `Deleted Playlist ${playlistId}`});
  }
  else {
    return res.status(404).send({message: `Unable to find Playlist ${playlistId}`});
  }

});

// Create a new song in a playlist
router.post('/:playlistId/song', (req,res) => {
  const newSong = req.body;
  const playlistId = req.params.playlistId;

  if (newSong && stubAPI.addSong(
    parseInt(playlistId),
    newSong.name,
    newSong.artist, 
    newSong.album, 
    newSong.length,
    newSong.rating)) 
  {
    return res.status(201).send({message: "Song created."});
  }
  else {
    return res.status(400).send({message: "Unable to find Song in request"});
  }
});

// Get all songs of a playlist
router.get('/:playlistId/song', (req,res) => {
  const playlistId = req.params.playlistId;
  const playlist = stubAPI.getPlaylist(parseInt(playlistId));

  if (playlist) {
    return res.status(200).send(playlist.songs);
  }
  else {
    return res.status(404).send({message: `Unable to find Playlist ${playlistId}`});
  }
});

// Get a specific song from a playlist
router.get('/:playlistId/song/:songId', (req,res) => {
  const playlistId = req.params.playlistId;
  const songId = req.params.songId;
  const song = stubAPI.getSong(parseInt(playlistId), parseInt(songId));

  if (song) {
    return res.status(200).send(song);
  }
  else {
    return res.status(404).send({message: `Unable to find Song`});
  }
});

// Delete a song from a playlist
router.delete('/:playlistId/song/:songId', (req,res) => {
  const playlistId = req.params.playlistId;
  const songId = req.params.songId;

  if (stubAPI.deleteSong(parseInt(playlistId), parseInt(songId))) {
    return res.status(200).send({message: `Deleted Song ${songId} in Playlist ${playlistId}`});
  }
  else {
    return res.status(404).send({message: `Unable to find Song`});
  }
});

export default router;