import React, { Component } from "react";
import "./About.scss";

export default class About extends Component {
  state = { bio: false, love: false, work: false };

  render() {
    return (
      <div className="about-component">
        <img
          className="bg-image"
          src={"https://i.imgur.com/ba2ubgZ.jpg?2"}
          alt="Space"
        />
        <div className="overlay" />
        <section className="about-imgs">
          <div className="heart-container">
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
            <div className="content">
              <h1>WORK</h1>
            </div>
          </div>
          <div className="fingerprint-container">
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
        {this.state.bio && (
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
          </section>
        )}
      </div>
    );
  }
}

// <img
// className="heart-img"
// src={require("../../assets/heart.png")}
// alt="heart"
// />
