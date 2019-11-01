import React, {Component} from "react";
import Song from "../song";
import "./playlist.css";

export default class Playlist extends Component {

	render() {
		const songsInPlaylist = this.props.songs.map(s => (
			<li className="list-group-item playlist">
				{<Song song={s}/>}
			</li>
		));
		
		return (
			<fragment>
				<div className="row justify-content-center">
					<div className="col-md-5">
						<p className="h5">Playlist name: {this.props.name}</p>
						<p class="h6">Songs: {this.props.songs.length}</p>
						<ul className ="list-group">
						
							{songsInPlaylist}

							<li className="list-group-item">
								<button type="button" className="btn btn-success">
									Add Song
								</button>
							</li>
							<li className="list-group-item">
								<button type="button" className="btn btn-danger float-right">
									Delete Playlist
								</button>
							</li>
						</ul>
					</div>
				</div>
			</fragment>
		);
	}
}