import _ from 'lodash';

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
            "name": 'Another Sunny Day',
            "artist": 'JABBERLOOP',
            "album": 'New',
            "length": '4:02',
            "rating": '4'
          },
          {
            "id": 2,
            "name": 'Moanin\'',
            "artist": 'Mingus Big Band',
            "album": 'Nostalgia In Times Square',
            "length": '9:02',
            "rating": '4'
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
    console.log(last);
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

    console.log("Created a playlist named " + name);
    if (callback) callback();
  }

  deletePlaylist(id, callback) {
    let playlist = _.find(this.playlistCollection, {id: id});
    console.log("Playlist ID to delete: " + id);
    console.log("Playlist found: " + playlist);

    this.playlistCollection.splice(_.indexOf(this.playlistCollection,
     _.find(this.playlistCollection, {id: id})), 1);

    console.log(this.playlistCollection);

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
    console.log("Deleting song from playlist with id: " + playlistId + " and song id: " + songId);
    let playlist = _.find(this.playlistCollection, {id: playlistId});
    let song = _.find(playlist, {id: songId});

    playlist.songs.splice(_.indexOf(playlist.songs,
     _.find(playlist.songs, {id: songId})), 1);
    if (callback) callback();
  }
}



export default new StubAPI();