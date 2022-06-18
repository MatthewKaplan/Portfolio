import React, { FC } from 'react';
import { projectData } from '../../helper/data';

export const LazyLoad: FC = () => {
	const renderImages = () => {
		return projectData.map(data => {
			return (
				<div key={data.img}>
					<img src={data.img} height="1" width="1" alt="Laptop background" />
					<img src={data.mobile_img} height="1" width="1" alt="iPhone background" />
					<img src={data.backdrop} height="1" width="1" alt="iPhone background" />
				</div>
			);
		});
	};

	return (
		<div className="lazyLoad">
			{renderImages()}
			<img src="https://i.imgur.com/mYV4YN6.png" height="1" width="1" alt="MacBook" />
			<img src="https://i.imgur.com/nsTenwY.png" height="1" width="1" alt="iPhone" />
		</div>
	)
}
