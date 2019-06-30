import React, { Component } from "react";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about-component">
        <img
          className="bg-image"
          src={"https://i.imgur.com/ba2ubgZ.jpg?2"}
          alt="Space"
        />
        <div className="overlay" />
      </div>
    );
  }
}
