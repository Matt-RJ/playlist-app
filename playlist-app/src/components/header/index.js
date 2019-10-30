import React, {Component} from "react";

class Header extends Component {


	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8 offset-4">
						<div className="header">
							<h1>
								Total playlists: 
								<span className="badge badge-pill badge-info">{this.props.noPlaylists}</span>
								Total songs:
								<span className="badge badge-pill badge-info">{this.props.noSongs}</span>
							</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;