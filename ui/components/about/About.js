import React from 'react';

import Component from './../../core/Component';

export default class extends Component {
	static id = 'about';

	static skills = [
		{ name: 'JavaScript', level: 100 },
		{ name: 'Bootstrap', level: 90 },
		{ name: 'React', level: 90 },
		{ name: 'Angular', level: 60 },
		{ name: 'Node.js', level: 70 },
		{ name: 'PHP7', level: 100 },
		{ name: 'Laravel', level: 80 },
		{ name: 'DevOps', level: 70 },
		{ name: 'Unit Testing', level: 80 },
		{ name: 'UI/UX', level: 80 },
	];

	render() {
		return (
			<section className={`${this.className()}`}>
				<h2 className="d-none"><a name="about" href="#about">About</a></h2>

				<div className="container">
					<div className="row">
						<div className="col-md-6 mb-4 text-center">
							<img src="/assets/me.jpg" className="img-fluid" alt="My beautiful face" style={{ borderRadius: '100%' }} />
						</div>
						<div className="col-md-6 mb-3">
							{this.constructor.skills.map(skill => (
								<div className="progress mb-2" key={skill.name}>
									<div className="progress-bar bg-secondary font-weight-bold" style={{ width: '33%' }}>{skill.name}</div>
									<div className="progress-bar bg-theme text-right" style={{ width: `${0.67 * skill.level}%` }}>
										{skill.level}%
									</div>
								</div>
							))}
						</div>
					</div>
					
					<p className="mt-4">
						I am currently working remotely as the lead developer for Showplans at Freeman Digital Ventures.
						I began working for Showplans in 2014 and have been the main architect, developer and designer,
						building through MVP to a full SaaS product that was acquired by Freeman in 2017.
					</p>
					<p>
						I am very enthusiastic when it comes to new situations and challenges,
						and am always willing to learn new skills, programming languages and frameworks.
					</p>
					<p>
						I graduated with a first class honours degree in Internet Technology
						from Anglia Ruskin University (ARU) in Cambridge in 2005
						and have been in full-time development positions ever since.
						I am also a certified Scrum Master and am comfortable working in an Agile environment.
					</p>
				</div>
			</section>
		);
	}
}
