import React from 'react';

import Component from './../../core/Component';

export default class extends Component {
	static id = 'home';

	render() {
		return (
			<section className={`${this.className()} h-100 text-white`}>
				<a name="home" href="#home" />

				<a href="https://github.com/richnicholls404/richnicholls">
					<img
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
							border: 0,
						}}
						src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
						alt="Fork me on GitHub"
						target="_blank"
					/>
				</a>

				<div className="h-100 container d-flex flex-column justify-content-center">
					<h1 className="mb-3">Hello, I&rsquo;m <span className="text-theme">Rich Nicholls</span></h1>
					<p>I&rsquo;m a full stack web developer from the wilds of Wiltshire, England.</p>
					<p>I&rsquo;m also a certified SCRUM master :)</p>
				</div>
			</section>
		);
	}
}
