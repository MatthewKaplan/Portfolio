import React, { Component } from 'react';
import { projectData } from '../../helper/data';
import './LazyLoad.scss';

class LazyLoad extends Component {
	renderImages = () => {
		return projectData.map(data => {
			const laptopImg = data.img;
			const mobileImg = data.mobile_img;
			return (
				<React.Fragment>
					<img className="preload" src={laptopImg} height="1" width="1" alt="Laptop background"/>
					<img className="preload" src={mobileImg} height="1" width="1" alt="iPhone background"/>
				</React.Fragment>
			);
		});
	};

	render () {
		return (
      <div className="lazyLoad">
        {this.renderImages()}
        <img className="preload" src="https://i.imgur.com/mYV4YN6.png" height="1" width="1" alt="MacBook"/>
        <img className="preload" src="https://i.imgur.com/nsTenwY.png" height="1" width="1" alt="iPhone"/>
      </div>
    )
	}
}

export default LazyLoad;
