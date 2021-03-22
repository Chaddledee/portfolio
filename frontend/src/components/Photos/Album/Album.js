import React, {Component} from 'react';
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
					return { image_list: data.images };
				})
			})

	}

	render() {
		return (
			<div>
				<div className="gallery-flex-container">
				{
					this.state.image_list && this.state.image_list.map((image_url, i) => {
						return (
								<div key={i} className="gallery-flex-item">
									<div className="gallery-flex-inner">
										<img className="gallery-image" src={image_url} alt="" />	
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