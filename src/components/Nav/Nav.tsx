import React, { FC } from 'react';
import { Link } from 'react-scroll';

export const Nav: FC = () => {
	let pathname = window.location.href;
	return (
		<div className="nav-component">
			<nav className="nav-bar">
				<ul className="navbar-nav">
					<Link to="home-component" spy={true} smooth={true} offset={0} duration={600}>
						<li className={pathname === 'https://www.matthewkaplan.dev/#home' ? 'active' : undefined}>HOME</li>
					</Link>
					<Link to="about-component" spy={true} smooth={true} offset={0} duration={600}>
						<li className={pathname === 'https://www.matthewkaplan.dev/#about' ? 'active' : undefined}>ABOUT</li>
					</Link>
					<Link to="projects-component" spy={true} smooth={true} offset={0} duration={600}>
						<li className={pathname === 'https://www.matthewkaplan.dev/#projects' ? 'active' : undefined}>PORTFOLIO</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
}
