import React, { Component } from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollableAnchor from "react-scrollable-anchor";
// import Slider from "./components/Projects/Projects";
import { configureAnchors } from "react-scrollable-anchor";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    configureAnchors({ offset: -60, scrollDuration: 200 });

    return (
      <div className="App">
        <ScrollableAnchor id={"section1"}>
          <Home className="home" />
        </ScrollableAnchor>
        <Nav />
        <ScrollableAnchor id={"section2"}>
          <About className="about" />
        </ScrollableAnchor>
        <ScrollableAnchor id={"section3"}>
          <Projects className="projects" />
        </ScrollableAnchor>
        <ScrollableAnchor id={"section4"}>
          <Contact className="contact" />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default withRouter(App);
