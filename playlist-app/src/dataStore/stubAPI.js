import _ from 'lodash';

class StubAPI {
  constructor() {
    this.playlistCollection = [
      {
        "id": 1,
        "name": "TestPlaylist1",
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
        "name": "TestPlaylist2",
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

  addPlaylist(name) {
    let id = 0;
    let songs=[];
    let last = _.last(this.playlistcollection);
    if (last) {
      id = last.id++;
    }
    this.playlistCollection.push(
      {
        id,
        name,
        songs
      }
    );

    console.log("Created a playlist named " + name);
    console.log(this.playlistCollection);
  }

  addSong(playlistId, name, artist, album, length, rating) {
    // TODO
    
  }
}



export default new StubAPI();