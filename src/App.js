import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Team from './pages/Team';
import About from './pages/About';
import Programs from './pages/Programs';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';
import Contact from './components/Contact';
import ScrollToTop from './components/Scroll';

function App() {
  return (
    <Router>
            <div className="overlay"></div> {/* Overlay for faded effect */}
            <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <ScrollToTop />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
