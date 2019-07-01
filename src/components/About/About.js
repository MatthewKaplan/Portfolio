import React, { Component } from "react";
import LoveSlides from "../LoveSlides/LoveSlides";
import "./About.scss";

export default class About extends Component {
  state = { bio: false, love: false, work: false };

  render() {
    const { bio, love, work } = this.state;
    return (
      <div className="about-component">
        <img
          className="bg-image"
          src={"https://i.imgur.com/ba2ubgZ.jpg?2"}
          alt="Space"
        />
        <div className="overlay" />
        {bio === false && love === false && work === false && (
          <section className="about-imgs">
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
            <div className="brain-container">
              <div className="image">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="align-text">
                <div className="left-content">
                  <h1>WO</h1>
                </div>
                <div className="right-content">
                  <h1>RK</h1>
                </div>
              </div>
            </div>
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
          </section>
        )}
        {bio && (
          <section className="about-me-section">
            <img
              className="profile-picture"
              src={"https://i.imgur.com/8AF2NOa.jpg?1"}
              alt="profile"
            />
            <article>
              <p>
                I'm Matthew and I'm a Software Engineer who specializes in
                Frontend development. Born and raised in New York City, New
                York, I moved to Colorado in 2012 to study at the University of
                Colorado Boulder.
              </p>
              <p>
                After graduating college with a B.A. in Computer Science, I
                found myself as a Project Manager for a nationwide construction
                company. After almost 2 years in that position I decided that I
                wanted to get back to doing what I loved which was programming.
              </p>
              <p>
                So I enrolled myself in the frontend program at The Turing
                School of Software & Design where I spent over 1500 hours over
                the course of seven months to become a job ready engineer.
              </p>
            </article>
            <div
              className="close-section"
              onClick={() => this.setState({ bio: false })}
            />
          </section>
        )}
        {love && (
          <section className="love-section">
            <div
              className="close-section"
              onClick={() => this.setState({ love: false })}
            />
            <div className="slides">
              <LoveSlides />
            </div>
          </section>
        )}
      </div>
    );
  }
}
