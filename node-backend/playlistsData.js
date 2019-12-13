import playlistsModel from './api/playlists/playlistsModel';
import mongoose from 'mongoose';

const playlistCollection = [
  {
    "id": 1,
    "name": "Favourites",
    "songs": 
    [
      {
        "_id": mongoose.Types.ObjectId("5df35d1a9cc739e431ad952a"),
        "name": "Mustard Gas",
        "artist": "The Dear Hunter",
        "album": "Act III: Life and Death",
        "length": "4:13",
        "rating": "5"
      },
      {
        "_id": mongoose.Types.ObjectId("5df35d3eaebf4b75dfa4cea9"),
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
        "_id": mongoose.Types.ObjectId("5df35d411c12b07ef45dec3c"),
        "name": "Another Sunny Day",
        "artist": "JABBERLOOP",
        "album": "Sememoeru",
        "length": "4:02",
        "rating": "5"
      },
      {
        "_id": mongoose.Types.ObjectId("5df35d46b613ed694e545f0f"),
        "name": "Moanin'",
        "artist": "Mingus Big Band",
        "album": "Nostalgia In Times Square",
        "length": "9:02",
        "rating": "4"
      },
      {
        "_id": mongoose.Types.ObjectId("5df35d4e77548d3e4232b7cf"),
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
        "_id": mongoose.Types.ObjectId("5df35d533997fcb90bae8805"),
        "name": "Shallow Grave",
        "artist": "Matthew Santos",
        "album": "Quickly Disappearing",
        "length": "4:55",
        "rating": "3"
      }
    ]
  }
];

export default async function loadPlaylistCollection() {
  try {
    await playlistsModel.deleteMany();
    await playlistsModel.collection.insertMany(playlistCollection);
    console.info(`${playlistCollection.length} playlists have been stored successfully.`);
  }
  catch (err) {
    console.error(`failed to load playlistcollection data: ${err}`);
  }
}