import _ from "lodash";

class StubAPI {
  constructor() {
    this.playlistCollection = [
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
  }

  getAll() {
    return this.playlistCollection;
  }

  addPlaylist(name, callback) {
    let id = 1;
    let songs=[];
    let last = _.last(this.playlistCollection);
    if (last){
      let lastId = last.id;
      id = ++lastId;
    }
    this.playlistCollection.push(
      {
        id,
        name,
        songs
      }
    );

    if (callback) callback();
  }

  deletePlaylist(id, callback) {
    let playlist = _.find(this.playlistCollection, {id: id});

    this.playlistCollection.splice(_.indexOf(this.playlistCollection,
     _.find(this.playlistCollection, {id: id})), 1);

    if (callback) callback();
  }

  addSong(playlistId, name, artist, album, length, rating, callback) {
    // TODO
    let playlist = _.find(this.playlistCollection, {id: playlistId});
    let newSongId = 1;
    let last = _.last(playlist);
    if (last) {
      let lastId = last.id;
      newSongId = ++ lastId;
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

    if (callback) callback();
  }

  deleteSong(playlistId, songId, callback) {
    let playlist = _.find(this.playlistCollection, {id: playlistId});
    let song = _.find(playlist, {id: songId});

    playlist.songs.splice(_.indexOf(playlist.songs,
     _.find(playlist.songs, {id: songId})), 1);
    if (callback) callback();
  }

  getBiggestPlaylist() {
    if (this.playlistCollection.length === 0) {
      return undefined;
    }

    let max = _.maxBy(this.playlistCollection,"songs");
    return max;
  }

  getSmallestPlaylist() {
    if (this.playlistCollection.length === 0) {
      return undefined;
    }
    let min = _.minBy(this.playlistCollection, "songs");
    return min;
  }

  getSongById(playlistId, songId, callback) {
    let playlist = _.find(this.playlistCollection, {id: playlistId});
    if (playlist === undefined) return undefined;
    let song = _.find(playlist.songs, {id: songId});
    return song;
  }

  getHighestRatedSong() {
    let playlists = this.playlistCollection;
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
  }

  getLowestRatedSong() {
    let playlists = this.playlistCollection;
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



export default new StubAPI();