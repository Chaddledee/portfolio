import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Album.css'

class Album extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image_list: null
		}
	}

	componentDidMount() {
		console.log(this.props)
		fetch("/api/album/"+ this.props.match.params.album_id)
			.then(response => {
				if (response.status > 400) {
					console.log("Couldn't grab image list.")
				}
				return response.json();
			})
			.then(data => {
				console.log(data)
				this.setState(() => {
					return { image_list: data };
				})
			})

	}

	render() {
		return (
			<div>
				<div className="gallery-flex-container">
				{
					this.state.image_list && this.state.image_list.map((image, i) => {
						return (
							<div key={i} className="gallery-flex-item">
								<div className="gallery-image-border">
									<Link to={"/photos/" + image.album + '/' + image.id}>
										<img className="gallery-image" src={image.thumbnail} alt={image.name} />
									</Link>
								</div>
							</div>
						)
					})
				}
				</div>
			</div>
		)
	}
} 

export default Album;