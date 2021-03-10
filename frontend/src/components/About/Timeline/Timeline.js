import React, {Component} from 'react';
import './Timeline.css';

class Timeline extends Component {
	render() {
		return (
			<div className="timeline">
				<div className="timeline-card">
					<div className='timeline-line timeline-start'></div>
					<div className='timeline-circle'></div>
					<div className='time-card-content'>
						<h4 className='timeline-date'>2020</h4>
						<h4 className='timeline-role'>Frontend developer</h4>
						<h3 className='timeline-employer'>Cocuro</h3>
						<p>Developed the frontend of a housing co-op management webapp using Vue.js with Vuex and Vue Router.</p>
					</div>
				</div>
				<div className="timeline-card">
					<div className='timeline-line'></div>
					<div className='timeline-circle'></div>
					<div className='time-card-content'>
						<h4 className='timeline-date'>2017-2019</h4>
						<h4 className='timeline-role'>DevQA</h4>
						<h3 className='timeline-employer'>Feral Interactive</h3>
						<p>Developed and maintained a set of crossplatform benchmark scripts in Python for the automated performance and stability testing of video games.</p>
					</div>
				</div>
				<div className="timeline-card">
					<div className='timeline-line'></div>
					<div className='timeline-circle'></div>
					<div className='time-card-content'>
						<h4 className='timeline-date'>2017</h4>
						<h4 className='timeline-role'>QA Engineer</h4>
						<h3 className='timeline-employer'>Feral Interactive</h3>
						<p>Tested video games on macOS, iOS and Linux, logging issues in Atlassian JIRA.</p>
					</div>
				</div>
				<div className="timeline-card">
					<div className='timeline-line timeline-end'></div>
					<div className='timeline-circle'></div>
					<div className='time-card-content'>
						<h4 className='timeline-date'>2016</h4>
						<h4 className='timeline-role'>QA Engineer</h4>
						<h3 className='timeline-employer'>Penny Black Studios</h3>
						<p>Tested a Playstation VR title (including certification testing), logging issues and recording footage for design reference and trailers.</p>
					</div>
				</div>
			</div> 
		)
	}
}

export default Timeline;