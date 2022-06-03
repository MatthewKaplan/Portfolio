import React, { FC } from 'react';
import { Home } from './components/Home/Home';
import { Nav } from './components/Nav/Nav';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { LazyLoad } from './components/LazyLoad/LazyLoad';
import { configureAnchors } from 'react-scrollable-anchor';

export const App: FC = () => {
	configureAnchors({ offset: -60, scrollDuration: 200 });
	return (
	<div className="App">
		<Home />
		<Nav />
		<About />
		<Projects />
		<LazyLoad />
	</div>
	)
}
