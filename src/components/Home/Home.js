import React, { Component } from "react";
import "./Home.scss";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class Home extends Component {
  render() {
    return (
      <div className="home-component">
        <div className="overlay" />
        <img
          className="bg-image"
          src={require("../../assets/splash.jpg")}
          alt="Space"
        />
        <section>
          <div className="intro">
            <h1 className="name">Matthew Kaplan</h1>
            <p className="position">Frontend Engineer</p>
            <div className="logo-container">
              <a href="https://github.com/MatthewKaplan" target="blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="github-icon"
                  size="2x"
                />
              </a>
              <a href="https://www.linkedin.com/in/kaplan-matthew/" target="blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="github-icon"
                size="2x"
              />
            </a>
            <FontAwesomeIcon
                icon={faEnvelope}
                className="github-icon"
                size="2x"
              />
            </div>
          </div>
        </section>
        <div className="scroll-down">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="scroll-down-icon bounce"
            size="3x"
          />
        </div>
      </div>
    );
  }
}
