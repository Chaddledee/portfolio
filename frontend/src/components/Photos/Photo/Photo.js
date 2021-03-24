import React, {Component} from 'react';

import './Photos.css';

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
		if (this.state.image) {
			return (
				<div className="photos-photo-container">
					<img className='photos-photo' src={this.state.image.image} alt={this.state.image.name} />
				</div>
			)
		} else {
			return (
				<div className="photos-photo-container">
					<h3>Loading...</h3>
				</div>
			)
		}
	}
} 

export default Photo;