import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    let pathname = window.location.href;
    return (
      <div className="nav-component">
        <nav className="nav-bar">
          <ul className="navbar-nav">
            <Link
              to="home-component"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              <li
                className={
                  pathname === "http://localhost:3000/#section1"
                    ? "active"
                    : null
                }
              >
                HOME
              </li>
            </Link>
            <Link
              to="about-component"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              <li
                className={
                  pathname === "http://localhost:3000/#section2"
                    ? "active"
                    : null
                }
              >
                ABOUT
              </li>
            </Link>
            <Link
              to="projects-component"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              <li
                className={
                  pathname === "http://localhost:3000/#section3"
                    ? "active"
                    : null
                }
              >
                PORTFOLIO
              </li>
            </Link>
            <Link
              to="contact-component"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              <li
                className={
                  pathname === "http://localhost:3000/#section4"
                    ? "active"
                    : null
                }
              >
                CONTACT
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
