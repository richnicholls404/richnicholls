import React from 'react';

import Component from './../../core/Component';

export default class extends Component {
	static id = 'home';

	render() {
		return (
			<section className={`${this.className()} h-100 text-white`}>
				<a name="home" href="#home" />
				<div className="h-100 container d-flex flex-column justify-content-center">
					<h1 className="mb-3">Hello, I&rsquo;m <span className="text-theme">Rich Nicholls</span></h1>
					<p>I&rsquo;m a full stack web developer from the wilds of Wiltshire, England.</p>
					<p>I&rsquo;m also a certified SCRUM master :)</p>
				</div>
			</section>
		);
	}
}
