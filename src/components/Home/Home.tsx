import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Pdf from '../../assets/Matthew_Kaplan_2022CV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars, Html } from 'drei';

export const Home: FC = () => {
	const [isNotCopied, setIsNotCopied] = useState(true);

	const setIsCopied = () => {
		setIsNotCopied(false)
		setTimeout(() => setIsNotCopied(true), 1500)
	}

	const openPdf = () => {
		window.open(Pdf);
		return false;
	}

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])

	return (
		<div className="home-component">
			<div className="overlay" />
			<img className="bg-image" src='https://i.imgur.com/C2j7bjD.jpg' alt="Denver Front Range" />
			<Canvas>
				<OrbitControls minAzimuthAngle={0} maxAzimuthAngle={0} maxPolarAngle={0} autoRotate autoRotateSpeed={0.25} enableZoom={false} />
				<Stars
					radius={85}
					depth={150}
					count={5000}
					factor={9}
					saturation={0}
					fade
				/>
				<Html center>
					<section>
						<div className="intro">
							<h1 className="name">Matthew Kaplan</h1>
							<p className="position">Software Engineer</p>
							<div className="logo-container">
								<a href="https://www.linkedin.com/in/kaplan-matthew/" target="blank">
									<FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" size="2x" />
								</a>
								<a href="https://github.com/MatthewKaplan" target="blank">
									<FontAwesomeIcon icon={faGithub} className="github-icon" size="2x" />
								</a>
								<div onClick={() => openPdf()}>
									<img src='https://i.imgur.com/wGi4VFM.png' alt="resume icon" className="resume-icon" />
								</div>
								<CopyToClipboard
									onCopy={() => setIsCopied()}
									text={'Kaplan.Matthew.P@gmail.com'}
								>
									<FontAwesomeIcon icon={faEnvelope} className="envelope-icon" size="2x" />
								</CopyToClipboard>
							</div>
						</div>
						<div className={isNotCopied === true ? 'isCopied inactive' : 'isCopied active'}>Email Copied to Clipboard</div>
					</section>
				</Html>
			</Canvas>
			<Link to="about-component" spy={true} smooth={true} offset={0} duration={600}>
				<div className="scroll-down">
					<FontAwesomeIcon icon={faChevronDown} className="scroll-down-icon bounce" size="3x" />
				</div>
			</Link>
		</div>
	);
}
