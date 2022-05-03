import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class Nav extends Component {
	render() {
		let pathname = window.location.href;
		return (
			<div className="nav-component">
				<nav className="nav-bar">
					<ul className="navbar-nav">
						<Link to="home-component" spy={true} smooth={true} offset={0} duration={600}>
							<li className={pathname === 'https://www.matthewkaplan.dev/#home' ? 'active' : null}>HOME</li>
						</Link>
						<Link to="about-component" spy={true} smooth={true} offset={0} duration={600}>
							<li className={pathname === 'https://www.matthewkaplan.dev/#about' ? 'active' : null}>ABOUT</li>
						</Link>
						<Link to="projects-component" spy={true} smooth={true} offset={0} duration={600}>
							<li className={pathname === 'https://www.matthewkaplan.dev/#projects' ? 'active' : null}>PORTFOLIO</li>
						</Link>
					</ul>
				</nav>
			</div>
		);
	}
}
