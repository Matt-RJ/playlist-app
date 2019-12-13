import express from 'express';
//import stubAPI from './stubAPI';

import Playlist from './playlistsModel';
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';

const router = express.Router();

/*
Summary

/api/playlists/
GET - Get playlistcollection(all playlists) -
POST - Add a new playlist -

/api/playlists/:playlistId
GET - Get a playlist -
DELETE - Delete a playlist -

/api/playlists/:playlistId/song
GET - Get all songs of a playlist -
POST - Add a new song to a playlist -

/api/playlists/song/:songId
GET - Get a song
DELETE - Delete a song from a playlist -

/api/playlists/stats/biggestplaylist/
GET - Get biggest playlist

/api/playlists/stats/smallestplaylist/
GET - Get smallest playlist

/api/playlists/stats/bestsong/
GET - Get highest-rated song

/api/playlists/stats/worstsong/
GET - Get lowest-rated song

*/

// Get playlistCollection
router.get('/', async (req,res) => {
  try {
    let playlistCollection = await Playlist.find();
    console.log(playlistCollection);
    res.status(200).json(playlistCollection);
  } catch (error) {
    handleError(res, error.message);
  }
});

// Add a new playlist
router.post('/', asyncHandler(async (req,res) => {
  const newPlaylist = {
    "name": req.body.name
  }
  const playlist = await(Playlist.create(newPlaylist));
  res.status(201).json(playlist);
}));

// Get a playlist
router.get('/:playlistId', asyncHandler(async (req,res) => {
  const playlistId = req.params.playlistId;
  const playlist = await(Playlist.findById(req.params.playlistId));
  if (!playlist) return res.send(404);
  return res.status(200).send(playlist);
}));

// Delete a playlist
router.delete('/:playlistId', asyncHandler(async (req,res) => {
  const playlist = await Playlist.findById(req.params.playlistId);
  if (!playlist) return res.send(404);
  await playlist.remove();
  return res.status(204).send(playlist);
}));

// Get all songs of a playlist
router.get('/:playlistId/song', asyncHandler(async (req,res) => {
  const playlistId = req.params.playlistId;
  const playlist = await Playlist.findById(req.params.playlistId);
  if (!playlist) return res.status(404);
  return res.status(200).send(playlist.songs);
}));

// Create a new song in a playlist
router.post('/:playlistId/song', asyncHandler(async (req,res) => {
  let newsong = req.body.song;
  const song = await(Playlist.findOneAndUpdate({"_id": req.params.playlistId},{$push: {songs: newsong}}));
  res.status(201).json(song);
}));

// Get a song
router.get('/song/:songId', asyncHandler(async (req,res) => {
  const songId = req.params.songId;
  const song = await(Playlist.find({"songs._id": songId}));
  if (!song) return res.status(404);
  return res.status(200).send(song);
}));

// Delete a song
router.delete('/song/:songId', asyncHandler(async (req,res) => {
  const songId = req.params.songId;
  const song = await(Playlist.find({"songs._id": songId}));
  if (!song) return res.status(404);
  await song.remove();
  return res.status(204).send(song);
}));







// Get biggest playlist /api/playlists/stats/worstsong/
router.get('/stats/biggestplaylist', (req, res) => {
  let biggestPlaylist = stubAPI.getBiggestPlaylist();
  if (biggestPlaylist) {
    return res.status(200).send({biggestPlaylist: biggestPlaylist});
  }
  return res.status(400).send({message: "Unable to find Playlist"});
});

// Get smallest playlist
router.get('/stats/smallestplaylist', (req, res) => {
  let smallestPlaylist = stubAPI.getSmallestPlaylist();
  if (smallestPlaylist) {
    return res.status(200).send({smallestPlaylist: smallestPlaylist});
  }
  return res.status(400).send({message: "Unable to find Playlist"});
});

router.get('/stats/bestsong', (req,res) => {
  let bestSong = stubAPI.getHighestRatedSong();
  if (bestSong) {
    return res.status(200).send({bestSong: bestSong});
  }
  return res.status(400).send({message: "Unable to find Song"});
});

router.get('/stats/worstsong', (req,res) => {
  let worstSong = stubAPI.getLowestRatedSong();
  if (worstSong) {
    return res.status(200).send({worstSong: worstSong});
  }
  return res.status(400).send({message: "Unable to find Song"});
});

function handleError(res,err) {
  return res.send(500, err);
}

export default router;