import React, { Component } from "react";
import { projectData } from "../../helper/data";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import "./Projects.scss";

export default class Projects extends Component {
  state = { slidesPosition: 1 };

  changeSlidesPositionForward = () => {
    const { slidesPosition } = this.state;
    let position = slidesPosition;
    if (position < 10) {
      position++;
      this.setState({ slidesPosition: position });
    } else {
      this.setState({ slidesPosition: 0 });
    }
  };

  changeSlidesPositionBack = () => {
    const { slidesPosition } = this.state;
    let position = slidesPosition;
    if (slidesPosition === 0) {
      this.setState({ slidesPosition: 9 });
    } else {
      position--;
      this.setState({ slidesPosition: position });
    }
  };



  render() {
    return (
      <div className="projects-component">
        <div className="overlay" />
        <Arrow
        className="arrow-one arrow"
        data-test='arrow-forward'
        onClick={() => this.changeSlidesPositionForward()}
      />
      <Arrow
        className="arrow-two arrow"
        data-test='arrow-back'
        onClick={() => this.changeSlidesPositionBack()}
      />
        <img
          className="phish-image"
          src={require("../../assets/idea-box-bg.jpg")}
          alt="Laptop"
        />
        <div className="device">
          <img
            className="laptop-image"
            src={require("../../assets/laptop.png")}
            alt="Laptop"
          />
          <img
            className="goPhish-image"
            src={require("../../assets/idea-box.png")}
            alt="My goPhish application"
          />
        </div>
      </div>
    );
  }
}
