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
    console.log(this.playlistCollection);
  }

  addPlaylist(name, callback) {
    let id = 1;
    let songs=[];
    let last = _.last(this.playlistCollection).id;
    console.log(last);
    if (last) id = ++last;
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

  addSong(playlistId, name, artist, album, length, rating) {
    // TODO
    
  }
}



export default new StubAPI();