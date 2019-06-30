import React from "react";
import "./ProjectSlides.scss";
import { projectData } from "../../helper/data";

class ProjectSlides extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectImgs: [],
      currentIndex: 0,
      translateValue: 0
    };
  }

  componentDidMount() {
    this.setState({currentIndex: this.props.projectIndex})
    this.fetchPageImgs();
  }

  fetchPageImgs = () => {
    const projectImgsArr = [];
    projectData.map(project => projectImgsArr.push(project.img));
    this.setState({ projectImgs: projectImgsArr });
  };

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.projectImgs.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    console.log(this.state.projectImgs);
    return (
      <div className="project-slides">
      <div
      className="slider-wrapper2 laptopImgs"
      style={{
        transform: `translateX(${this.state.translateValue}px)`,
        transition: "transform ease-out 0.45s"
      }}
      >
      {this.state.projectImgs.map((image, i) => (
        <Slide key={i} image={image} />
        ))}
        </div>
      </div>
    );
  }
}

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div className="slide" style={styles} />;
};

export default ProjectSlides;
