import React, { Component } from 'react';
import { Home } from './components/Home/Home';
import { Nav } from './components/Nav/Nav';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { LazyLoad } from './components/LazyLoad/LazyLoad';
import { configureAnchors } from 'react-scrollable-anchor';
import { withRouter } from 'react-router-dom';

class App extends Component {
	render() {
		configureAnchors({ offset: -60, scrollDuration: 200 });

		return (
			<div className="App">
				<Home className="home" />
				<Nav />
				<About className="about" />
				<Projects className="projects" />
				<LazyLoad />
			</div>
		);
	}
}

export default withRouter(App);
