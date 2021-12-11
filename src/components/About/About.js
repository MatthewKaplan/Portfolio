import React, { Component } from 'react';
import Slides from '../Slides/Slides';
import { hobbyImages, hobbyNames, skillNames, skillIcons } from '../../helper/data';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default class About extends Component {
	state = { bio: false, love: false, skills: false };

	handleCloseEvent = () => {
		this.setState({
			bio: false,
			love: false,
			skills: false
		});
	};

	render () {
		const { bio, love, skills } = this.state;
		return (
			<div className="about-component">
				{bio && <div className="bio-bg-color" />}
				{love && <div className="love-bg-color" />}
				{skills && <div className="skills-bg-color" />}
				{bio === false &&
				love === false &&
				skills === false && (
					<React.Fragment>
						<div className="bg-color" />
						<div className="overlay" />
						<section className="about-imgs">
							<Fade left duration={2000}>
								<div className="fingerprint-container" onClick={() => this.setState({ bio: true })}>
									<div className="image">
										<span />
										<span />
										<span />
										<span />
									</div>
									<div className="content">
										<h1>BIO</h1>
									</div>
								</div>
							</Fade>
							<Zoom duration={2000}>
								<div className="brain-container" onClick={() => this.setState({ skills: true })}>
									<div className="image">
										<span />
										<span />
										<span />
										<span />
									</div>
									<div className="align-text">
										<div className="left-content">
											<h1>SKI</h1>
										</div>
										<div className="right-content">
											<h1>LLS</h1>
										</div>
									</div>
								</div>
							</Zoom>
							<Fade right duration={2000}>
								<div className="heart-container" onClick={() => this.setState({ love: true })}>
									<div className="image">
										<span />
										<span />
										<span />
										<span />
									</div>
									<div className="content">
										<h1>LOVE</h1>
									</div>
								</div>
							</Fade>
						</section>
					</React.Fragment>
				)}
				{bio && (
					<React.Fragment>
						<section className="about-me-section">
							<article className="about-box">
							<img className="profile-picture" src={'https://i.imgur.com/8AF2NOa.jpg?1'} alt="profile" />
								<div className="close-bio" onClick={() => this.setState({ bio: false })} />
								<p>
								The dictionary describes an Astrophilia as a person who has a love of and/or obsession with planets, stars, and outer space. Growing up, I was exactly that, so much so that when it came time to decide on a college major, I didn't hesitate at all when choosing Astronomy. It was always a dream of mine to work in different astronomical observatories and planetariums all around the world, while carrying out important research.
								</p>
								<p>
									It wasn't until a friend of mine showed me a project that he was working on for his Data Structures course that instantly sparked an entirely new interest for me. It was then that I realized that programming calls to all of my passions; it incorporates creativity, problem-solving, and provides endless opportunities to learn. Following my very first semester, I switched majors to Computer Science and never looked back.
								</p>
								<p>
									Currently, I'm an Associate Software Engineer at Edible Arrangements working hard with my team as we're in the middle of a massive effort to replatform the entire eCommerce solution from the top down. Edible finally decided to move on from ASP.NET and VB.NET to the MERN stack utilizing programming languages and frameworks such as JavaScript, TypeScript, React, Redux, Node.JS, NestJS, SQL, and MongoDB. My position also provides me with the opportunity to work with tools that are new to me, such as Microsoft Azure, TestCafe, GraphDB, and Gremlin.
								</p>
								<p>
									I'll forever be enthusiastically jumping into any other programming languages, frameworks, or principles I can integrate into my tool belt so that I can continue to make the internet more captivating and optimized than ever.
								</p>
							</article>
						</section>
					</React.Fragment>
				)}
				{love && (
					<section className="love-section">
						<div className="slides">
							<Slides icons={hobbyImages} iconNames={hobbyNames} handleCloseEvent={this.handleCloseEvent} />
						</div>
					</section>
				)}
				{skills && (
					<section className="love-section">
						<div className="slides">
							<Slides icons={skillIcons} iconNames={skillNames} handleCloseEvent={this.handleCloseEvent} />
						</div>
					</section>
				)}
			</div>
		);
	}
}
