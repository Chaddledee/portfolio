import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './Photos.css'

class Photos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			albums: null
		}
	}

	componentDidMount() {
		fetch("api/album")
			.then(response => {
				if (response.status > 400) {
					console.log("Couldn't grab albums.")
				}
				return response.json();
			})
			.then(data => {
				return this.setState(() => {
					return { albums: data };
				})
			})

	}

	render() {
		return (
			<div className="albums-flex-container">
				{
					this.state.albums && this.state.albums.map((album, i) => {
						return (
							<div className="albums-flex-album" key={i}>
								<img src={'/media/photos/' + album.location + '/' + album.thumbnail} alt="" />
								<div className="albums-flex-album-text">
									<h3><Link to={"/photos/" + album.id}>{album.name}</Link></h3>
									<h5>{album.description}</h5>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
} 

export default Photos;