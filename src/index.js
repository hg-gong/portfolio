import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import EthPrice from './EthPrice';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <h1>Welcome to Larry's personal website!</h1>
      <Clock />
      <EthPrice />
      <p>This is the landing page for Larry's personal website. Here, you can learn more about Larry and see some of his work.</p>
    </div>
  );
}


// Render the About, Projects, and Contact components
ReactDOM.render(
  <>
    <App />
    <About />
    <Projects />
    <Contact />
  </>,
  document.getElementById('root')
);

