import axios from 'axios';

export const getAll = () => {
  return axios.get(`/api/playlists/`).then(res => res.data);
};

export const addPlaylist = (name) => {
  return axios.post('/api/playlists/', {name: name}).then(res => res.data);
};

export const getPlaylist = (playlistId) => {
  return axios.get(`/api/playlists/${playlistId}`).then(resp => resp.data);
};

export const deletePlaylist = (playlistId) => {
  return axios.delete(`api/playlists/${playlistId}`).then(resp => resp.data);
};

export const getPlaylistSongs = (playlistId) => {
  return axios.get(`api/playlists/${playlistId}/song`).then(resp => resp.data);
};

export const addSong = (playlistId, song) => {
  return axios.post(`/api/playlists/${playlistId}/song`, {song: song}).then(resp => resp.data);
};

export const getSong = (playlistId, songId) => {
  return axios.post(`/api/playlists/song/${songId}`).then(resp => resp.data);
};

export const deleteSong = (playlistId, songId) => {
  return axios.delete(`/api/playlists/song/${songId}`).then(resp => resp.data);
};

export const getBiggestPlaylist = () => {
  return axios.get('/api/playlists/stats/biggestplaylist').then(res => res.data);
};

export const getSmallestPlaylist = () => {
  return axios.get('/api/playlists/stats/smallestplaylist').then(res => res.data);
};

export const getHighestRatedSong = () => {
  return axios.get('/api/playlists/stats/bestsong').then(res => res.data);
};

export const getLowestRatedSong = () => {
  return axios.get('/api/playlists/stats/worstsong').then(res => res.data);
};