import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion"; // Import Framer Motion

import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import KnowMore from "./components/KnowMore";
import Nav from "./components/Nav";
import "./App.css";
import { ThemeProvider } from './components/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
    <Router>
      <main>
        <div className='main'>
          <div className='gradient' />
        </div>

        <div className='app'>
          <Nav  />  
          
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/knowmore" element={<KnowMore />} />
              <Route path="/demo" element={<Demo />} />
            </Routes>
          <Footer />
        </div>
      </main>
    </Router>
    </ThemeProvider>
  );
};

export default App;
