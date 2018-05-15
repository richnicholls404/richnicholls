import React from 'react';

import Component from './../../core/Component';

export default class extends Component {
	static id = 'portfolio';

	render() {
		return (
			<section className={this.className()}>
				<h2 className="d-none"><a name="portfolio" href="#portfolio">Portfolio</a></h2>

				<div className="container text-white">
					<div>
						<h2 className="mb-3">I decided to use this website as an example of some of my JavaScript code and practices</h2>
						<p>It is built using React, Bootstrap 4 and Sass.</p>
						<p>It is coded in ES2017 JavaScript, adhering to the airbnb eslint ruleset (with just a couple of rules overridden).</p>
						<p>It is transpiled and minified using Gulp and Babel.</p>
						<p>It is hosted using Google Cloud Functions (serverless, event-driven compute platform with automatic scaling).</p>
						<p>It has all of its source-code hosted on GitHub, so feel free to browse.</p>
						<p className="text-muted">And yes, it is totally over-engineered for what it is, but a good portfolio should be :)</p>
					</div>
				</div>
			</section>
		);
	}
}
