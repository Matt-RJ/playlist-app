import React, {Component} from "react";
import "./header.css";

class Header extends Component {

	render() {
		console.log(this.props);
		return (
			<div className="container-fluid">
				<div className="header">
					<div className="row">
						<div className="col-md main-title">
							<p className="h1">
								Playlist App
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md">
							<p className="h5">
								Total playlists: {this.props.noPlaylists}
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md">
							<p className="h5">
							Total songs: {this.props.noSongs}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;