import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SongSchema = new Schema(
  {
    "name": String,
    "artist": String,
    "album": String,
    "length": String,
    "rating": String,
  }
);

const PlaylistSchema = new Schema(
  {
    "id": Number,
    "name": String,
    "songs": 
    [
      SongSchema
    ],
  }
);

export default mongoose.model('Playlist', PlaylistSchema);