import React, { Component } from "react";
import { projectData } from "../../helper/data";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as Circle } from "../../assets/circle-regular.svg";
import { ReactComponent as SolidCircle } from "../../assets/circle-solid.svg";
import "./Projects.scss";
import ProjectSlides from "../ProjectSlides/ProjectSlides";

export default class Projects extends Component {
  state = { slidesPosition: 0, autoSlides: () => {} };

  componentDidMount() {
    const autoSlides = setInterval(this.changeSlidesPositionForward, 6000);
    this.setState({ autoSlides });
  }

  changeSlidesPositionForward = () => {
    const { slidesPosition } = this.state;
    const autoSlides = setInterval(this.changeSlidesPositionForward, 6000);
    let position = slidesPosition;
    if (position < 8) {
      position++;
      clearInterval(this.state.autoSlides);
      this.setState({ slidesPosition: position, autoSlides });
    } else {
      clearInterval(this.state.autoSlides);
      this.setState({ slidesPosition: 0, autoSlides });
    }
  };

  changeSlidesPositionBack = () => {
    const { slidesPosition } = this.state;
    const autoSlides = setInterval(this.changeSlidesPositionForward, 6000);
    let position = slidesPosition;
    if (slidesPosition === 0) {
      clearInterval(this.state.autoSlides);
      this.setState({ slidesPosition: 8, autoSlides });
    } else {
      position--;
      clearInterval(this.state.autoSlides);
      this.setState({ slidesPosition: position, autoSlides });
    }
  };

  getBackGroundImg = () => {
    return projectData.map((project, index) => {
      if (index === this.state.slidesPosition) {
        const backImg = project.backdrop;
        let backgroundImage = {
          backgroundImage: `url(${backImg})`
        };
        return (
          <div
            className="phish-image"
            key={Date.now()}
            style={backgroundImage}
          />
        );
      } else {
        return null;
      }
    });
  };

  getLapTopImg = () => {
    return projectData.map((project, index) => {
      if (index === this.state.slidesPosition) {
        const backImg = project.img;
        let backgroundImage = {
          backgroundImage: `url(${backImg})`
        };
        return (
          <div
            className="goPhish-image"
            key={Date.now()}
            style={backgroundImage}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <div className="projects-component">
        <Arrow
          className="arrow-one arrow"
          data-test="arrow-forward"
          onClick={() => this.changeSlidesPositionForward()}
        />
        <Arrow
          className="arrow-two arrow"
          data-test="arrow-back"
          onClick={() => this.changeSlidesPositionBack()}
        />
        {this.getBackGroundImg()}
        <div className="overlay" />
        <div className="device">
          <img
            className="laptop-image"
            src={require("../../assets/laptop.png")}
            alt="Laptop"
          />
          <img
            className="goPhish-image2"
            src={require("../../assets/blackout.jpg")}
            alt="Laptop"
          />
          {this.getLapTopImg()}
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.autoSlides);
  }
}

// class Slider extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       backdropImgs: [],
//       currentIndex: 0,
//       backGroundTranslateValue: 0
//     };
//   }

//   componentDidMount() {
//     this.fetchBackgroundImgs();
//   }

//   fetchBackgroundImgs = () => {
//     const backDropArr = [];
//     projectData.map(project => backDropArr.push(project.backdrop));
//     this.setState({ backdropImgs: backDropArr });
//   };

//   goToPrevSlide = () => {
//     if (this.state.currentIndex === 0) return;

//     this.setState(prevState => ({
//       currentIndex: prevState.currentIndex - 1,
//       backGroundTranslateValue:
//         prevState.backGroundTranslateValue + this.backGroundSlideWidth()
//     }));
//   };

//   goToNextSlide = () => {
//     // Exiting the method early if we are at the end of the images array.
//     // We also want to reset currentIndex and translateValue, so we return
//     // to the first image in the array.
//     if (this.state.currentIndex === this.state.backdropImgs.length - 1) {
//       return this.setState({
//         currentIndex: 0,
//         backGroundTranslateValue: 0
//       });
//     }

//     // This will not run if we met the if condition above
//     this.setState(prevState => ({
//       currentIndex: prevState.currentIndex + 1,
//       backGroundTranslateValue:
//         prevState.backGroundTranslateValue + -this.backGroundSlideWidth()
//     }));
//   };

//   backGroundSlideWidth = () => {
//     return document.querySelector(".backGroundSlide").clientWidth;
//   };

//   render() {
//     return (
//       <div className="slider">
//         <div
//           className="slider-wrapper"
//           style={{
//             transform: `translateX(${this.state.backGroundTranslateValue}px)`,
//             transition: "transform ease-out 0.45s"
//           }}
//         >
//           {this.state.backdropImgs.map((image, i) => (
//             <BackgroundSlide key={i} image={image} />
//           ))}
//         </div>

//         <div className="device">
//           <img
//             className="laptop-image"
//             src={require("../../assets/laptop.png")}
//             alt="Laptop"
//           />
//           <ProjectSlides projectIndex={this.state.currentIndex}/>
//         </div>

//         <LeftArrow goToPrevSlide={this.goToPrevSlide} />

//         <RightArrow goToNextSlide={this.goToNextSlide} />
//       </div>
//     );
//   }
// }

// const BackgroundSlide = ({ image }) => {
//   const styles = {
//     backgroundImage: `url(${image})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "50% 60%"
//   };
//   return <div className="backGroundSlide" style={styles} />;
// };

// const LeftArrow = props => {
//   return (
//     <div className="backArrow arrow" onClick={props.goToPrevSlide}>
//       <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
//     </div>
//   );
// };

// const RightArrow = props => {
//   return (
//     <div className="nextArrow arrow" onClick={props.goToNextSlide}>
//       <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
//     </div>
//   );
// };

// export default Slider;
