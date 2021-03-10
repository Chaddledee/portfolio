import React, {Component} from 'react';
import Timeline from './Timeline/Timeline.js';
import './About.css';

class About extends Component {
	render() {
		return (
			<div className='about'>
				<div className='portrait-wrapper'>
					<div className='portrait'></div>
				</div>
				<div className='about-text'>
					<h2>Hi. I'm Charlie!</h2>
					<p>I'm a developer with several years Python experience under my belt. I have recently turned my focus towards web development.</p>
					<p>Here's a brief history of my professional experience...</p>
					<Timeline />
					<p>Some of the technologies I'm familiar with include...</p>
				</div>
				<div className='tech-flex'>
					<div className='tech-flex-item'>
						<div className='tech-flex-content'>
							<h3>Front-end</h3>
							<ul>
								<li>HTML</li>
								<li>CSS</li>
								<li>Javascript</li>
								<li>React</li>
								<li>Vue.js (inc. Vue Router, Vuex)</li>
							</ul>
						</div>
					</div>
					<div className='tech-flex-item'>
						<div className='tech-flex-content'>
							<h3>Back-end and Scripting</h3>
							<ul>
								<li>Python</li>
								<li>Django (inc. Django Rest Framework)</li>
								<li>MySQL</li>
								<li>Node.js</li>
								<li>Express.js</li>
							</ul>
						</div>
					</div>
					<div className='tech-flex-item'>
						<div className='tech-flex-content'>
							<h3>Tools</h3>
							<ul>
								<li>Git</li>
								<li>SVN</li>
								<li>npm/npx</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About;