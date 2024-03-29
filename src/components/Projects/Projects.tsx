import React, { FC, useState } from 'react';
import { projectData } from '../../helper/data';
import { Fade } from "react-awesome-reveal";
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import Tilt from 'react-parallax-tilt';

export const Projects: FC = () => {
	const [slidesPosition, setSlidesPosition] = useState<number>(0);

	const changeSlidesPositionForward = () => {
		if (slidesPosition < 14) {
			let triggeredPosition = slidesPosition;
			triggeredPosition++;
			setSlidesPosition(triggeredPosition);
		} else {
			setSlidesPosition(0);
		}
	};

	const changeSlidesPositionBack = () => {
		let position = slidesPosition;
		if (slidesPosition === 0) {
			setSlidesPosition(14);
		} else {
			position--;
			setSlidesPosition(position);
		}
	};

	const getProjectImages = (imgToRetrieve: string, classStyles: string) => {
		return projectData.map((project, index) => {
			if (index === slidesPosition) {
				const projectImg = project[imgToRetrieve as keyof typeof project];
				if (classStyles === "bg-image") {
					return (
						<Fade duration={2000}>
							<>
								<div className={classStyles} key={projectImg as string} style={{ backgroundImage: `url(${projectImg})` }} />
							</>
					</Fade>
					)
				} else {
					return <div className={classStyles} key={projectImg as string} style={{ backgroundImage: `url(${projectImg})` }} />;
			}
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

	const getProjectInfo = (info: string) => {
		return projectData.map((project, index) => {
			if (index === slidesPosition) {
				switch (info) {
					case 'name':
						return (
							<div className="project-name" key={project.name}>
								{project.name}
							</div>
						);
					case 'description':
						return (
							<div className="description" key={project.description}>
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
								<a href={website} key={project.website} className="link left-link" target="_blank" rel="noopener noreferrer">
									<img src="https://i.imgur.com/vYmjUIL.png" alt="left arrow" className="left-arrow" />
									<img src="https://i.imgur.com/ayShYqf.png" alt="eye" className="web-page" />
								</a>
							);
						}
						return null;
					case 'github link':
						const repo = project.repo;
						if (repo.length > 0) {
							return (
								<a href={repo} key={project.repo} className="link right-link" target="_blank" rel="noopener noreferrer">
									<img src="https://i.imgur.com/EqwwU5F.png" alt="github" className="web-page" />
									<img src="https://i.imgur.com/j1UgHSb.png" alt="right arrow" className="right-arrow" />
								</a>
							);
						}
						return null;
					case 'bg color': 
						return (
							<div className="background-styles" style={{ backgroundColor: project.backgroundPlaceholderColor }} />
						);
					default:
						return null;
				}
			}
			return null;
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
			{getProjectInfo('bg color')}
			<Tilt>
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
			</Tilt>
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
