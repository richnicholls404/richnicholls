/* eslint-env browser */

import React from 'react';

import Component from './../../core/Component';

export default class extends Component {
	static id = 'nav';

	constructor(props) {
		super(props);

		this.state = {
			position: 'inline',
		};

		// subscribe to body event
		document.body.onscroll = e => this.onScroll(e);
	}

	onScroll() {
		const { top } = document.querySelector(`.${this.className()}`).getBoundingClientRect();
		const newPosition = top > 0 ? 'inline' : 'fixed';
		if (this.state.position !== newPosition) {
			this.setState({
				position: newPosition,
			});
		}
	}

	static scrollTo(e, selector) {
		if (document.querySelector) {
			document.querySelector(selector).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
		e.preventDefault();
	}

	render() {
		return (
			<div
				className={`
					${this.className()}
					${this.className(`--${this.state.position}`)}
					text-white
				`}
			>
				<div className={`${this.className('content')}`}>
					<div className={this.className('content__content-inner')}>
						<div className="container">
							<nav className="navbar navbar-expand-md">
								<a
									className="navbar-brand active"
									href="#home"
									onClick={e => this.constructor.scrollTo(e, '.home')}
								>
									Rich Nicholls
								</a>

								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
									<span className="navbar-toggler-icon" />
								</button>

								<div className="collapse navbar-collapse" id="navbarSupportedContent">
									<ul className="navbar-nav mr-auto">
										<li className="nav-item">
											<a
												className="nav-link"
												href="#about"
												onClick={e => this.constructor.scrollTo(e, '.about')}
											>
												About
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												href="#portfolio"
												onClick={e => this.constructor.scrollTo(e, '.portfolio')}
											>
												Portfolio
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												href="#contact"
												onClick={e => this.constructor.scrollTo(e, '.contact')}
											>
												Contact
											</a>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
