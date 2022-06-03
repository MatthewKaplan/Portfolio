import React, { FC, useState } from 'react';
import { Slides } from '../Slides/Slides';
import { AboutImages } from './AboutImages';
import { hobbyImages, hobbyNames, skillNames, skillIcons } from '../../helper/data';
import { Fade, Zoom } from "react-awesome-reveal";

export const About: FC = () => {
	const [bio, setBio] = useState(false);
	const [love, setLove] = useState(false);
	const [skills, setSkills] = useState(false);

	const handleCloseEvent = () => {
		setBio(false);
		setLove(false);
		setSkills(false);
	};

	return (
		<div className="about-component">
			{bio && <div className="bio-bg-color" />}
			{love && <div className="love-bg-color" />}
			{skills && <div className="skills-bg-color" />}
			{!bio && !love && !skills && (
				<>
					<div className="bg-color" />
					<div className="overlay" />
					<section className="about-imgs">
						<Fade direction="left" duration={2000}>
							<AboutImages setCategory={setBio} containerClass="fingerprint-container" titleOne="BIO" />
						</Fade>
						<Zoom duration={2000}>
							<AboutImages setCategory={setSkills} containerClass="brain-container" titleOne="SKI" titleTwo="LLS" />
						</Zoom>
						<Fade direction="right" duration={2000}>
							<AboutImages setCategory={setLove} containerClass="heart-container" titleOne="LOVE" />
						</Fade>
					</section>
				</ >
			)
			}
			{
				bio && (
					<section className="about-me-section">
						<article className="about-box">
							<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
								<img className="profile-picture" src={'https://i.imgur.com/8AF2NOa.jpg?1'} alt="profile" />
							</div>
							<div className="close-bio" onClick={() => setBio(false)} />
							<p>
								The dictionary describes an Astrophilia as a person who has a love of and/or obsession with planets, stars, and outer space. Growing up, I was exactly that, so much so that when it came time to decide on a college major, I didn't hesitate at all when choosing Astronomy. It was always a dream of mine to work in different astronomical observatories and planetariums all around the world, while carrying out important research.
							</p>
							<p>
								It wasn't until a friend of mine showed me a project that he was working on for his Data Structures course that instantly sparked an entirely new interest for me. It was then that I realized that programming calls to all of my passions; it incorporates creativity, problem-solving, and provides endless opportunities to learn. Following my very first semester, I switched majors to Computer Science and never looked back.
							</p>
							<p>
								Currently, I'm a Full Stack Engineer at Edible Arrangements working hard with my team as we're in the middle of a massive effort to replatform the entire eCommerce solution from the top down. Edible finally decided to move on from ASP.NET and VB.NET to the MERN stack utilizing programming languages and frameworks such as JavaScript, TypeScript, React, Redux, Node.JS, NestJS, SQL, and MongoDB. My position also provides me with the opportunity to work with tools that are new to me, such as Microsoft Azure, TestCafe, GraphDB, and Gremlin.
							</p>
							<p>
								I'll forever be enthusiastically jumping into any other programming languages, frameworks, or principles I can integrate into my tool belt so that I can continue to make the internet more captivating and optimized than ever.
							</p>
						</article>
					</section>
				)
			}
			{
				love && (
					<section className="love-section">
						<div className="slides">
							<Slides slideIcons={hobbyImages} slideIconNames={hobbyNames} closeSection={handleCloseEvent} />
						</div>
					</section>
				)
			}
			{
				skills && (
					<section className="love-section">
						<div className="slides">
							<Slides slideIcons={skillIcons} slideIconNames={skillNames} closeSection={handleCloseEvent} />
						</div>
					</section>
				)
			}
		</div >
	);
}
