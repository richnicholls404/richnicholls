import React from 'react';

import Component from './../../core/Component';
import Home from './../home/Home';
import Nav from './../nav/Nav';
import About from './../about/About';
import Portfolio from './../portfolio/Portfolio';
import Contact from './../contact/Contact';
import Footer from './../footer/Footer';

export default class App extends Component {
	static id = 'app';

	render() {
		return (
			<div className={`${this.className()} h-100`}>
				<Home />
				<Nav />
				<About />
				<Portfolio />
				<Contact />
				<Footer />
			</div>
		);
	}
}
