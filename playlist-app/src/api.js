import axios from 'axios';

export const getAll = () => {
  return axios.get(`/api/playlists/`).then(res => res.data);
};

export const addPlaylist = (name) => {
  return axios.post('/api/playlists/').then(res => res.data);
};

export const getBiggestPlaylist = () => {
  return axios.get('/api/playlists/biggest').then(res => res.data);
}

export const getSmallestPlaylist = () => {
  return axios.get('/api/playlists/smallest').then(res => res.data);
}