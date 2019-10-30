import React, {Component} from "react";
import "./song.css";

class Song extends Component {

	render() {
		return (
			<fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6 offset-3">
							<table className="table table-striped">
								<thead className="thead-dark">
									<tr>
										<th scope="col">Name</th>
										<th className="song-name" scope="col" >{this.props.name}</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Artist</td>
										<td className="artist-name">{this.props.artist}</td>
									</tr>
									<tr>
										<td>Album</td>
										<td className="album-name">{this.props.album}</td>
									</tr>
									<tr>
										<td>Length</td>
										<td className="song-length">{this.props.length}</td>
									</tr>
									<tr>
										<td>Rating</td>
										<td className="song-rating">{this.props.rating}/5</td>
									</tr>
								</tbody>
							</table>
							<button type="button" className="btn btn-danger float-right">
								<span class="glyphicon glyphicon-minus"></span>
							</button>
						</div>
					</div>
				</div>
			</fragment>
		);
	}
}

export default Song;