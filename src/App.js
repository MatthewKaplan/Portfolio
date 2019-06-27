import React from 'react';
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


import './App.css';

function App() {
  return (
    <div className="App">
      <Home className="home" />
      <Nav />
      <About className="about" />
      <Projects className="projects" />
      <Contact className="contact" />
    </div>
  );
}

export default App;
