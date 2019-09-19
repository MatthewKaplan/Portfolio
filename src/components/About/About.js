import React, { Component } from "react";
import Slides from "../Slides/Slides";
import {
  hobbyImages,
  hobbyNames,
  skillNames,
  skillIcons
} from "../../helper/data";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default class About extends Component {
  state = { bio: false, love: false, skills: false };

  render() {
    const { bio, love, skills } = this.state;
    return (
      <div className="about-component">
        {bio && <div className="bio-bg-color" />}
        {love && <div className="love-bg-color" />}
        {skills && <div className="skills-bg-color" />}
        {bio === false && love === false && skills === false && (
          <React.Fragment>
            <div className="bg-color" />
            <div className="overlay" />
            <section className="about-imgs">
              <Fade left duration={2000}>
                <div
                  className="fingerprint-container"
                  onClick={() => this.setState({ bio: true })}
                >
                  <div className="image">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="content">
                    <h1>BIO</h1>
                  </div>
                </div>
              </Fade>
              <Zoom duration={2000}>
                <div
                  className="brain-container"
                  onClick={() => this.setState({ skills: true })}
                >
                  <div className="image">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="align-text">
                    <div className="left-content">
                      <h1>SKI</h1>
                    </div>
                    <div className="right-content">
                      <h1>LLS</h1>
                    </div>
                  </div>
                </div>
              </Zoom>
              <Fade right duration={2000}>
                <div
                  className="heart-container"
                  onClick={() => this.setState({ love: true })}
                >
                  <div className="image">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="content">
                    <h1>LOVE</h1>
                  </div>
                </div>
              </Fade>
            </section>
          </React.Fragment>
        )}
        {bio && (
          <React.Fragment>
            <section className="about-me-section">
              <img
                className="profile-picture"
                src={"https://i.imgur.com/8AF2NOa.jpg?1"}
                alt="profile"
              />
              <article>
                <div
                  className="close-bio"
                  onClick={() => this.setState({ bio: false })}
                />
                <p>
                  Hi! My name is Matthew Kaplan and I'm a Software Developer who
                  specializes in Front End development. Born and raised in New
                  York City, I moved to Colorado in 2012 to study at the
                  University of Colorado Boulder.
                </p>
                <p>
                  After graduating from college with a B.A. in Computer Science,
                  I found myself as a Project Manager for a nationwide
                  construction company. After almost 2 years in that position, I
                  decided that it was time to get back to doing what I love,
                  which is programming.
                </p>
              </article>
            </section>
          </React.Fragment>
        )}
        {love && (
          <section className="love-section">
            <div
              className="close-section"
              onClick={() => this.setState({ love: false })}
            />
            <div className="slides">
              <Slides icons={hobbyImages} iconNames={hobbyNames} />
            </div>
          </section>
        )}
        {skills && (
          <section className="love-section">
            <div
              className="close-section"
              onClick={() => this.setState({ skills: false })}
            />
            <div className="slides">
              <Slides icons={skillIcons} iconNames={skillNames} />
            </div>
          </section>
        )}
      </div>
    );
  }
}
