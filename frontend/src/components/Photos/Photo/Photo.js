import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './Photo.css';

class Photo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: null
		}
	}

	componentDidMount() {
		let params = this.props.match.params
		fetch("/api/image/" + params.image_id)
			.then(response => {
				if (response.status > 400) {
					console.log("Couldn't grab image.")
				}
				return response.json();
			})
			.then(data => {
				console.log(data)
				this.setState(() => {
					return { image: data };
				})
			})
	}

	render() {
		return (
			<div>
				<div className='in-page-nav'>
					<Link to={'/photos/' + this.props.match.params.album_id}>
						<h4>Return to album</h4>
					</Link>
				</div>
				<div>
				{
					this.state.image ?
					<div className="photos-photo-container">
						<Link to={this.state.image.album}></Link>
						<img className='photos-photo' src={this.state.image.image} alt={this.state.image.name} />
					</div>:
					<div className="photos-photo-container">
						<h3>Loading...</h3>
					</div>
				}
				</div>
			</div>
		)
	}
} 

export default Photo;