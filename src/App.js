import React from 'react';
import Clock from './components/Clock';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import EthPrice from './components/EthPrice';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CryptoList from "./components/CryptoList/CryptoList";

function App() {
    return (
      <div>
        <h1>Welcome to Larry's personal website!</h1>
        <Clock />
        {/* <EthPrice /> */}
        <About />
        <Projects />
        <Contact />
        <CryptoList />
      </div>
    );
  }


export default App;
