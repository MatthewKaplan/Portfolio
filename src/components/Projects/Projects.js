import React, { Component } from 'react';
import { projectData } from '../../helper/data';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import TiltPhaseSix from '../TiltPhaseSix/TiltPhaseSix';

const options = {
	max: 20,
	perspective: 1000,
	scale: 1
};

export default class Projects extends Component {
	state = { slidesPosition: 0, autoSlides: () => {} };

	componentDidMount () {
		const autoSlides = setInterval(this.changeSlidesPositionForward, 15000);
		this.setState({ autoSlides });
	}

	changeSlidesPositionForward = () => {
		const { slidesPosition } = this.state;
		const autoSlides = setInterval(this.changeSlidesPositionForward, 15000);
		let position = slidesPosition;
		if (position < 13) {
			position++;
			clearInterval(this.state.autoSlides);
			this.setState({ slidesPosition: position, autoSlides });
		} else {
			clearInterval(this.state.autoSlides);
			this.setState({ slidesPosition: 0, autoSlides });
		}
	};

	changeSlidesPositionBack = () => {
		const { slidesPosition } = this.state;
		const autoSlides = setInterval(this.changeSlidesPositionForward, 15000);
		let position = slidesPosition;
		if (slidesPosition === 0) {
			clearInterval(this.state.autoSlides);
			this.setState({ slidesPosition: 13, autoSlides });
		} else {
			position--;
			clearInterval(this.state.autoSlides);
			this.setState({ slidesPosition: position, autoSlides });
		}
	};

	getBackGroundImg = () => {
		return projectData.map((project, index) => {
			if (index === this.state.slidesPosition) {
				const backImg = project.backdrop;
				let backgroundImage = {
					backgroundImage: `url(${backImg})`
				};
				return <div className="bg-image" key={Date.now()} style={backgroundImage} />;
			} else {
				return null;
			}
		});
	};

	getLapTopImg = () => {
		return projectData.map((project, index) => {
			if (index === this.state.slidesPosition) {
				const backImg = project.img;
				let backgroundImage = {
					backgroundImage: `url(${backImg})`
				};
				return <div className="laptop-bg-image" key={Date.now()} style={backgroundImage} />;
			} else {
				return null;
			}
		});
	};

	getIphoneImg = () => {
		return projectData.map((project, index) => {
			if (index === this.state.slidesPosition) {
				const backImg = project.img;
				let backgroundImage = {
					backgroundImage: `url(${backImg})`
				};
				return (
					<div
						className={
							this.state.slidesPosition === 0 || this.state.slidesPosition === 2 ? (
								'iphone-bg-image sm-iphone-image'
							) : (
								'iphone-bg-image'
							)
						}
						key={Date.now()}
						style={backgroundImage}
					/>
				);
			} else {
				return null;
			}
		});
	};

	renderMobileImg = () => {
		const { slidesPosition } = this.state;
		return projectData.map((project, index) => {
			if (index === slidesPosition && project.mobile_img.length > 0) {
				const backImg = project.mobile_img;
				let backgroundImage = {
					backgroundImage: `url(${backImg})`
				};
				return (
					<div className="device2">
						<img
							className={
								slidesPosition === 0 || slidesPosition === 2 ? (
									'blank-iphone mobile-slide'
								) : (
									'blank-iphone'
								)
							}
							src={require('../../assets/blackIPhone.png')}
							alt="iPhone"
						/>
						<div
							className={
								slidesPosition === 0 || slidesPosition === 2 ? (
									'iphone-svg-image mobile-slide-img'
								) : (
									'iphone-svg-image'
								)
							}
							key={Date.now() + 1}
							style={backgroundImage}
						/>
						<img className={ slidesPosition === 0 || slidesPosition === 2 ? ("default-iphone-bg-image") : ("default-iphone-sm-image") } src={require('../../assets/blackout.jpg')} alt="Laptop" />
					</div>
				);
			} else {
				return null;
			}
		});
	};

	getProjectInfo = info => {
		return projectData.map((project, index) => {
			if (index === this.state.slidesPosition) {
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
						} else {
							return null;
						}
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

	render () {
		return (
			<div className="projects-component">
				<Arrow
					className="arrow-one arrow"
					data-test="arrow-forward"
					onClick={() => this.changeSlidesPositionForward()}
				/>
				<Arrow className="arrow-two arrow" data-test="arrow-back" onClick={() => this.changeSlidesPositionBack()} />
				{this.getBackGroundImg()}
				<div className="overlay" />
				{this.state.slidesPosition === 0 && <div className="background-styles" />}
				<TiltPhaseSix
					options={options}
					style={{
						height: '60%'
					}}>
					<div className="device">
						{this.state.slidesPosition === 0 || this.state.slidesPosition === 2 ? (
							<img className="iphone-image" src={require('../../assets/blackIPhone.png')} alt="iPhone" />
						) : (
							<div className="laptop-device">
								<img className="laptop-image" src={require('../../assets/laptop.png')} alt="Laptop" />
								<img className="default-laptop-bg-image" src={require('../../assets/blackout.jpg')} alt="Laptop" />
							</div>
						)}
						{this.state.slidesPosition === 0 || this.state.slidesPosition === 2 ? (
							this.getIphoneImg()
						) : (
							this.getLapTopImg()
						)}
					</div>
					{this.renderMobileImg()}
				</TiltPhaseSix>
				<section className="project-description">
					<section className="project-links">
						{this.getProjectInfo('project link')}
						{this.getProjectInfo('github link')}
					</section>
					{this.getProjectInfo('name')}
					{this.getProjectInfo('description')}
					<div className="separator">
						<hr />
					</div>
					<h1 className="built-with">BUILT WITH</h1>
					<div className="tools-used">
						<div className="icons">{this.getProjectInfo('tools')}</div>
						<div className="names">{this.getProjectInfo('tool name')}</div>
					</div>
				</section>
			</div>
		);
	}

	componentWillUnmount () {
		clearInterval(this.state.autoSlides);
	}
}
