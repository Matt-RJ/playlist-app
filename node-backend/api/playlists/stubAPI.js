import _ from "lodash";

const playlistCollection = [
  {
    "id": 1,
    "name": "Favourites",
    "songs": 
    [
      {
        "id": 1,
        "name": "Just Wait",
        "artist": "The Reign of Kindo",
        "album": "The Reign of Kindo EP",
        "length": "4:32",
        "rating": "5"
      },
      {
        "id": 2,
        "name": "The Revival",
        "artist": "The Dear Hunter",
        "album": "Act V: Hymns with the Devil in Confessional",
        "length": "5:01",
        "rating": "4"
      }
    ]
  },
  {
    "id": 2,
    "name": "Jazz",
    "songs": 
    [
      {
        "id": 1,
        "name": "Another Sunny Day",
        "artist": "JABBERLOOP",
        "album": "Sememoeru",
        "length": "4:02",
        "rating": "5"
      },
      {
        "id": 2,
        "name": "Moanin'",
        "artist": "Mingus Big Band",
        "album": "Nostalgia In Times Square",
        "length": "9:02",
        "rating": "4"
      },
      {
        "id": 3,
        "name": "Minor Swing",
        "artist": "Django Reinhardt",
        "album": "Djangologie Vol 6 / 1937",
        "length": "3:17",
        "rating": "5"
      }
    ]
  },
  {
    "id": 3,
    "name": "Other",
    "songs":
    [
      {
        "id": 1,
        "name": "Shallow Grave",
        "artist": "Matthew Santos",
        "album": "Quickly Disappearing",
        "length": "4:55",
        "rating": "3"
      }
    ]
  }
]

const stubAPI = {

  getAll: () => {
    return playlistCollection;
  },

  addPlaylist: (name) => {
    console.log("New playlist name: " + name);
    if (!name) return false;
    let id = 1;
    let songs=[];
    let last = _.last(playlistCollection);
    if (last){
      let lastId = last.id;
      id = ++lastId;
    }
    playlistCollection.push(
      {
        id,
        name,
        songs
      }
    );
    return true;
  },

  getPlaylist: (id) => {
    console.log(_.find(playlistCollection, {id: id}));
    return _.find(playlistCollection, {id: id});
  },

  deletePlaylist: (id) => {
    let playlist = _.find(playlistCollection, {id: id});
    if (!id) return false;
    if (playlist === null || playlist === undefined) return false;
    playlistCollection.splice(_.indexOf(playlistCollection,
     _.find(playlistCollection, {id: id})), 1);

    return true;
  },

  addSong: (playlistId, name, artist, album, length, rating) => {
    //if (!playlistId || !name || !artist || !album || !length || !rating) return false;
    let playlist = _.find(playlistCollection, {id: playlistId});
    console.log(playlist);
    if (!playlist) return false;
    let newSongId = 1;
    let last = _.last(playlist);
    if (last) {
      let lastId = last.id;
      newSongId = ++lastId;
    }
    let song = {
      "id": newSongId,
      "name": name,
      "artist": artist,
      "album": album,
      "length": length,
      "rating": rating
    }

    playlist.songs.push(song);
    return true;
  },

  getSong: (playlistId, songId) => {
    let playlist = _.find(playlistCollection, {id: playlistId});
    let song = _.find(playlist.songs, {id: songId});
    return song;
  },

  deleteSong: (playlistId, songId) => {
    if (!playlistId || !songId) return false;
    let playlist = _.find(playlistCollection, {id: playlistId});
    let song = _.find(playlist.songs, {id: songId});
    if (!song) return false;

    playlist.songs.splice(_.indexOf(playlist.songs,
     _.find(playlist.songs, {id: songId})), 1);
    return true;
  },

  getBiggestPlaylist: () => {
    if (playlistCollection.length === 0) {
      return undefined;
    }

    let max = _.maxBy(playlistCollection,"songs");
    return max;
  },

  getSmallestPlaylist: () => {
    if (playlistCollection.length === 0) {
      return undefined;
    }
    let min = _.minBy(playlistCollection, "songs");
    console.log("min": min);
    return min;
  },

  getSongById: (playlistId, songId) => {
    let playlist = _.find(playlistCollection, {id: playlistId});
    if (playlist === undefined) return undefined;
    let song = _.find(playlist.songs, {id: songId});
    return song;
  },

  getHighestRatedSong: () => {
    let playlists = playlistCollection;
    let highestPlaylistId = 0;
    let highestSongId = 0;
    let highestRating = 0;
    for (let i = 0; i < playlists.length; i++) {
      for (let j = 0; j < playlists[i].songs.length; j++) {
        let currentSong = playlists[i].songs[j];
        if (currentSong.rating > highestRating) {
          highestRating = parseInt(currentSong.rating);
          highestPlaylistId = playlists[i].id;
          highestSongId = currentSong.id;
        }
      }
    }
    return [highestPlaylistId, highestSongId];
  },

  getLowestRatedSong: () => {
    let playlists = playlistCollection;
    let lowestPlaylistId = 0;
    let lowestSongId = 0;
    let lowestRating = 6;
    for (let i = 0; i < playlists.length; i++) {
      for (let j = 0; j < playlists[i].songs.length; j++) {
        let currentSong = playlists[i].songs[j];
        if (currentSong.rating < lowestRating) {
          lowestRating = parseInt(currentSong.rating);
          lowestPlaylistId = playlists[i].id;
          lowestSongId = currentSong.id;
        }
      }
    }
    return [lowestPlaylistId, lowestSongId];
  }

}



export default stubAPI;