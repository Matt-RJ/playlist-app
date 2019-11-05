class LocalCache {
  constructor() {
    this.playlistCollection = null;
  }

  getPlaylistCollection() {
    return this.playlistCollection;
  }

  populate(playlistCollection) {
    this.playlistCollection = playlistCollection;
  }
}
export default (new LocalCache() );