import React, {Component} from 'react';
import './About.css';

class About extends Component {
	render() {
		return (
			<div className='about'>
				<div className='about-flex'>
					<div className='portrait about-flex-child'>
						<h2>IMAGE GOES HERE</h2>
					</div>
					<div className='about-text about-flex-child'>
						<h2>About Me</h2>
						<p>This is some sample text.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default About;