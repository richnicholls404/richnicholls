import React from 'react';

import Component from './../../core/Component';

export default class extends Component {
	static id = 'contact';

	render() {
		return (
			<section className={this.className()}>
				<div className="display-4 text-white text-center">
					<a className="mr-5" href="https://www.linkedin.com/in/rich-nicholls-a77a414b/" rel="noopener noreferrer" target="_blank">
						<i className="fab fa-linkedin" />
					</a>
					<a href="https://twitter.com/richnicholls404" rel="noopener noreferrer" target="_blank">
						<i className="fab fa-twitter" />
					</a>
				</div>
			</section>
		);
	}
}
