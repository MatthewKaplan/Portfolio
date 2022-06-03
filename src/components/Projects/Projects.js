import React, { useState } from 'react';
import { projectData } from '../../helper/data';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import TiltPhaseSix from '../TiltPhaseSix/TiltPhaseSix';

const options = {
	max: 20,
	perspective: 1000,
	scale: 1
};

export const Projects = () => {
	const [slidesPosition, setSlidesPosition] = useState(0);
	const [autoSlides, setAutoSlides] = useState(1);

	const changeSlidesPositionForward = () => {
		const slide = setInterval(() => changeSlidesPositionForward(), 15000);
		let position = slidesPosition;
		if (position < 14) {
			position++;
			clearInterval(autoSlides);
			setSlidesPosition(position);
			setAutoSlides(slide);
		} else {
			clearInterval(autoSlides);
			setSlidesPosition(0);
			setAutoSlides(slide);
		}
	};

	const changeSlidesPositionBack = () => {
		const slide = setInterval(() => changeSlidesPositionForward(), 15000);
		let position = slidesPosition;
		if (slidesPosition === 0) {
			clearInterval(autoSlides);
			setSlidesPosition(14);
			setAutoSlides(slide);
		} else {
			position--;
			clearInterval(autoSlides);
			setSlidesPosition(position);
			setAutoSlides(slide);
		}
	};

	const getProjectImages = (imgToRetrieve, classStyles) => {
		return projectData.map((project, index) => {
			if (index === slidesPosition) {
				const projectImg = project[imgToRetrieve];
				return <div className={classStyles} key={projectImg} style={{ backgroundImage: `url(${projectImg})` }} />;
			}
			return null;
		});
	};

	const renderMobileImg = () => {
		return projectData.map((project, index) => {
			if (index === slidesPosition && project.mobile_img.length > 0) {
				const backImg = project.mobile_img;
				return (
					<div className="device2" key={backImg}>
						<img
							className={slidesPosition <= 1 ? 'blank-iphone mobile-slide' : 'blank-iphone'}
							src="https://i.imgur.com/nsTenwY.png"
							alt="iPhone"
						/>
						<div
							className={slidesPosition <= 1 ? 'iphone-svg-image mobile-slide-img' : 'iphone-svg-image'}
							style={{ backgroundImage: `url(${backImg})` }}
						/>
					</div>
				);
			}
			return null;
		});
	};

	const getProjectInfo = info => {
		return projectData.map((project, index) => {
			if (index === slidesPosition) {
				switch (info) {
					case 'name':
						return (
							<div className="project-name" key={project}>
								{project.name}
							</div>
						);
					case 'description':
						return (
							<div className="description" key={project}>
								{project.description}
							</div>
						);
					case 'tools':
						return project.tool_icons.map(icon => {
							const styles = {
								backgroundImage: `url(${icon})`,
								backgroundSize: 'contain',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: '50% 60%'
							};
							return <div className="tool-icons" style={styles} key={icon} />;
						});
					case 'tool name':
						return project.tools_used.map(tool => (
							<p className="tool-name" key={tool}>
								{tool}
							</p>
						));
					case 'project link':
						const website = project.website;
						if (website.length > 0) {
							return (
								<a href={website} key={project} className="link left-link" target="_blank" rel="noopener noreferrer">
									<img src="https://i.imgur.com/vYmjUIL.png" alt="left arrow" className="left-arrow" />
									<img src="https://i.imgur.com/ayShYqf.png" alt="eye" className="web-page" />
								</a>
							);
						}
						return null;
					case 'github link':
						const repo = project.repo;
						return (
							<a href={repo} key={project} className="link right-link" target="_blank" rel="noopener noreferrer">
								<img src="https://i.imgur.com/EqwwU5F.png" alt="github" className="web-page" />
								<img src="https://i.imgur.com/j1UgHSb.png" alt="right arrow" className="right-arrow" />
							</a>
						);
					default:
						return null;
				}
			}
		});
	};

	return (
		<div className="projects-component">
			<Arrow
				className="arrow-one arrow"
				data-test="arrow-forward"
				onClick={() => changeSlidesPositionForward()}
			/>
			<Arrow className="arrow-two arrow" data-test="arrow-back" onClick={() => changeSlidesPositionBack()} />
			{getProjectImages('backdrop', 'bg-image')}
			<div className="overlay" />
			{slidesPosition === 0 && <div className="background-styles" />}
			<TiltPhaseSix
				options={options}
				style={{
					height: '60%'
				}}>
				<div className="device">
					{slidesPosition <= 1 ? (
						<img className="iphone-image" src="https://i.imgur.com/nsTenwY.png" alt="iPhone" />
					) : (
						<div className="laptop-device">
							<img className="laptop-image" src="https://i.imgur.com/mYV4YN6.png" alt="Laptop" />
						</div>
					)}
					{slidesPosition <= 1 ? getProjectImages('img', slidesPosition <= 1 ? 'iphone-bg-image sm-iphone-image' : 'iphone-bg-image') : getProjectImages('img', 'laptop-bg-image')}
				</div>
				{renderMobileImg()}
			</TiltPhaseSix>
			<section className="project-description">
				<section className="project-links">
					{getProjectInfo('project link')}
					{getProjectInfo('github link')}
				</section>
				{getProjectInfo('name')}
				{getProjectInfo('description')}
				<div className="separator">
					<hr />
				</div>
				<h1 className="built-with">BUILT WITH</h1>
				<div className="tools-used">
					<div className="icons">{getProjectInfo('tools')}</div>
					<div className="names">{getProjectInfo('tool name')}</div>
				</div>
			</section>
		</div>
	);
}
