import React from 'react';

import Component from './../../core/Component';

export default class extends Component {
	static id = 'footer';

	render() {
		return (
			<section className={this.className()}>
				<div className="container text-white text-center">
					<span>&copy;2018 Rich Nicholls</span>
				</div>
			</section>
		);
	}
}
