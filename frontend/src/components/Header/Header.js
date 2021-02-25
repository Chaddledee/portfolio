import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './Header.css'

import Nav from '../Nav/Nav.js'

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<div className='container'>
					<h1 onClick={this.props.updateRotation}>
						<Link to='/'>
							charlie<br/>tanner
						</Link>
					</h1>
					<Nav updateRotation={this.props.updateRotation} id='nav' />
				</div>
			</header>
		)
	}
} 

export default Header;