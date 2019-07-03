import React, { Component } from "react";
import "./Slides.scss";

class Slides extends Component {
  state = {
    icons: [],
    iconNames: [],
    currentIndex: 0,
    translateValue: 0,
    autoSlides: () => {}
  };

  componentDidMount() {
    const autoSlides = setInterval(this.goToNextSlide, 6000);
    this.setState({
      icons: this.props.icons,
      iconNames: this.props.iconNames,
      autoSlides
    });
  }

  goToPrevSlide = () => {
    const autoSlides = setInterval(this.goToNextSlide, 6000);
    if (this.state.currentIndex === 0) return;

    clearInterval(this.state.autoSlides);
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
      autoSlides
    }));
  };

  goToNextSlide = () => {
    const autoSlides = setInterval(this.goToNextSlide, 6000);
    if (this.state.currentIndex === this.state.icons.length - 1) {
      clearInterval(this.state.autoSlides);
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
        autoSlides
      });
    }
    clearInterval(this.state.autoSlides);
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
      autoSlides
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    const { iconNames, currentIndex } = this.state;
    return (
      <React.Fragment>
        <div className="slider">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: "transform ease-out 0.45s"
            }}
          >
            {this.state.icons.map((image, i) => (
              <Slide key={i} image={image} />
            ))}
          </div>
        </div>
        <div className="align-arrows">
          <h1 className="hobby">{iconNames[currentIndex]}</h1>
          <div
            className="arrowBack arrow"
            onClick={() => this.goToPrevSlide()}
          />
          <div
            className="arrowNext arrow"
            onClick={() => this.goToNextSlide()}
          />
        </div>
      </React.Fragment>
    );
  }
  componentWillUnmount() {
    clearInterval(this.state.autoSlides);
  }
}

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "100px 100px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div className="slide" style={styles} />;
};

export default Slides;
